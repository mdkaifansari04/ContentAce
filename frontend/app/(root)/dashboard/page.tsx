import { MainSectionWrapper } from '@/components/shared/sectionWrapper';
import { Heading, Paragraph } from '@/components/typography';
import { BLOG_CARDS, EMAIL_CARDS, YOUTUBE_CARDS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AtSignIcon, FileText, GlobeIcon, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <MainSectionWrapper>
      <ToolSection
        title="YouTube Features"
        description="Generate video ideas, titles, tags, and descriptions to boost your channel."
        className="mt-14"
      >
        <GridSectionWrapper>
          {YOUTUBE_CARDS.map((i, k) => (
            <ToolCard key={`youtube-card-${k}`} {...i} icon={<YoutubeIcon />} />
          ))}
        </GridSectionWrapper>
      </ToolSection>
      <ToolSection
        title="Blog"
        description="Generate ideas for blog posts related to YouTube content."
        className="mt-14"
      >
        <GridSectionWrapper>
          {BLOG_CARDS.map((i, k) => (
            <ToolCard key={`blog-card-${k}`} {...i} icon={<FileText />} />
          ))}
        </GridSectionWrapper>
      </ToolSection>
      <ToolSection
        title="Email"
        description="Generate email templates for communication with sponsors, collaborators, or fans."
        className="mt-14"
      >
        <GridSectionWrapper>
          {EMAIL_CARDS.map((i, k) => (
            <ToolCard
              disable
              key={`email-card-${k}`}
              {...i}
              icon={<AtSignIcon />}
            />
          ))}
        </GridSectionWrapper>
      </ToolSection>
    </MainSectionWrapper>
  );
}

function GridSectionWrapper(props: { children: React.ReactNode }) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
      {props.children}
    </div>
  );
}

function ToolSection(props: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('', props.className)}>
      <Heading className="text-white font-" text={props.title} />
      <Paragraph text={props.description} />
      <div className="mt-5">{props.children}</div>
    </section>
  );
}

interface ToolCardProps {
  className?: string;
  type: 'youtube' | 'product' | 'email' | 'blog' | string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  disable?: boolean;
}

function ToolCard(props: ToolCardProps) {
  return (
    <Link
      href={`/tools/${props.type}/?q=${props.href}`}
      aria-disabled={props.disable}
      className={cn('group h-full cursor-pointer gap-2 ', props.className)}
    >
      <article className="flex flex-col min-h-[190px] ease-in-out duration-150 md:min-h-[220px] gap-2 rounded-md bg-primary-card p-6 border  border-border hover:border-[#3b424a]">
        <div
          className={cn(
            'flex aspect-square border-b border-border w-fit items-center justify-center rounded-full p-2.5 [&_svg]:text-white',
            {
              'website-button': props.type === 'youtube',
              'social-media-button': props.type === 'product',
              'script-button': props.type === 'blog',
              'email-button': props.type === 'email',
            }
          )}
        >
          {props.icon ?? <GlobeIcon />}
        </div>
        <div className="mt-3">
          <Heading className="!text-lg !font-medium " text={props.title} />
          <Paragraph className="!text-sm" text={props.description} />
        </div>
      </article>
    </Link>
  );
}
