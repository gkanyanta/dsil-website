"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  client: string;
  category: string;
  year: string;
  description: string;
}

export default function ProjectCard({
  name,
  client,
  category,
  year,
  description,
}: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white border-l-4 border-red p-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-oswald uppercase tracking-wider bg-red/10 text-red px-2 py-1">
          {category}
        </span>
        {year && (
          <span className="text-xs text-gray-400 font-oswald">{year}</span>
        )}
      </div>
      <h3 className="font-oswald text-navy text-lg font-bold mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{client}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
