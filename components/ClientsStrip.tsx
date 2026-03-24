"use client";

import { motion } from "framer-motion";

const clients = [
  "ZESCO Limited",
  "Konkola Copper Mines",
  "Zambezi Portland Cement",
  "Chilanga Cement",
  "Mary Begg Health Services",
  "Changzhou Resources",
];

export default function ClientsStrip() {
  return (
    <section className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-oswald text-white text-center text-2xl font-bold mb-8 uppercase tracking-wider">
          Trusted By
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-white/20 rounded-sm px-4 py-3 text-center text-white/80 text-sm font-oswald uppercase tracking-wider"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
