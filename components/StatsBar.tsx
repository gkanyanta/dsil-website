"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Established", value: "2018" },
  { label: "Years Active", value: "6+" },
  { label: "Projects", value: "20+" },
  { label: "Core Engineers", value: "8" },
];

export default function StatsBar() {
  return (
    <section className="bg-red py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center text-white"
          >
            <div className="font-oswald text-3xl md:text-4xl font-bold">
              {stat.value}
            </div>
            <div className="text-sm uppercase tracking-wider mt-1 text-white/80">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
