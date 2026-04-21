import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-50 to-blue-50 px-6 pt-28 pb-12 font-sans md:pt-32 md:pb-16">
      <div className="mx-auto grid h-full w-full max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-14">
        
        {/* Text Section - Left Side */}
        <div className="flex flex-col justify-start self-center text-left">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Focus on Your Patients.
            <br className="hidden sm:block" />
            We&apos;ll Handle the Billing.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Maximize your practice&apos;s cash flow and eliminate claim denials
            with expert, end-to-end revenue cycle management tailored for modern
            clinics.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Get a Free Revenue Audit
            </a>
            <a
              href="#services"
              className="rounded-lg border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Image Section - Right Side */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:max-w-xl">
            <Image
              src="/happy-african-american-female-doctor-working-medical-clinic.jpg"
              alt="Doctor reviewing information with a patient in a clinic"
              fill
              className="object-cover object-center"
              priority
              sizes="(min-width: 1280px) 36rem, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}