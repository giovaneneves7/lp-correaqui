/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Perfect UI Design",
    description:
      "Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante at mi rhoncus volutpat.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Great CSS Animation",
    description:
      "Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante at mi rhoncus volutpat.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Fully Secured",
    description:
      "Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante at mi rhoncus volutpat.",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quisque malesuada nulla sapien et molestie. Fusce cursus nirsil vel
            sapienquis pibus. leo quam vulputate nisi, sit amet blandit erat
            magna.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-48 h-48 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
