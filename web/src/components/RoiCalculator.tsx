import { GOOGLE_FORM_URL } from "@/config/links";

const roiInputs = [
  "Monthly claim volume",
  "Current denial rate",
  "Average reimbursement per claim",
];

export default function RoiCalculator() {
  return (
    <section
      id="roi-calculator"
      className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-24 md:py-32"
      aria-label="ROI Calculator"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
            ROI Calculator
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Estimate how much additional revenue your practice can recover by
            reducing denials and accelerating collections.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Data points we use
          </p>
          <ul className="mt-4 space-y-3">
            {roiInputs.map((input) => (
              <li key={input} className="text-lg text-slate-700">
                - {input}
              </li>
            ))}
          </ul>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Launch ROI Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
