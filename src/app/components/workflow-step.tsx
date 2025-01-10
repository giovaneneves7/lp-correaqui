"use client";

import { motion } from "framer-motion";
import { WorkflowMockup } from "./workflow-mockup";

interface WorkflowStepProps {
  title: string;
  description: string;
  step: "search" | "locate" | "compare" | "save";
  delay: number;
  className?: string;
}

export function WorkflowStep({
  title,
  description,
  step,
  delay,
  className = "",
}: WorkflowStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative flex flex-col md:flex-col-reverse items-center ${className}`}
    >
      {/* Texto */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="mb-6 text-center"
      >
        <h3 className="mb-2 text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </motion.div>

      {/* Mockup */}
      <WorkflowMockup step={step} delay={delay} />
    </motion.div>
  );
}
