import { cn } from "@/lib/utils";
import ReactMarkDown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function ResponseMarkDown(props: {
  message: string;
  className?: string;
}) {
  return (
    <ReactMarkDown
      className={cn("!flex !flex-col gap-6", props.className)}
      remarkPlugins={[remarkBreaks]}
    >
      {props.message.replaceAll('"', "")}
    </ReactMarkDown>
  );
}
