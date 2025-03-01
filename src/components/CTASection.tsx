export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to work together?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              I&apos;m currently available for freelance work and full-time
              positions. Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:danan12453@gmail.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition"
              >
                Contact Me
              </a>
              <a
                href="/resume-dyan-dananjaya.pdf"
                className="bg-transparent border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
