"use client";

import { motion } from "framer-motion";
import {
  BoltIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  bolt: BoltIcon,
  sun: SunIcon,
  wrench: WrenchScrewdriverIcon,
  building: BuildingOfficeIcon,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || BoltIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href="/services"
        className="block bg-white border-l-4 border-red p-6 hover:shadow-lg transition-shadow h-full"
      >
        <Icon className="w-10 h-10 text-red mb-4" />
        <h3 className="font-oswald text-navy text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </Link>
    </motion.div>
  );
}
