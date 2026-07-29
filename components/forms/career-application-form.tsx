"use client";

import { useRef, useState } from "react";
import { FileText, Send, Upload } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const positions = [
  "Product Design",
  "Frontend Engineering",
  "Backend Engineering",
  "Mobile Engineering",
  "Applied AI",
  "Product Operations",
  "Open application",
] as const;

const fieldClass =
  "min-h-12 w-full border border-black/15 bg-white/72 px-3 py-2 text-sm text-[#090b0e] outline-none transition focus-visible:border-[#2388ff]/60 focus-visible:ring-2 focus-visible:ring-[#2388ff]/25";

export function CareerApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitApplication(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Application could not be submitted.");
      }

      toast.success("Application received", {
        description: "Your details and resume have been saved securely.",
      });
      formRef.current?.reset();
      setFileName("");
    } catch (error) {
      toast.error("Application not submitted", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={submitApplication} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="career-name">
          <input id="career-name" name="name" autoComplete="name" required minLength={2} className={fieldClass} />
        </Field>
        <Field label="Email" htmlFor="career-email">
          <input id="career-email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </Field>
      </div>
      <Field label="Position interested in" htmlFor="career-position">
        <select id="career-position" name="position" required defaultValue="" className={fieldClass}>
          <option value="" disabled>Select an area</option>
          {positions.map((position) => <option key={position}>{position}</option>)}
        </select>
      </Field>
      <Field label="What kind of work interests you?" htmlFor="career-message" optional>
        <textarea id="career-message" name="message" className={`${fieldClass} min-h-28 resize-y`} maxLength={2000} />
      </Field>
      <Field label="Resume" htmlFor="career-resume">
        <label
          htmlFor="career-resume"
          className="flex min-h-28 cursor-pointer items-center justify-between gap-5 border border-dashed border-black/20 bg-white/48 px-5 py-4 transition hover:border-[#2388ff]/55 hover:bg-white/70"
        >
          <span className="flex items-center gap-4">
            <span className="grid size-10 place-items-center bg-[#2388ff]/10 text-[#1677d2]">
              {fileName ? <FileText className="size-5" /> : <Upload className="size-5" />}
            </span>
            <span>
              <span className="block text-sm font-semibold text-[#090b0e]">
                {fileName || "Choose your resume"}
              </span>
              <span className="mt-1 block text-xs text-black/45">PDF, DOC or DOCX · 5 MB maximum</span>
            </span>
          </span>
          <span className="text-xs font-semibold text-[#1677d2]">Browse</span>
        </label>
        <input
          id="career-resume"
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
        />
      </Field>
      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 w-fit">
        {isSubmitting ? "Submitting..." : "Submit application"}
        <Send className="size-4" />
      </Button>
      <p className="max-w-2xl text-xs leading-5 text-black/45">
        Your information is used to review this application. Resume storage must be moved to
        approved durable infrastructure before production deployment.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional = false,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-[#090b0e]">
        {label} {optional ? <span className="font-normal text-black/40">(optional)</span> : null}
      </label>
      {children}
    </div>
  );
}
