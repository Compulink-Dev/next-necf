"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

export default function Sponsors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch("/api/sponsors");
        const data = await response.json();
        setSponsors(data.sponsors);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch sponsors:", error);
        setIsLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  if (isLoading)
    return <div className="text-center py-12">Loading sponsors...</div>;
  if (!sponsors.length)
    return <div className="text-center py-12">No sponsors to display</div>;

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Partners & Sponsors
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <motion.div
            ref={containerRef}
            className="flex gap-8 md:gap-16 items-center"
            animate={{
              x: ["100%", "0%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Double the array to create seamless loop */}
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <motion.div
                key={`${sponsor.id}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-16 w-32 md:h-20 md:w-40 relative transition-all duration-300">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 160px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
