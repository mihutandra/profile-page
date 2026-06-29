import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { CSSProperties } from "react";
import type { AboutData, AboutSkill } from "../App";

type AboutProps = {
  data: AboutData;
};

const getMotionValue = (name: string, fallback: number) => {
  if (typeof window === "undefined") return fallback;

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return Number.parseFloat(value) || fallback;
};

const SkillBadge = ({ skill }: { skill: AboutSkill }) => {
  const progress = Math.max(0, Math.min(skill.level, 100));
  const progressStyle = {
    "--skill-progress": `${progress * 3.6}deg`,
  } as CSSProperties;

  return (
    <div className="about-skill" style={progressStyle}>
      <div className="about-skill__ring">
        <span className="about-skill__abbr">{skill.shortLabel}</span>
      </div>
      <span className="about-skill__level">{progress}%</span>
      <span className="about-skill__name">{skill.name}</span>
    </div>
  );
};

export const About = ({ data }: AboutProps) => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 sm:px-10 lg:px-16 lg:pb-28 lg:pt-16 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: getMotionValue("--motion-section-duration", 1),
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--site-page-text)]">
          {data.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-[var(--site-page-muted)]">
          {data.subtitle}
        </p>
      </motion.div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: getMotionValue("--motion-hero-media-duration", 0.6),
            delay: getMotionValue("--motion-hero-media-delay", 0.1),
          }}
          className="relative mx-auto flex aspect-square w-full max-w-[470px] items-end justify-center"
        >
          <div className="absolute bottom-3 left-1/2 h-[78%] w-[78%] -translate-x-1/2 rounded-[240px] bg-[var(--site-hero-portrait-bg)]" />
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="relative z-10 mb-4 max-h-[435px] w-[82%] rounded-[244px] object-contain grayscale mix-blend-luminosity"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: getMotionValue("--motion-section-duration", 0.45),
            delay: getMotionValue("--motion-section-delay", 0.08),
          }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <p className="text-sm leading-8 text-[var(--site-page-subtle)] sm:text-base">
            {data.description}
          </p>

          <a
            href={data.cvHref}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-semibold text-[var(--site-page-inverse)] transition-colors duration-[var(--motion-fast)] hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            {data.cvLabel}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: getMotionValue("--motion-section-duration", 0.45),
          delay: getMotionValue("--motion-section-delay", 0.08),
        }}
        className="mt-14 sm:mt-16"
      >
        <ul className="about-skills" aria-label="Creative tool proficiency">
          {data.skills.map((skill) => (
            <motion.li
              key={skill.name}
              className="about-skills__item"
              whileHover={{ y: -14 }}
              whileFocus={{ y: -14 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              tabIndex={0}
            >
              <SkillBadge skill={skill} />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
