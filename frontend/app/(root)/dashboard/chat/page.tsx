'use client';
import ScrollToBottom from 'react-scroll-to-bottom';
import CopyToClipboard from '@/components/core/copyToClipboard';
import { FadeImg } from '@/components/core/fadeImg';
import ResponseMarkDown from '@/components/core/responseMarkDown';
import Icon from '@/components/shared/iconImage';
import { MainSectionWrapper } from '@/components/shared/sectionWrapper';
import { Button } from '@/components/ui/button';
import { useSendChatRequest } from '@/hooks/mutation';
import { CHAT_SYSTEM_PROMPT } from '@/lib/constants';
import { cn, Validator } from '@/lib/utils';
import useStore from '@/store/app';
import { EllipsisIcon, LoaderCircle, LoaderCircleIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
export default function DashboardChat() {
  const [prompt, setPrompt] = useState('');
  const { chats, setChat } = useStore();
  const { mutate, isPending: isSending } = useSendChatRequest();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.lastElementChild?.scrollIntoView();
  }, [chats]);
  const handleSubmit = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.preventDefault();
    if (!Validator.checkLength(prompt, 10))
      return toast.error('Please enter a valid prompt.');
    setChat({ sender: 'user', message: prompt ?? '' });
    mutate(
      {
        systemPrompt: CHAT_SYSTEM_PROMPT,
        userPrompt: prompt,
      },
      {
        onSuccess: (response) => {
          setChat({ sender: 'model', message: response.response ?? '' });
          setPrompt('');
        },
        onError: () => {
          toast.error('Oops! something went wrong, Try again.');
        },
      }
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log('test', event.key);

    if (event.key === 'Enter') handleSubmit(event);
  };

  return (
    <MainSectionWrapper>
      <section className="relative w-full h-screen flex flex-col justify-center overflow-y-auto">
        <div
          ref={ref}
          className="h-full scroll-smooth relative w-full  md:w-[80%] mx-auto flex flex-col gap-y-6 mb-60"
        >
          {chats.map((i, k) => (
            <ChatMessageSection
              key={`chat-message-${k}`}
              message={i.message}
              type={i.sender}
            />
          ))}
          {isSending && <ChatMessageLoader />}
        </div>
        <div className="fixed bottom-9 w-full left-[28%] md:w-[60%] justify-center mx-auto backdrop-blur-md flex items-center bg-background rounded-full">
          <input
            type="text"
            placeholder="Enter your query"
            className="w-full px-4relative bg-transparent text-white font-medium px-6 py-5 left-6 -bottom-3 outline-none border-none rounded-full "
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            onKeyPress={handleKeyDown}
          />
          <Button
            size={'icon'}
            className="primary absolute right-5 !text-white rounded-full w-12"
            onClick={handleSubmit}
            disabled={isSending}
          >
            {!isSending ? (
              <Icon className="w-6" src="send.svg" />
            ) : (
              <LoaderCircle className="w-4 text-white animate-spin" />
            )}
          </Button>
        </div>
      </section>
    </MainSectionWrapper>
  );
}

function ChatMessageSection(props: {
  message: string;
  type: 'user' | 'model';
  userImage?: string;
}) {
  const showModelResponse =
    props.type === 'model' && props.message.length !== 0;
  const showUserResponse = props.type === 'user' && props.message.length !== 0;

  return (
    <div
      className={cn('min-w-full h-auto flex items-center gap-3 mx-auto', {
        'flex-col items-start': showModelResponse,
      })}
    >
      {showModelResponse && (
        <Icon
          className="w-10 h-10 p-2 border border-border rounded-full"
          src="ai.svg"
        />
      )}
      {showUserResponse && (
        <FadeImg
          className="w-10 h-10 p-2 border border-border rounded-full"
          src={props.userImage ?? '../images/profile.avif'}
        />
      )}
      {showModelResponse && (
        <CopyToClipboard className="absolute right-0" text={props.message} />
      )}
      <ResponseMarkDown message={props.message} />
    </div>
  );
}

function ChatMessageLoader() {
  return (
    <div className={cn('min-w-full h-auto flex items-center gap-3 mx-auto')}>
      <Icon
        className="w-10 h-10 p-2 border border-border rounded-full"
        src="ai.svg"
      />
      <EllipsisIcon className="w-6 text-white animate-pulse" />
    </div>
  );
}
