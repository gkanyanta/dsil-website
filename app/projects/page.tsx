"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "ZESCO Distribution Lines (33kV/11kV/0.4kV)",
    client: "ZESCO Limited",
    category: "Electrical",
    year: "Running Contract",
    description:
      "Ongoing construction and maintenance of distribution network lines at various voltage levels across the Copperbelt and Northern regions.",
  },
  {
    name: "18.9MW Solar PV Consultancy",
    client: "Zambezi Portland Cement",
    category: "Consultancy",
    year: "Jan 2026",
    description:
      "Technical consultancy for a large-scale 18.9MW solar PV installation for one of Zambia's leading cement manufacturers.",
  },
  {
    name: "33/11/0.4kV 3.6MVA Substation",
    client: "Zenithia Metals, Bwana Mkubwa",
    category: "Electrical",
    year: "2025",
    description:
      "Design, supply, and construction of a complete 3.6MVA substation with 33kV, 11kV, and 0.4kV voltage levels.",
  },
  {
    name: "176kW Hybrid Solar PV System",
    client: "Mary Begg Health Services",
    category: "Solar PV",
    year: "Jan 2025",
    description:
      "Design, supply, installation, and commissioning of a 176kW hybrid solar PV system for healthcare facilities.",
  },
  {
    name: "16kW Solar PV System",
    client: "Henry Makulu House",
    category: "Solar PV",
    year: "Dec 2024",
    description:
      "Residential solar PV installation providing reliable off-grid power supply.",
  },
  {
    name: "20kW Solar PV System",
    client: "Copperbelt Provincial Health Office",
    category: "Solar PV",
    year: "Oct 2024",
    description:
      "Solar PV installation for provincial health office ensuring uninterrupted power for critical health services.",
  },
  {
    name: "20kW Solar PV System",
    client: "Zambia Flying Doctor Services",
    category: "Solar PV",
    year: "Oct 2024",
    description:
      "Solar PV system for the Flying Doctor Services supporting emergency medical aviation operations.",
  },
  {
    name: "18kW Solar PV System",
    client: "Simba International School",
    category: "Solar PV",
    year: "Aug 2024",
    description:
      "Solar PV installation for educational institution, reducing energy costs and providing reliable power.",
  },
  {
    name: "MV Distribution Network Lines",
    client: "ZESCO Limited",
    category: "Electrical",
    year: "2023-2025",
    description:
      "Construction and rehabilitation of medium voltage distribution network lines across multiple locations.",
  },
  {
    name: "11kV Switchgear Pre-commissioning",
    client: "Konkola Deep Mine",
    category: "Electrical",
    year: "2024",
    description:
      "Pre-commissioning testing and verification of 11kV switchgear systems for underground mining operations.",
  },
  {
    name: "Distribution Lines & Lightning Protection",
    client: "Changzhou Resources",
    category: "Electrical",
    year: "2024",
    description:
      "Construction of distribution lines and installation of lightning protection systems for mining operations.",
  },
  {
    name: "Power Factor Correction",
    client: "Ndola Foundry / Art Engineering / Simba Holdings",
    category: "Electrical",
    year: "2023",
    description:
      "Design and installation of power factor correction systems to improve energy efficiency and reduce utility costs.",
  },
  {
    name: "Biomass Power Grid Impact Studies",
    client: "Multiple Locations (Kawambwa, Mansa, Mpika, Serenje, Kasama)",
    category: "Consultancy",
    year: "2017",
    description:
      "Grid impact studies for proposed biomass power plants at five locations across Zambia's rural provinces.",
  },
];

const categories = [
  "All",
  "Electrical",
  "Solar PV",
  "Civil",
  "Supply",
  "Consultancy",
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <HeroBanner
        title="Our Projects"
        subtitle="A proven track record of delivering excellence across Zambia"
      />

      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
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

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.name + project.client} {...project} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
