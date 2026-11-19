import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCourse } from "@/data/featured-course";

export function FeaturedCourse() {
  const { title, description, href, instructor, details, image } = featuredCourse;

  return (
    <section
      id="featured-course"
      aria-labelledby="featured-course-title"
      className="bg-primary lg:py25 py-15 text-white [&_*:focus-visible]:outline-white"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-11">
        <div className="relative">
          <div className="border-line/30 relative aspect-538/408 overflow-hidden rounded-2xl border">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 538px, 100vw"
              className="object-cover"
            />
          </div>

          <p className="bg-yellow text-ink absolute -top-3 -left-3 rounded-md px-3 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase">
            Featured Course
          </p>
        </div>

        <div>
          <SectionHeading
            eyebrow="Most popular this month"
            title={title}
            titleId="featured-course-title"
            tone="inverse"
          />

          <p className="mt-5 text-base/7">{description}</p>

          <p className="mt-6 text-base/7">
            with {instructor.name} . {instructor.role}
          </p>

          <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-3">
            {details.map((detail) => (
              <li key={detail} className="border-line bprder rounded-lg px-3.5 py-1.5 text-sm/6">
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={href} variant="accent" size="lg">
              View course
            </ButtonLink>

            <a
              href="#courses"
              className="text-soft-white inline-flex items-center gap-2 px-4 py-3.5 text-sm/6 font-bold transition-colors hover:text-white"
            >
              Browse all courses
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
