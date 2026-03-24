"use client";

import { motion } from "framer-motion";
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  index: number;
}

export default function TeamCard({ name, role, bio, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white border-l-4 border-red p-6"
    >
      <UserCircleIcon className="w-16 h-16 text-navy/20 mb-4" />
      <h3 className="font-oswald text-navy text-lg font-bold">{name}</h3>
      <p className="text-red text-sm font-oswald uppercase tracking-wider mb-3">
        {role}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
}
