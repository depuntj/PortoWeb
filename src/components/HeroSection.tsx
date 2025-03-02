"use client";
import Image from "next/image";
import Waves from "@/components/Animation/Waves";
import BlurText from "@/components/Animation/BlurText";
import { useState } from "react";

export default function HeroSection() {
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  return (
    <section className="relative pt-24 pb-12 md:pt-36 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Waves
          lineColor="rgba(255, 255, 255, 0.6)"
          backgroundColor="rgba(0, 0, 0, 0.85)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={30}
          yGap={40}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-1"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight drop-shadow-lg">
              <BlurText
                text="Hello, I'm"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-blue-400 leading-tight text-shadow-sm"
                onAnimationComplete={() => setNameAnimationComplete(true)}
              />
              <div className="mt-2 block text-white text-6xl sm:text-7xl drop-shadow-lg">
                <BlurText
                  text="Dyan Dananjaya"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => setTitleAnimationComplete(true)}
                />
              </div>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-white font-semibold drop-shadow-md">
              <BlurText
                text="Full-Stack Developer"
                delay={100}
                animateBy="words"
                direction="bottom"
              />
            </h2>

            <p
              className={`text-xl text-white leading-relaxed max-w-lg drop-shadow-md backdrop-blur-sm bg-black/10 p-4 rounded-lg transition-opacity duration-700 ${
                titleAnimationComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              Innovative developer with a proven track record of enhancing user
              experiences through strategic development and analytics.
            </p>
          </div>

          <div
            className={`relative w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0 transition-all duration-1000 transform ${
              nameAnimationComplete
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-30 blur-md"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              {/* Use a regular img tag instead of Next.js Image component to avoid build issues */}
              <Image
                src="/Profile.png"
                alt="Dyan Dananjaya"
                fill
                style={{ objectFit: "cover" }}
                className="object-cover"
              />
            </div>

            <div className="absolute -inset-4 rounded-full border-2 border-blue-500/30 animate-pulse"></div>
          </div>
        </div>

        <div
          className={`flex gap-6 mt-12 justify-center md:justify-start transition-all duration-700 ${
            titleAnimationComplete
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="mailto:danan12453@gmail.com"
            className="text-white hover:text-blue-400 transition-colors bg-black/30 p-3 rounded-full backdrop-blur-sm"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
          <a
            href="https://github.com/depuntj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors bg-black/30 p-3 rounded-full backdrop-blur-sm"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/danjaytj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors bg-black/30 p-3 rounded-full backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="tel:+6282232685588"
            className="text-white hover:text-blue-400 transition-colors bg-black/30 p-3 rounded-full backdrop-blur-sm"
            aria-label="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .text-shadow-md {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          50% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.5;
          }
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s infinite;
        }
      `}</style>
    </section>
  );
}
