export default function Software() {
  const softwareFeatures = [
    "Real-time claim tracking dashboard",
    "Automated denial alerts and task routing",
    "Custom reporting for providers and managers",
  ];

  return (
    <section
      id="software"
      className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-24 md:py-32"
      aria-label="Software"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            Software
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Purpose-built tools that give your team visibility into billing
            performance and financial outcomes.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <ul className="space-y-4">
            {softwareFeatures.map((feature) => (
              <li key={feature} className="text-lg text-slate-700">
                - {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
