export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="scroll-mt-24 bg-white px-6 py-20 md:py-24"
      aria-label="About us"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Us
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trusted Revenue Cycle Management for Growing Practices
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Medibill Solutions supports medical teams with dependable billing,
            coding, and collections services so providers can stay focused on
            patient care.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Our team combines healthcare expertise with modern workflows to
            reduce denials, accelerate reimbursements, and improve financial
            performance for clinics of all sizes.
          </p>
        </div>
      </div>
    </section>
  );
}
