import Image from "next/image";
import { GOOGLE_FORM_URL } from "@/config/links";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-28 md:pt-32">
      
      <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-6 pb-16">
        <div className="grid h-full gap-10 md:grid-cols-2 md:items-center">
          
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
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
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

          <div className="relative mt-8 block aspect-[4/3] w-full md:hidden">
            <Image
              src="/Hero2.png"
              alt="Medical professional consulting with a patient"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
          
        </div>
      </div>

      {/* Desktop Image Container */}
      <div className="absolute bottom-0 top-24 -right-16 hidden w-[60%] md:block lg:top-17 lg:-right-24 lg:w-[65%] xl:-right-8 xl:w-[70%] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%),linear-gradient(to_left,black_80%,transparent_100%)] [mask-composite:intersect]">
        <div className="relative h-full w-full">
          <Image
            src="/Hero2.png"
            alt="Medical professional consulting with a patient"
            fill
            className="object-contain object-bottom object-right" // Changed to object-contain to prevent cropping the top of her head
            priority
          />
        </div>
      </div>

    </section>
  );
}