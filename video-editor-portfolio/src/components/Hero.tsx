import { motion } from "framer-motion";
import Balatro from "../../@/components/Balatro";
import type { HeroAction, HeroStat, SocialLink } from "../App";

type HeroProps = {
  data: {
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
  theme: "light" | "dark";
};

const socialLabels: Record<SocialLink["icon"], string> = {
  instagram: "◎",
  linkedin: "in",
  dribbble: "◌",
  behance: "Be",
};

const getMotionValue = (name: string, fallback: number) => {
  if (typeof window === "undefined") return fallback;

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return Number.parseFloat(value) || fallback;
};

export const Hero = ({ data, theme }: HeroProps) => {

  return (
    <section
      id="home"
      className="relative isolate grid w-full items-center gap-12 overflow-hidden px-6 pb-12 pt-10 sm:px-10 md:grid-cols-[0.92fr_1.08fr] lg:min-h-[620px] lg:px-16 lg:pb-16 lg:pt-8 xl:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[var(--site-hero-canvas-opacity)]">
        <Balatro
          key={theme}
          color1="var(--site-hero-canvas-primary)"
          color2="var(--site-hero-canvas-accent)"
          color3="var(--site-hero-canvas-depth)"
          contrast={3.6}
          lighting={0.35}
          spinSpeed={4.5}
          spinAmount={0.22}
          pixelFilter={745}
          isRotate
          mouseInteraction={false}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--site-hero-overlay)]" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: getMotionValue("--motion-hero-copy-duration", 0.5),
        }}
        className="relative z-10"
      >
        <p className="text-base font-semibold leading-7 text-[var(--site-page-muted)]">
          {data.eyebrow}
          <br />
          <span className="text-[var(--site-page-subtle)]">{data.name}</span>
        </p>

        <h1 className="mt-5 text-5xl font-extrabold leading-none tracking-normal text-accent sm:text-6xl lg:text-7xl">
          {data.title}
        </h1>

        <div className="mt-6 flex items-center gap-3">
          {data.socials.map((social) => {
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-7 w-7 place-items-center rounded-full border border-[var(--site-border)] bg-[var(--site-control-muted-bg)] text-[var(--site-page-muted)] transition-colors duration-[var(--motion-fast)] hover:border-accent hover:text-accent"
              >
                <span className="text-xs font-bold leading-none">
                  {socialLabels[social.icon]}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {data.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={
                action.variant === "primary"
                  ? "rounded-md bg-accent px-8 py-3 text-sm font-semibold text-[var(--site-page-inverse)] transition-colors duration-[var(--motion-fast)] hover:bg-accent-hover"
                  : "rounded-md border border-[var(--site-border)] px-8 py-3 text-sm font-semibold text-[var(--site-page-subtle)] transition-colors duration-[var(--motion-fast)] hover:border-accent hover:text-accent"
              }
            >
              {action.label}
            </a>
          ))}
        </div>

        <div className="mt-12 inline-grid grid-cols-3 rounded-md bg-[var(--site-stats-bg)] shadow-sm ring-1 ring-[var(--site-stats-ring)]">
          {data.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-5 sm:px-6 ${
                index > 0 ? "border-l border-[var(--site-stats-border)]" : ""
              }`}
            >
              <p className="text-lg font-extrabold text-accent">{stat.value}</p>
              <p className="mt-1 whitespace-nowrap text-xs font-semibold text-[var(--site-page-subtle)] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: getMotionValue("--motion-hero-media-duration", 0.6),
          delay: getMotionValue("--motion-hero-media-delay", 0.1),
        }}
        className="relative mx-auto flex aspect-square w-full max-w-[470px] items-end justify-center"
      >
        <div className="absolute bottom-3 left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-full bg-[var(--site-hero-portrait-bg)]" />
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="relative z-10 max-h-[440px] w-[82%] object-contain grayscale"
        />
      </motion.div>
    </section>
  );
};
