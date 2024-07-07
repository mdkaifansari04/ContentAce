"use client";
import { cn } from "@/lib/utils";
import { CheckCircle, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function CopyToClipboard(props: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      navigator.clipboard.writeText(props.text.replaceAll("**", ""));
      toast.success("Copied to clipboard.");
    } catch (error) {
      console.error("Fail to copy the text", error);
      toast.error("Failed to copy the message.");
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className={cn(
        "relative group cursor-pointer flex justify-end items-end",
        props.className
      )}
      onClick={(e) => handleCopy(e)}
    >
      <CopyIcon
        className={`text-slate-500 group-hover:text-white w-5 h-5 ${
          copied ? "hidden" : "block"
        }`}
      />
      <CheckCircle
        className={`text-slate-500 group-hover:text-white w-5 h-5 ${
          copied ? "block" : "hidden"
        }`}
      />
    </div>
  );
}
