export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-24 md:py-32"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Contact
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Ready to improve your revenue cycle? Reach out and we will schedule
            a free consultation.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Phone
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              (555) 123-4567
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Email
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              hello@medibillsolutions.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
