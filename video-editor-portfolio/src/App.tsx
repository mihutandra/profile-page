import { useEffect, useMemo, useState } from "react";
import siteData from "./assets/data.json";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

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

export type ServicesIntro = {
  title: string;
  description: string;
};

export type Service = {
  label: string;
  title: string;
  description: string;
  icon:
    | "video"
    | "scissors"
    | "sparkles"
    | "palette"
    | "megaphone"
    | "clapperboard";
};

export type SiteData = {
  navbar: {
    logoLight: string;
    logoDark: string;
    logoAlt: string;
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
  servicesIntro: ServicesIntro;
  services: Service[];
};

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const data = useMemo(() => siteData as SiteData, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <main className="min-h-screen bg-[var(--site-page-bg)] text-[var(--site-page-text)] transition-colors duration-[var(--motion-medium)]">
      <div className="min-h-screen w-full overflow-hidden">
        <Navbar
          data={data.navbar}
          theme={theme}
          onThemeToggle={() => {
            setTheme((currentTheme) => {
              const nextTheme = currentTheme === "dark" ? "light" : "dark";
              document.documentElement.classList.toggle(
                "dark",
                nextTheme === "dark",
              );
              return nextTheme;
            });
          }}
        />
        <Hero data={data.hero} theme={theme} />
        <Services intro={data.servicesIntro} services={data.services} />
      </div>
    </main>
  );
}

export default App;
