type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-140 ${className}`}>
      <p className="text-primary text-xs font-semibold tracking-[0.12em] uppercase">{eyebrow}</p>

      <h2
        id={titleId}
        className="font-heading mt-4 text-[32px]/9 font-extrabold tracking-[-0.8px] lg:text-5xl/14 lg:tracking-[-1.2px]"
      >
        {title}
      </h2>

      {description && <p className="text-muted mt-4 text-base/6.5 lg:text-lg/7">{description}</p>}
    </div>
  );
}
