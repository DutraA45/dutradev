"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/** Copia um valor para a área de transferência e confirma por 2 segundos. */
export function CopyButton({
  value,
  label,
}: {
  value: string;
  /** Descreve o que está sendo copiado, para leitores de tela. */
  label: string;
}) {
  const [copied, setCopied] = useState(false);
  const [available, setAvailable] = useState(false);

  // A Clipboard API só existe em contexto seguro: sem ela, o botão nem aparece.
  useEffect(() => {
    setAvailable(Boolean(navigator.clipboard));
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  if (!available) return null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copiado` : `Copiar ${label}`}
      className={cn(
        "relative z-10 inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-default px-2.5 py-1.5 text-xs font-medium transition-colors",
        copied
          ? "border-green-500/40 bg-green-500/10 text-green-400"
          : "bg-[#0D1117] text-gray-400 hover:border-green-500/40 hover:text-green-400"
      )}
    >
      <Icon className="size-3.5" aria-hidden />
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
}
