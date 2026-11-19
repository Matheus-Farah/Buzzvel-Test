import type { Category } from "@/data/categories";
import { ArrowRightIcon } from "@/components/ui/icons";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <a
      href={category.href}
      className="group border-line hover:border-primary flex h-full flex-col justify-between gap-6 rounded-2xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgb(23_27_44/0.88)] lg:min-h-65"
    >
      <div>
        <span
          aria-hidden="true"
          className="bg-primary-light text-primary inline-block rounded-md px-2 py-1 text-xs font-semibold tracking-[0.12em]"
        >
          {category.number}
        </span>

        <h3 className="font-heading ,t-6 text-xl/8 font-bold">{category.title}</h3>

        <p className="text-subtle mt-3 text-sm/6">{category.description}</p>
      </div>

      <span className="flex items-center gap-2 text-sm/6 font-bold">
        Explore
        <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
