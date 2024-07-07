"use client";
import { cn } from "@/lib/utils";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { Heading, Paragraph } from "../typography";

interface ToolCardProps {
  className?: string;
  type: "youtube" | "product" | "email" | "blog";
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}
export default function ToolCard(props: ToolCardProps) {
  return (
    <Link
      prefetch
      href={`/tools/${props.href}`}
      className={cn(
        "group h-full cursor-pointer gap-2 border border-border",
        props.className
      )}
    >
      <article className="flex flex-col gap-2 bg-primary-card p-5 ">
        <div
          className={cn(
            "flex aspect-square  w-fit items-center justify-center rounded-full p-2.5 [&_svg]:text-white",
            {
              "website-button": props.type === "youtube",
              "social-media-button": props.type === "product",
              "script-button": props.type === "blog",
              "email-button": props.type === "email",
            }
          )}
        >
          {props.icon ?? <GlobeIcon />}
        </div>
        <div className="">
          <Heading className="!text-lg !font-medium " text={props.title} />
          <Paragraph text={props.description} />
        </div>
      </article>
    </Link>
  );
}
