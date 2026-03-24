"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const slides = [
  {
    image: "/images/img-03.jpeg",
    tag: "Electrical Engineering",
    title: "Powering Zambia's",
    accent: "Future",
    subtitle:
      "Expert electrical construction, supply, and commissioning services across the Copperbelt and beyond.",
  },
  {
    image: "/images/img-01.jpeg",
    tag: "Renewable Energy",
    title: "Clean Energy",
    accent: "Solutions",
    subtitle:
      "Design, installation, and maintenance of solar PV systems — hybrid, grid-tied, and off-grid.",
  },
  {
    image: "/images/img-16.jpeg",
    tag: "Industry Partners",
    title: "Trusted by Industry",
    accent: "Leaders",
    subtitle:
      "Delivering excellence for ZESCO, Konkola Copper Mines, Zambezi Portland Cement, and more.",
  },
  {
    image: "/images/img-17.jpeg",
    tag: "Expert Team",
    title: "Skilled Engineers,",
    accent: "Quality Results",
    subtitle:
      "Our experienced team delivers precision testing, commissioning, and maintenance across all voltage levels.",
  },
  {
    image: "/images/img-22.jpeg",
    tag: "Infrastructure Development",
    title: "Building Power",
    accent: "Networks",
    subtitle:
      "Distribution line construction and electrical infrastructure development across Zambia's growing regions.",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title + " " + slide.accent}
            fill
            className="object-cover"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-navy/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block font-oswald text-xs uppercase tracking-[0.2em] text-red bg-white/10 px-3 py-1 mb-4">
                {slide.tag}
              </span>
              <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
                {slide.title}{" "}
                <span className="text-red">{slide.accent}</span>
              </h1>
              <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl font-source">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="font-oswald uppercase text-sm tracking-wider bg-red text-white px-7 py-3 rounded-sm hover:bg-red/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/services"
                  className="font-oswald uppercase text-sm tracking-wider border border-white/40 text-white px-7 py-3 rounded-sm hover:bg-white/10 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Dots & counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-red" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <span className="text-white/60 text-xs font-oswald ml-2">
          {current + 1}/{slides.length}
        </span>
      </div>
    </section>
  );
}
