'use client';
import CopyToClipboard from '@/components/core/copyToClipboard';
import { FadeImg } from '@/components/core/fadeImg';
import ResponseMarkDown from '@/components/core/responseMarkDown';
import MobileHeader from '@/components/shared/header';
import { MainSectionWrapper } from '@/components/shared/sectionWrapper';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import QueryWrapper from '@/components/wrapper/queryWarpper';
import { useGenerateContent } from '@/hooks/mutation';
import { DEFAULT_SYSTEM_PROMPT } from '@/lib/constants';
import { cn, FormPrompt, getFormPrompt, Validator } from '@/lib/utils';
import useStore from '@/store/app';
import { AnimatePresence } from 'framer-motion';
import { CircleArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import '../../../global.css';

export default function ToolTemplateForm() {
  const [loadingForm, setLoadingForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formPrompt, setFormPrompt] = useState<FormPrompt>();
  const path = usePathname().split('/').pop();
  const searchParams = useSearchParams();
  const { generatedContent } = useStore();
  const query = searchParams.get('q');

  useEffect(() => {
    setLoadingForm(true);
    if (typeof path == 'string' && query !== null) {
      let fp = getFormPrompt(path, query);
      if (!fp) return;
      setFormPrompt(fp);
      setLoadingForm(false);
    }
  }, [path, query, loading, generatedContent]);

  return (
    <AnimatePresence mode="wait">
      <PageWrapper>
        {!loadingForm && (
          <PromptForm
            setLoading={setLoading}
            query={query ?? ''}
            formTemplate={formPrompt!}
          />
        )}
        <QueryWrapper isLoading={loading} view={<ResponseRenderSection />} />
      </PageWrapper>
    </AnimatePresence>
  );
}

function PageWrapper(props: { children: React.ReactNode }) {
  return (
    <main className="bg-primary-dark font-poppins scroll-smooth flex flex-col md:flex-row">
      <MobileHeader />
      {props.children}
    </main>
  );
}

interface PromptFrom {
  className?: string;
  formTemplate: FormPrompt;
  query: string;
  setLoading: (value: boolean) => void;
}

function PromptForm(props: PromptFrom) {
  const [prompt, setPrompt] = useState('');
  const { hint, title } = props.formTemplate;
  const {
    isError,
    error,
    isPending: isGenerating,
    mutate: generateContent,
  } = useGenerateContent();
  const { setGeneratedContent } = useStore();

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    setGeneratedContent('');
    if (!Validator.checkLength(prompt, 10))
      return toast.error('Please enter a valid prompt.');
    props.setLoading(true);
    generateContent(
      {
        systemPrompt: DEFAULT_SYSTEM_PROMPT,
        userPrompt: prompt,
        query: props.query,
      },
      {
        onSuccess: (data) => {
          setGeneratedContent(data.response);
          props.setLoading(false);
        },
      }
    );
    if (!isError && error)
      return toast.error('Oops ! something went wrong, please try again');
  };
  return (
    <div
      className={cn(
        'overflow-x-hidden bg-background overflow-y-auto min-w-72 max-w-72 h-screen border-r-2 border-border hidden md:block',
        props.className
      )}
    >
      <Link href={'/dashboard'}>
        <div className="px-4 py-6 bg-[#83fdce] flex justify-start items-center">
          <CircleArrowLeftIcon className="text-primary-dark" />
          <span className="pl-7 text-lg font-semibold text-primary-dark leading-5 tracking-tight">
            {title}
          </span>
        </div>
      </Link>

      <div className="mt-10 grid grid-cols-1 gap-2 px-5 text-base text-slate-300 font-medium tracking-normal leading-5">
        <span className="font-semibold text-lg text-white">Prompt hint:</span>
        <p className="font-normal">{hint}</p>
        <Textarea
          onChange={(e) => setPrompt(e.target.value)}
          className="mt-5"
          rows={7}
          placeholder=".."
        />
        <Button disabled={isGenerating} onClick={handleSubmit}>
          {isGenerating ? 'Generating..' : 'Generate'}
        </Button>
      </div>
    </div>
  );
}

function ResponseRenderSection() {
  const { generatedContent } = useStore();
  const showEmptyView = generatedContent === '';
  useEffect(() => {}, [generatedContent]);
  return (
    <div>
      {showEmptyView ? (
        <EmptyResponse />
      ) : (
        <MainSectionWrapper>
          <div className="p-5 border border-border rounded-md">
            <CopyToClipboard text={generatedContent} />
            <ResponseMarkDown
              className="text-slate-300 "
              message={generatedContent}
            />
          </div>
        </MainSectionWrapper>
      )}
    </div>
  );
}

function EmptyResponse() {
  return (
    <div className="w-[80vw] h-screen flex justify-center items-center">
      <FadeImg className="w-60 h-60 mx-auto" src="../images/prompt.svg" />
    </div>
  );
}
