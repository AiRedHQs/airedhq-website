"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Send } from "lucide-react";
import type * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { budgetRanges, inquiryTypes, projectTypes } from "@/data/contact";
import { contactFormSchema, type ContactFormValues } from "@/src/lib/forms";
import { cn } from "@/src/lib/utils";

const inputClass =
  "min-h-11 w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors duration-premium placeholder:text-muted-foreground focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "Project inquiry",
      projectType: "Not sure yet",
      budget: "Exploring scope",
      message: "",
    },
  });

  const onSubmit = async () => {
    toast.success("Inquiry prepared", {
      description: "Thanks. AiRedHQ can connect this form to a backend next.",
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5"
      aria-label="Contact AiRedHQ"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            id="name"
            {...register("name")}
            className={inputClass}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            id="email"
            {...register("email")}
            className={inputClass}
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            id="company"
            {...register("company")}
            className={inputClass}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            {...register("phone")}
            className={inputClass}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </Field>
        <Field label="Inquiry Type" error={errors.inquiryType?.message}>
          <select
            id="inquiry-type"
            {...register("inquiryType")}
            className={inputClass}
            aria-invalid={Boolean(errors.inquiryType)}
            aria-describedby={errors.inquiryType ? "inquiry-type-error" : undefined}
          >
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Project Type" error={errors.projectType?.message}>
          <select
            id="project-type"
            {...register("projectType")}
            className={inputClass}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget" error={errors.budget?.message}>
          <select
            id="budget"
            {...register("budget")}
            className={inputClass}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          id="message"
          {...register("message")}
          className={cn(inputClass, "min-h-32 resize-y")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          Submit Inquiry
          <Send aria-hidden="true" />
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#contact">
            Book Discovery Call
            <CalendarDays aria-hidden="true" />
          </a>
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  const errorId = `${id}-error`;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="[&_input]:w-full [&_select]:w-full [&_textarea]:w-full">
        {children}
      </div>
      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
