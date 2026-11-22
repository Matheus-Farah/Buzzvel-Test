export function CtaDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/*Visible on every screen size */}
      <div className="border-orange absolute top-2 -left-10 size-27 rounded-full border-2 lg:left-5" />
      <div className="bg-orange absolute -top-6 -right-10 size-20 -rotate-12 rounded-lg lg:-top-2 lg:right-3 lg:size-29" />

      {/*Desktop only */}
      <div className="hidden lg:block">
        <div className="border-orange absolute top-11 left-80 size-14 -rotate-12 rounded-lg border" />
        <div className="bg-orange absolute top-52 left-34 size-10 rounded-full" />
        <div className="bg-orange absolute top-90 left-14 size-30 rounded-full" />
        <div className="bg-orange absolute top-59 -left-3 size-14 -rotate-12 rounded-lg" />
        <div className="bg-orange absolute top-10 left-[68%] size-8 rounded-full border-2" />
      </div>
    </div>
  );
}
