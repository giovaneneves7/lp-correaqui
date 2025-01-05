"use client";

import { motion } from "framer-motion";

export function ConnectingLine() {
  return (
    <div className="absolute left-1/2 top-[45%] hidden h-0.5 w-full -translate-x-1/2 md:block">
      <div className="relative h-full w-full bg-blue-100">
        <motion.div
          className="absolute inset-0 bg-blue-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute -right-2 -top-1 h-4 w-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          <div className="h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
          <div className="absolute inset-0 rounded-full bg-blue-600" />
        </motion.div>
      </div>
    </div>
  );
}
