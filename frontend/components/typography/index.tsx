import { cn } from "@/lib/utils";

interface CommonTypographyProps {
  className?: string;
  text: string | React.ReactNode;
}

export function Paragraph(props: CommonTypographyProps) {
  return (
    <p
      className={cn(
        "text-primary-foreground font-poppins text-sm md:text-lg font-light leading-6 md:leading-7",
        props.className
      )}
    >
      {props.text}
    </p>
  );
}

export function Heading(props: CommonTypographyProps) {
  return (
    <p
      className={cn(
        "text-secondary-heading text-2xl font-semibold leading-9",
        props.className
      )}
    >
      {props.text}
    </p>
  );
}
