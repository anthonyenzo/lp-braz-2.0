"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export interface MarqueeHeroImage {
  src: string;
  alt: string;
}

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: ReactNode;
  description: string;
  ctaText: string;
  ctaHref: string;
  images: MarqueeHeroImage[];
}

const entrance = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedMarqueeHero({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  images,
}: AnimatedMarqueeHeroProps) {
  const reduceMotion = useReducedMotion();
  const repeatedImages = [...images, ...images];

  return (
    <section className="marquee-hero" id="inicio">
      <div className="marquee-hero-orb marquee-hero-orb-blue" aria-hidden="true" />
      <div className="marquee-hero-orb marquee-hero-orb-violet" aria-hidden="true" />

      <div className="marquee-hero-copy">
        <motion.span
          className="eyebrow"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={entrance}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {tagline}
        </motion.span>

        <motion.h1
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={entrance}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={entrance}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>

        <motion.div
          className="marquee-hero-actions"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={entrance}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-pills" aria-label="Destaques da oferta">
            <span>Full HD 1080p</span><span>Acesso vitalício</span><span>Sem mensalidade</span>
          </div>
          <motion.a
            className="primary-button marquee-hero-button"
            href={ctaHref}
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            {ctaText}
            <span className="button-arrow" aria-hidden="true" />
          </motion.a>
          <p className="secure-line"><i aria-hidden="true" /> Compra protegida e acesso imediato</p>
        </motion.div>
      </div>

      <motion.div
        className="marquee-stage"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Capas dos packs disponíveis na BrazHits"
      >
        <div className="marquee-edge marquee-edge-left" aria-hidden="true" />
        <div className="marquee-edge marquee-edge-right" aria-hidden="true" />
        <div className="marquee-track">
          {repeatedImages.map((image, index) => (
            <figure className="marquee-card" key={`${image.src}-${index}`} aria-hidden={index >= images.length}>
              <img
                src={image.src}
                alt={index < images.length ? image.alt : ""}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
