import { CategoryCard } from "@/components/ui/CategoryCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <section id="courses" aria-labelledby="categories-title" className="bg-white py-15 lg:py-25">
      <Container>
        <SectionHeading
          eyebrow="Find your next skill"
          title="Learn something worth knowing."
          titleId="categories-title"
          description="Short, practical courses designed around skills you can put to work immediately."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.title}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
