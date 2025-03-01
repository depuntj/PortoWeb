export default function SkillsSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programming & Frameworks */}
          <div className="bg-background rounded-xl p-6 border border-foreground/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">Kotlin</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">JavaScript</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">Node.js</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">HTML/CSS</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Databases & Cloud */}
          <div className="bg-background rounded-xl p-6 border border-foreground/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Databases & Cloud</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">Firebase</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">PostgreSQL</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">AlloyDB</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">GCP</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-background rounded-xl p-6 border border-foreground/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">Time Management</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">Team Collaboration</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">Problem-Solving</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-foreground/70">Communication</span>
                <div className="w-24 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
