/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

export default function SkillsSection() {
  const technologies = [
    "Kotlin",
    "JavaScript",
    "Node.js",
    "Firebase",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Git",
  ];

  const repeatedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <section className="relative overflow-x-hidden py-8 bg-black">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20"></div>
      <div className="flex animate-scroll hover:animate-pause gap-12 md:gap-20 w-max">
        {repeatedTechnologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <img
              src={`/${tech.toLowerCase().replace(".", "")}.svg`}
              alt={tech}
              className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
              width="30"
              height="30"
              loading="lazy"
            />
            <span className="text-lg font-medium text-white/80">{tech}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-pause:hover {
          animation-play-state: paused;
        }
        @media (min-width: 768px) {
          .animate-scroll {
            animation-duration: 50s;
          }
        }
      `}</style>
    </section>
  );
}
