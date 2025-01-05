"use client";

import { motion } from "framer-motion";
import { MapPin, Tag } from "lucide-react";

interface MapMarkerProps {
  variant?: "default" | "highlighted" | "store";
  label?: string;
  discount?: string;
  className?: string;
  position?: string;
  style?: React.CSSProperties;
}

export function MapMarker({
  variant = "default",
  label,
  discount,
  className = "",
  style = {},
}: MapMarkerProps) {
  const baseStyles = "absolute transform -translate-x-1/2 -translate-y-1/2";

  if (variant === "highlighted") {
    return (
      <div className={`${baseStyles} ${className}`} style={style}>
        <motion.div className="relative" whileHover={{ scale: 1.1 }}>
          <div className="absolute -inset-0.5 animate-ping rounded-full bg-red-400 opacity-75" />
          <div className="relative rounded-full bg-red-500 p-2 text-white">
            <MapPin className="h-3 w-3" />
          </div>
          {discount && (
            <div className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">
              {discount}
            </div>
          )}
          {label && (
            <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium shadow-lg">
              {label}
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  if (variant === "store") {
    return (
      <div className={`${baseStyles} ${className}`}>
        <motion.div className="relative" whileHover={{ scale: 1.1 }}>
          <div className="relative rounded-full bg-primary p-2 text-white">
            <Tag className="h-4 w-4" />
          </div>
          {label && (
            <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium shadow-lg">
              {label}
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      <motion.div className="relative" whileHover={{ scale: 1.1 }}>
        <div className="relative rounded-full bg-gray-900 p-2 text-white">
          <MapPin className="h-4 w-4" />
        </div>
        {label && (
          <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium shadow-lg">
            {label}
          </div>
        )}
      </motion.div>
    </div>
  );
}
