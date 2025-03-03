"use client";

import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("web");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionContent = {
    web: {
      title: "Web Development",
      content: (
        <div className="space-y-4">
          <p className="text-white/90">
            I create responsive, modern web applications with a focus on
            performance and user experience. With expertise in JavaScript and
            modern frameworks, I build scalable frontend and backend solutions
            that engage users and drive business results.
          </p>
        </div>
      ),
    },
    mobile: {
      title: "Mobile Development",
      content: (
        <div className="space-y-4">
          <p className="text-white/90">
            I develop Kotlin-based Android applications that deliver exceptional
            user experiences with high performance. My mobile development
            background includes creating apps with a 99% crash-free rate and
            implementing data-driven optimizations through Firebase Analytics.
          </p>
        </div>
      ),
    },
    uiux: {
      title: "UI/UX Design",
      content: (
        <div className="space-y-4">
          <p className="text-white/90">
            I design intuitive and visually appealing interfaces that prioritize
            user experience. My approach focuses on user-centered design
            principles to create interfaces that are both beautiful and
            functional, leading to improved user satisfaction and engagement
            metrics.
          </p>
        </div>
      ),
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/5 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 z-0"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-3xl font-bold mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          What I Do
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`space-y-5 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div
              className={`p-5 rounded-xl border transition-all duration-300 ${
                activeSection === "web"
                  ? "bg-gradient-to-r from-violet-900/50 to-indigo-900/50 border-violet-500/50 shadow-lg shadow-violet-500/10"
                  : "bg-black/40 border-violet-500/20 hover:bg-black/50"
              } cursor-pointer group`}
              onClick={() => setActiveSection("web")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${
                    activeSection === "web"
                      ? "text-violet-400"
                      : "text-violet-500/70"
                  } transition-colors group-hover:text-violet-400`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-medium ${
                    activeSection === "web" ? "text-white" : "text-white/80"
                  } transition-colors group-hover:text-white`}
                >
                  Web Development
                </h3>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform transform ${
                      activeSection === "web"
                        ? "text-violet-400 rotate-180"
                        : "text-gray-400"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className={`p-5 rounded-xl border transition-all duration-300 ${
                activeSection === "mobile"
                  ? "bg-gradient-to-r from-violet-900/50 to-indigo-900/50 border-violet-500/50 shadow-lg shadow-violet-500/10"
                  : "bg-black/40 border-violet-500/20 hover:bg-black/50"
              } cursor-pointer group`}
              onClick={() => setActiveSection("mobile")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${
                    activeSection === "mobile"
                      ? "text-violet-400"
                      : "text-violet-500/70"
                  } transition-colors group-hover:text-violet-400`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-medium ${
                    activeSection === "mobile" ? "text-white" : "text-white/80"
                  } transition-colors group-hover:text-white`}
                >
                  Mobile Development
                </h3>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform transform ${
                      activeSection === "mobile"
                        ? "text-violet-400 rotate-180"
                        : "text-gray-400"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className={`p-5 rounded-xl border transition-all duration-300 ${
                activeSection === "uiux"
                  ? "bg-gradient-to-r from-violet-900/50 to-indigo-900/50 border-violet-500/50 shadow-lg shadow-violet-500/10"
                  : "bg-black/40 border-violet-500/20 hover:bg-black/50"
              } cursor-pointer group`}
              onClick={() => setActiveSection("uiux")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${
                    activeSection === "uiux"
                      ? "text-violet-400"
                      : "text-violet-500/70"
                  } transition-colors group-hover:text-violet-400`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-medium ${
                    activeSection === "uiux" ? "text-white" : "text-white/80"
                  } transition-colors group-hover:text-white`}
                >
                  UI/UX Design & Prototyping
                </h3>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform transform ${
                      activeSection === "uiux"
                        ? "text-violet-400 rotate-180"
                        : "text-gray-400"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl border border-violet-500/20 bg-black/90">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Experience</h3>
              </div>

              <div className="pl-2">
                <div className="mb-1 relative flex items-start gap-3">
                  <div className="h-5 w-5 mt-1 rounded-full bg-indigo-600 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-medium text-indigo-400">
                      Mobile Developer Cohort
                    </h4>
                    <p className="text-white/70 text-sm mb-3">
                      Aug 2024 - Dec 2024 • Bangkit Academy Distinction Graduate
                    </p>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 inline-block mt-1">
                          •
                        </span>
                        <span>
                          Developed a Kotlin-based mobile application
                          maintaining a 99% crash-free rate
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 inline-block mt-1">
                          •
                        </span>
                        <span>
                          Integrated Firebase Analytics for 25% feature
                          optimization improvement
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400 inline-block mt-1">
                          •
                        </span>
                        <span>
                          Collaborated on ML-based features, improving app
                          retention by 15%
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-gradient-to-br from-black/80 to-violet-950/20 p-6 rounded-2xl border border-violet-500/30 shadow-xl shadow-violet-500/5 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3 text-violet-400">
                  {activeSection === "web" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                  {activeSection === "mobile" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                  {activeSection === "uiux" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  )}
                </span>
                {
                  sectionContent[activeSection as keyof typeof sectionContent]
                    .title
                }
              </h3>
              <div className="min-h-48 content-transition">
                {
                  sectionContent[activeSection as keyof typeof sectionContent]
                    .content
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
