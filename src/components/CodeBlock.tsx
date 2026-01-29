"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeBlock({
  code,
  language = "bash",
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`code-block relative ${className}`}>
      <div className="flex items-center justify-between border-b border-[#333333] px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#888888]">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}
