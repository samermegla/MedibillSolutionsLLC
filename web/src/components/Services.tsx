export default function Services() {
  const serviceItems = [
    {
      title: "Medical Billing",
      description:
        "End-to-end claim submission and follow-up to keep reimbursements consistent and predictable.",
    },
    {
      title: "Coding & Compliance",
      description:
        "Accurate coding support aligned with payer requirements to reduce denials and compliance risk.",
    },
    {
      title: "Accounts Receivable",
      description:
        "Proactive AR management and aging analysis to accelerate collections and improve cash flow.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-24 md:py-32"
      aria-label="Services"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Services
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Flexible revenue cycle solutions tailored to the needs of modern
            healthcare practices.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {serviceItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
