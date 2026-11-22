import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuoteIcon } from "@/components/ui/icons";
import { stats, testimonial } from "@/data/testimonial";

export function Testimonial() {
  const { quote, author } = testimonial;

  return (
    <section aria-label="What learners say" className="bg-white py-15 lg:py-25">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <figure className="max-w-150">
          <QuoteIcon className="text-primary" />

          <blockquote className="font-heading lg:text-[ 30px]/11 mt-4 text-2xl/9 font-semibold tracking-[-0.6px] lg:tracking-[-0.75px]">
            <p>{quote}</p>
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={author.avatar}
              alt=""
              width={48}
              height={48}
              className="bg-primary-light size-12 rounded-full object-cover"
            />

            <div>
              <p className="text-base/7 font-bold">{author.name}</p>
              <p className="text-muted text-sm/6">{author.role}</p>
            </div>
          </figcaption>
        </figure>

        <dl className="border-line flex flex-col gap-5 border-t pt-10 lg:w-100 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-subtle mt-1 text-sm/6">{stat.label}</dt>

              <dd className="font-heading text-primary text-5xl/14 font-extrabold tracking-[-1.2px] lg:text-[64px]/[70px] lg:tracking-[-1.6px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
