import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-90.5 shrink-0 lg:mx-0 lg:max-w-125">
      {/* Decorative shapes */}
      <div
        aria-hidden="true"
        className="bg-orange absolute top-6 -right-3 bottom-6 w-16 rounded-2xl lg:-right-10 lg:w-22"
      />

      <div
        aria-hidden="true"
        className="bg-primary-light absolute bottom-6 -left-3 size-20 rounded-full lg:-left-11 lg:size-26.5"
      />

      <div className="bg-primary-light relative aspect-346/380 overflow-hidden rounded-2xl lg:aspect-500/520 lg:rounded-3xl">
        <Image
          src="/images/hero.jpg"
          alt="Woman smiling while learning on her laptop"
          fill
          sizes="(min-width: 1024px) 500px, 362px"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </div>

      <div className="absolute top-4 -left-2 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_4px_24px_rgb(0_0_0/0.1)] lg:-left-5.5">
        <span className="bg-primary-light text-primary rounded-lg px-1 py-1 text-sm/6 font-bold">
          120+
        </span>
        <span className="text-sm/6">expert-led courses</span>
      </div>

      <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-[0_4px_24px_rgb(0_0_0/0.1)] lg:-right-14 lg:bottom-9">
        <div className="text-yellow flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} />
          ))}
        </div>

        <span className="text-sm/6">
          <span className="sr-only">Rated </span>4.9 avg rating
        </span>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 1l1.76 3.6 3.94.57-2.85 2.78.67 3.93L7 10.03l-3.52 1.85.67-3.93L1.3 5.17l3.94-.57L7 1z" />
    </svg>
  );
}
