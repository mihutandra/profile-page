import { motion } from "framer-motion";
import {
  Clapperboard,
  Megaphone,
  Palette,
  Scissors,
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";
import MagicBento from "../../@/components/MagicBento";
import type { Service, ServicesIntro } from "../App";

type ServicesProps = {
  intro: ServicesIntro;
  services: Service[];
};

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  video: Video,
  scissors: Scissors,
  sparkles: Sparkles,
  palette: Palette,
  megaphone: Megaphone,
  clapperboard: Clapperboard,
};

const getMotionValue = (name: string, fallback: number) => {
  if (typeof window === "undefined") return fallback;

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return Number.parseFloat(value) || fallback;
};

export const Services = ({ intro, services }: ServicesProps) => {
  const bentoItems = services.map((service) => {
    const Icon = serviceIcons[service.icon];

    return {
      color: "var(--site-services-card-bg)",
      title: service.title,
      description: service.description,
      label: service.label,
      icon: <Icon aria-hidden="true" className="magic-bento-card__icon" />,
    };
  });

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-7xl px-6 pb-16 pt-8 sm:px-10 sm:pt-14 lg:px-16 lg:pb-24 xl:px-20"
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
        <h2 className="text-2xl font-bold text-(--site-page-text)">
          {intro.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-(--site-page-muted)">
          {intro.description}
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
        <MagicBento
          items={bentoItems}
          textAutoHide={false}
          glowColor="var(--site-bento-glow-rgb)"
          spotlightRadius={380}
          particleCount={12}
          enableStars
          enableSpotlight
          enableBorderGlow
          clickEffect
          enableMagnetism
        />
      </motion.div>
    </section>
  );
};
