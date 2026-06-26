import { Moon, Sun } from "lucide-react";
import type { NavItem } from "../App";

type NavbarProps = {
  data: {
    logo: string;
    links: NavItem[];
  };
  theme: "light" | "dark";
  onThemeToggle: () => void;
};

export const Navbar = ({ data, theme, onThemeToggle }: NavbarProps) => {
  const isDark = theme === "dark";

  return (
    <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-10 lg:px-12">
      <a
        href="#home"
        className="text-lg font-extrabold uppercase tracking-normal text-accent"
      >
        {data.logo}
      </a>

      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex items-center gap-10 text-sm">
          {data.links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors duration-200 ${
                  index === 0
                    ? "text-accent"
                    : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        onClick={onThemeToggle}
        className="inline-flex h-9 w-[74px] items-center rounded-full border border-zinc-300 bg-white p-1 transition-colors duration-300 dark:border-zinc-700 dark:bg-zinc-900"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <span
          className={`grid h-7 w-7 place-items-center rounded-full bg-accent text-white shadow-sm transition-transform duration-300 ${
            isDark ? "translate-x-9" : "translate-x-0"
          }`}
        >
          {isDark ? <Moon size={15} /> : <Sun size={15} />}
        </span>
      </button>
    </header>
  );
};
