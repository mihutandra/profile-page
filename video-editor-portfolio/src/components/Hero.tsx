import { motion } from "framer-motion";
import Balatro from "./Balatro";
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
};

const socialLabels: Record<SocialLink["icon"], string> = {
  instagram: "◎",
  linkedin: "in",
  dribbble: "◌",
  behance: "Be",
};

export const Hero = ({ data }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative isolate grid w-full items-center gap-12 overflow-hidden px-6 pb-12 pt-10 sm:px-10 md:grid-cols-[0.92fr_1.08fr] lg:min-h-[620px] lg:px-16 lg:pb-16 lg:pt-8 xl:px-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-35 dark:opacity-55">
        <Balatro
          color1="#00101a"
          color2="#0d86d6"
          color3="#021f33"
          contrast={3.6}
          lighting={0.35}
          spinSpeed={4.5}
          spinAmount={0.22}
          pixelFilter={745}
          isRotate
          mouseInteraction={false}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#f7f4ef]/75 dark:bg-[#111111]/60" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <p className="text-base font-semibold leading-7 text-zinc-500 dark:text-zinc-500">
          {data.eyebrow}
          <br />
          <span className="text-zinc-600 dark:text-zinc-400">{data.name}</span>
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
                className="grid h-7 w-7 place-items-center rounded-full border border-zinc-300 bg-zinc-100 text-zinc-500 transition-colors duration-200 hover:border-accent hover:text-accent dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
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
                  ? "rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
                  : "rounded-md border border-zinc-400 px-8 py-3 text-sm font-semibold text-zinc-600 transition-colors duration-200 hover:border-accent hover:text-accent dark:border-zinc-600 dark:text-zinc-300"
              }
            >
              {action.label}
            </a>
          ))}
        </div>

        <div className="mt-12 inline-grid grid-cols-3 rounded-md bg-white shadow-sm ring-1 ring-zinc-200 dark:bg-[#191919] dark:ring-zinc-800">
          {data.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-5 sm:px-6 ${
                index > 0 ? "border-l border-zinc-300 dark:border-zinc-700" : ""
              }`}
            >
              <p className="text-lg font-extrabold text-accent">
                {stat.value}
              </p>
              <p className="mt-1 whitespace-nowrap text-xs font-semibold text-zinc-600 dark:text-zinc-300 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto flex aspect-square w-full max-w-[470px] items-end justify-center"
      >
        <div className="absolute bottom-3 left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-full bg-zinc-200 dark:bg-[#202020]" />
        <img
          src={data.image.src}
          alt={data.image.alt}
          className="relative z-10 max-h-[440px] w-[82%] object-contain grayscale"
        />
      </motion.div>
    </section>
  );
};
