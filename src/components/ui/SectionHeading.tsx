type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  description?: string;
  tone?: "default" | "inverse";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  tone = "default",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isInverse = tone === "inverse";

  return (
    <div className={`max-w-140 ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <p
        className={`text-xs font-semibold tracking-[0.12em] uppercase ${isInverse ? "text-white" : "text-primary"}`}
      >
        {eyebrow}
      </p>

      <h2
        id={titleId}
        className={`font-heading mt-4 text-[32px]/9 font-extrabold tracking-[-0.8px] lg:text-5xl/14 lg:tracking-[-1.2px] ${isInverse ? "text-white" : ""}`}
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-base/6.5 lg:text-lg/7 ${isInverse ? "text-white" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
