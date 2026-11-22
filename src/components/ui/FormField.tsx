import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

export function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm/6 font-bold">
        {label}
      </label>

      {children}

      {error && (
        <p id={`${id}-error`} className="text-danger text-sm/6">
          {error}
        </p>
      )}
    </div>
  );
}
