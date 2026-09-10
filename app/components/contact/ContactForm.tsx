"use client";

import { useState } from "react";
import { ArrowRight, Check, CircleAlert, Loader2 } from "lucide-react";
import { contact } from "@/lib/data/contact-info";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClassName =
  "w-full rounded-lg border border-default bg-[#0D1117] px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-gray-600 focus:border-green-500/60 focus:ring-2 focus:ring-green-500/25 disabled:opacity-60";

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline justify-between gap-3 text-sm font-medium text-gray-300"
      >
        {label}
        {hint && <span className="text-xs font-normal text-gray-500">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Guardado antes do await: currentTarget é anulado depois do despacho.
    const form = event.currentTarget;
    event.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        setStatus("sent");
        return;
      }

      const data = await response.json().catch(() => null);
      const messages: string | undefined = data?.errors
        ?.map((item: { message: string }) => item.message)
        .join(" ");

      setError(messages || "Não foi possível enviar a mensagem agora.");
      setStatus("error");
    } catch {
      setError(
        "Falha de conexão. Tente de novo ou use o e-mail direto aqui ao lado."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section
        aria-labelledby="formulario"
        className="flex flex-col items-start rounded-2xl border border-green-500/30 bg-green-500/[0.05] p-6 sm:p-8"
      >
        <span
          aria-hidden
          className="flex size-11 items-center justify-center rounded-xl bg-green-500/15"
        >
          <Check className="size-6 text-green-400" />
        </span>
        <h2 id="formulario" className="mt-4 text-xl font-semibold text-white">
          Mensagem enviada
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-300">
          Obrigado pelo contato — respondo assim que possível, no e-mail que
          você informou.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg border border-default bg-[#161B22] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-green-500/50 hover:text-green-400"
        >
          Enviar outra mensagem
        </button>
      </section>
    );
  }

  const sending = status === "sending";

  return (
    <section
      aria-labelledby="formulario"
      className="rounded-2xl border border-default bg-[#161B22] p-6 sm:p-8"
    >
      <h2 id="formulario" className="text-xl font-semibold text-white">
        Envie uma mensagem
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">
        Conte rapidamente sobre a vaga ou o projeto. Respondo no e-mail que
        você deixar aqui.
      </p>

      {/*
        `action` e `method` ficam no elemento: sem JavaScript o navegador envia
        do jeito tradicional para o Formspree, em vez de o formulário morrer.
      */}
      <form
        action={contact.formEndpoint}
        method="POST"
        onSubmit={handleSubmit}
        className="mt-6 space-y-5"
      >
        <Field id="name" label="Nome">
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            disabled={sending}
            placeholder="Como devo te chamar"
            className={fieldClassName}
          />
        </Field>

        <Field id="email" label="E-mail">
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={120}
            autoComplete="email"
            disabled={sending}
            placeholder="voce@empresa.com"
            className={fieldClassName}
          />
        </Field>

        <Field id="message" label="Mensagem" hint="até 1500 caracteres">
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            maxLength={1500}
            disabled={sending}
            placeholder="Sobre o que você quer falar?"
            className={cn(fieldClassName, "resize-y")}
          />
        </Field>

        <input
          type="hidden"
          name="_subject"
          value="Novo contato pelo site dutradev"
        />

        {/* Isca de spam: campo fora da tela que só um robô preencheria. */}
        <div
          aria-hidden
          className="absolute left-[-9999px] size-px overflow-hidden"
        >
          <label htmlFor="_gotcha">Deixe este campo em branco</label>
          <input
            type="text"
            id="_gotcha"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div aria-live="polite">
          {status === "error" && error && (
            <p className="flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{error}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={sending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-[#010409] transition-colors hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensagem
              <ArrowRight className="size-4" aria-hidden />
            </>
          )}
        </button>
      </form>
    </section>
  );
}
