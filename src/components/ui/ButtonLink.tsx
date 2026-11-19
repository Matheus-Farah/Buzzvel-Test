import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "md" | "lg";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border-primary bg-primary text-white hover:bg-primary/90",
  secondary: "border-line bg-white text-ink hover:border-ink/30",
  accent: "border-yellow bg-yellow text-ink hover:bg-yellow/85",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg border text-sm/6 font-bold transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}
