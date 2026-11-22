import type { NavLink } from "@/data/navigation";

export type FooterGroup = {
  title: string;
  links: NavLink[];
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers", href: "#" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];
