"use client";

import { useState, type FormEvent } from "react";
import { FormField } from "@/components/ui/FormField";
import { validateContact, type ContactErrors, type ContactValues } from "@/lib/validate-contact";

type FormStatus = "idle" | "submitting" | "success";

const fieldStyles =
  "bg-cream border-line placeholder:text-subtle focus:border-primary aria-[invalid=true]:border-danger w-full rounded-lg border px-4 py-3 text-sm/6 transition-colors";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function clearError(field: keyof ContactValues) {
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const values: ContactValues = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const firstInvalidField = Object.keys(nextErrors)[0];

    if (firstInvalidField) {
      setStatus("idle");
      const element = form.elements.namedItem(firstInvalidField);

      if (element instanceof HTMLElement) element.focus();
      return;
    }

    setStatus("submitting");

    // Mock request: there is no backend, so we simulate the network delay.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    form.reset();
    setStatus("success");
  }

  const isSubmitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
      <FormField id="contact-name" label="Full name" error={errors.name}>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          onChange={() => clearError("name")}
          className={fieldStyles}
        />
      </FormField>

      <FormField id="contact-email" label="Email" error={errors.email}>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="youremail@example.com"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          onChange={() => clearError("email")}
          className={fieldStyles}
        />
      </FormField>

      <FormField id="contact-message" label="Your question" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell us how we can help..."
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          onChange={() => clearError("message")}
          className={`${fieldStyles} h-30 resize-y`}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary hover:bg-primary/90 w-full rounded-lg px-5 py-3 text-sm/6 font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="bg-primary-light text-ink rounded-lg px-4 py-3 text-sm/6">
            Thanks! Your message was sent. We&apos;ll get back to you within 24 hours.
          </p>
        )}
      </div>
    </form>
  );
}
