import { motion } from "framer-motion";
import ChromaGrid from "../../@/components/ChromaGrid";
import type { PortfolioProject, SectionIntro } from "../App";

type PortfolioProps = {
  intro: SectionIntro;
  projects: PortfolioProject[];
};

const getMotionValue = (name: string, fallback: number) => {
  if (typeof window === "undefined") return fallback;

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return Number.parseFloat(value) || fallback;
};

export const Portfolio = ({ intro, projects }: PortfolioProps) => {
  const items = projects.map((project) => ({
    image: project.cover,
    title: project.title,
    url: project.href,
    borderColor: project.borderColor,
    gradient: project.gradient,
  }));

  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="mx-auto w-full max-w-7xl px-6 pb-20 pt-4 sm:px-10 lg:px-16 lg:pb-28 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: getMotionValue("--motion-section-duration", 0.45),
        }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-2xl font-bold text-[var(--site-page-text)]">
          {intro.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-[var(--site-page-muted)]">
          {intro.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: getMotionValue("--motion-section-duration", 0.45),
          delay: getMotionValue("--motion-section-delay", 0.08),
        }}
        className="mt-12"
      >
        <ChromaGrid
          items={items}
          columns={3}
          rows={2}
          radius={360}
          className="portfolio-grid"
        />
      </motion.div>
    </section>
  );
};
