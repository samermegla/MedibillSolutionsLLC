import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-32 md:py-48" 
      aria-label="About us"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Two-Column Grid: Image Left, ALL Text Right */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
          
          {/* Left Column: Image Area (Completely open now) */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/your-about-us-image.jpg" 
              alt="Medical professionals working efficiently"
              fill
              className="object-cover"
            />
            {/* Fallback styling just in case the image isn't loaded yet */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 -z-10">
               <span className="font-medium text-slate-500">Image Placeholder</span>
            </div>
          </div>

          {/* Right Column: All Text Content */}
          <div className="flex flex-col justify-center text-left">
            
            {/* The Title is now securely in the right column */}
            <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              About Us
            </h2>
            
            <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Trusted Revenue Cycle Management for Growing Practices
            </h3>
            
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
      </div>
    </section>
  );
}