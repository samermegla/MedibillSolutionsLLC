import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-24 md:py-32"
      aria-label="About us"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          
          {/* Left Column: Styled Image Area */}
          <div className="relative">
            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -left-6 h-full w-full rounded-2xl bg-blue-600/10" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/Hero.png" // Update to the actual filename
                alt="Founder of MediBill Solutions"
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Expertise You Can Trust
            </span>
            
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              About Us
            </h2>
            
            <h3 className="mt-6 text-2xl font-bold text-slate-800">
              Trusted Revenue Cycle Management for Growing Practices
            </h3>
            
            <div className="mt-6 space-y-4">
              <p className="text-lg leading-relaxed text-slate-600">
                MediBill Solutions supports medical teams with dependable billing,
                coding, and collections services so providers can stay focused on
                patient care.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-600">
                Our team combines healthcare expertise with modern workflows to
                reduce denials, accelerate reimbursements, and improve financial
                performance for clinics of all sizes.
              </p>
            </div>

            {/* Added a subtle signature/founder note since the photo is there */}
            <div className="mt-10 border-l-4 border-blue-600 pl-4 italic text-slate-500">
              "We handle the complexity of billing so you can handle the care of your patients."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}