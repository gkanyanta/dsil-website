"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import HeroBanner from "@/components/HeroBanner";

const images = [
  { src: "/images/img-01.jpeg", alt: "Engineer at solar PV panel installation", category: "Solar PV" },
  { src: "/images/img-02.jpeg", alt: "Solar panel array rear view with wiring", category: "Solar PV" },
  { src: "/images/img-03.jpeg", alt: "Electrical substation infrastructure", category: "Electrical" },
  { src: "/images/img-04.jpeg", alt: "400V switchgear and distribution panels", category: "Electrical" },
  { src: "/images/img-05.jpeg", alt: "Substation with transformer and steel structures", category: "Electrical" },
  { src: "/images/img-06.jpeg", alt: "High voltage pole-mounted equipment", category: "Electrical" },
  { src: "/images/img-07.jpeg", alt: "Solar inverter and lithium battery storage system", category: "Solar PV" },
  { src: "/images/img-08.jpeg", alt: "Distribution line pole construction", category: "Electrical" },
  { src: "/images/img-09.jpeg", alt: "Photovoltaic power distribution room installation", category: "Solar PV" },
  { src: "/images/img-10.jpeg", alt: "Deye solar inverter unit", category: "Solar PV" },
  { src: "/images/img-11.jpeg", alt: "PV power distribution room exterior", category: "Solar PV" },
  { src: "/images/img-12.jpeg", alt: "Battery storage rack system", category: "Equipment" },
  { src: "/images/img-13.jpeg", alt: "Engineers installing solar inverter and battery system", category: "Solar PV" },
  { src: "/images/img-14.jpeg", alt: "Lineman working on distribution line construction", category: "Electrical" },
  { src: "/images/img-15.jpeg", alt: "DSIL team at mine site", category: "Team" },
  { src: "/images/img-16.jpeg", alt: "Solar inverter and battery bank installation", category: "Solar PV" },
  { src: "/images/img-17.jpeg", alt: "Engineers testing switchgear with instruments", category: "Electrical" },
  { src: "/images/img-18.jpeg", alt: "Construction crew in safety gear", category: "Team" },
  { src: "/images/img-19.jpeg", alt: "Engineer working on MV switchgear panel", category: "Electrical" },
  { src: "/images/img-20.jpeg", alt: "Site safety briefing with crew and truck", category: "Team" },
  { src: "/images/img-21.jpeg", alt: "Construction team lineup at job site", category: "Team" },
  { src: "/images/img-22.jpeg", alt: "Crew erecting power line pole in bush", category: "Electrical" },
  { src: "/images/img-23.jpeg", alt: "Worker surveying pole installation site", category: "Electrical" },
  { src: "/images/img-24.jpeg", alt: "Pole transport truck at logistics yard", category: "Logistics" },
  { src: "/images/img-25.jpeg", alt: "Distribution line pole erection crew", category: "Electrical" },
  { src: "/images/img-26.jpeg", alt: "Lovato power factor controller unit", category: "Equipment" },
  { src: "/images/img-27.jpeg", alt: "Transport truck for construction materials", category: "Logistics" },
  { src: "/images/img-28.jpeg", alt: "Engineer working on switchgear commissioning", category: "Electrical" },
  { src: "/images/img-29.jpeg", alt: "DSIL lineman working at height on distribution line", category: "Electrical" },
  { src: "/images/img-30.jpeg", alt: "APFC panel and capacitor bank installation", category: "Equipment" },
  { src: "/images/img-31.jpeg", alt: "11kV VCB HT panel with metering", category: "Equipment" },
  { src: "/images/img-32.jpeg", alt: "Engineer inspecting ABB switchgear panel", category: "Equipment" },
];

const categories = ["All", "Electrical", "Solar PV", "Equipment", "Team", "Logistics"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  function openLightbox(index: number) {
    setLightbox(index);
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function nextImage() {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  }

  function prevImage() {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  }

  return (
    <>
      <HeroBanner
        title="Gallery"
        subtitle="A visual showcase of our projects and team in action"
      />

      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setLightbox(null); }}
                className={`font-oswald text-sm uppercase tracking-wider px-5 py-2 rounded-sm transition-colors ${
                  filter === cat
                    ? "bg-red text-white"
                    : "bg-white text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square cursor-pointer overflow-hidden group"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-end">
                    <div className="p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-oswald uppercase tracking-wider bg-red/90 text-white px-2 py-1">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-50"
              aria-label="Close lightbox"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-sm z-50"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-sm z-50"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            <div
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-oswald">
              {filtered[lightbox].alt} &mdash; {lightbox + 1}/{filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
