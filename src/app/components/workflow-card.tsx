"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface WorkflowCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  delay: number;
  className?: string;
}

export function WorkflowCard({
  title,
  icon: Icon,
  description,
  delay,
  className = "",
}: WorkflowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative flex flex-col items-center ${className}`}
    >
      <div className="mb-4 rounded-xl bg-white p-6 shadow-lg">
        <div className="flex h-48 w-48 flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-blue-100 p-4">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-center text-lg font-semibold">{title}</h3>
          <p className="text-center text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="text-lg font-medium text-gray-900"
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
