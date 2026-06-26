import { useEffect, useMemo, useState } from "react";
import siteData from "./assets/data.json";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "dribbble" | "behance";
};

export type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type HeroStat = {
  value: string;
  label: string;
};

export type SiteData = {
  navbar: {
    logo: string;
    links: NavItem[];
  };
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    socials: SocialLink[];
    actions: HeroAction[];
    stats: HeroStat[];
    image: {
      src: string;
      alt: string;
    };
  };
  servicesIntro: {
    title: string;
    description: string;
  };
};

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const data = useMemo(() => siteData as SiteData, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-zinc-950 transition-colors duration-300 dark:bg-[#111111] dark:text-white">
      <div className="min-h-screen w-full overflow-hidden">
        <Navbar
          data={data.navbar}
          theme={theme}
          onThemeToggle={() =>
            setTheme((currentTheme) =>
              currentTheme === "dark" ? "light" : "dark",
            )
          }
        />
        <Hero data={data.hero} theme={theme} />
        <section
          id="services"
          className="mx-auto max-w-3xl px-6 pb-12 pt-8 text-center sm:pt-14 lg:pb-16"
        >
          <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
            {data.servicesIntro.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-500">
            {data.servicesIntro.description}
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
