export type FeaturedCourse = {
  title: string;
  description: string;
  href: string;
  instructor: {
    name: string;
    role: string;
  };
  details: string[];
  image: {
    src: string;
    alt: string;
  };
};

export const featuredCourse: FeaturedCourse = {
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  href: "#featured-course",
  instructor: {
    name: "Maya Chen",
    role: "Senior Product Designer",
  },
  details: ["8 lessons", "2h 40min", "Intermediate"],
  image: {
    src: "/images/featured-course.jpg",
    alt: "Student sketching product interfaces with color swatches and paper prototypes",
  },
};
