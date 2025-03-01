export default function AboutSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-foreground/80">
              Innovative Full-Stack Developer with a proven track record of
              enhancing user experiences through strategic development and
              analytics. Developed a Kotlin-based mobile application that
              maintained a 99% crash-free rate, integrated Firebase Analytics to
              boost feature optimization by 25%, and collaborated on machine
              learning–based features to improve app retention.
            </p>
            <p className="text-foreground/80">
              Skilled in JavaScript, Kotlin, and Node.js, and eager to continue
              driving user engagement and performance in a fast-paced
              environment.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    HTML & CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                    Kotlin
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    Firebase
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    PostgreSQL/AlloyDB
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Component (ReactBits-inspired) */}
          <div className="relative border-l border-foreground/20 pl-6 pt-2">
            {/* Experience Item 1 */}
            <div className="mb-10 relative">
              <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-blue-500"></div>
              <h3 className="text-lg font-semibold">Mobile Developer Cohort</h3>
              <p className="text-foreground/60 text-sm mb-2">
                Aug 2024 - Dec 2024 • Bangkit Academy
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-foreground/80">
                <li>
                  Developed a Kotlin-based mobile application maintaining a 99%
                  crash-free rate
                </li>
                <li>
                  Integrated Firebase Analytics for 25% feature optimization
                  improvement
                </li>
                <li>
                  Collaborated on ML-based features, improving app retention by
                  15%
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="mb-10 relative">
              <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-violet-500"></div>
              <h3 className="text-lg font-semibold">Informatics Engineering</h3>
              <p className="text-foreground/60 text-sm mb-2">
                Universitas Negeri Surabaya • GPA: 3.82
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-foreground/80">
                <li>
                  Served as a lab assistant, helping students with hands-on
                  technical exercises
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="relative">
              <div className="absolute -left-9 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-green-500"></div>
              <h3 className="text-lg font-semibold">
                Google Cloud Certifications
              </h3>
              <p className="text-foreground/60 text-sm mb-2">2024</p>
              <ul className="list-disc list-inside text-sm space-y-2 text-foreground/80">
                <li>Cloud SQL for PostgreSQL Instances Skill Badge</li>
                <li>AlloyDB Instances Skill Badge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
