import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm/6 font-bold transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
}
