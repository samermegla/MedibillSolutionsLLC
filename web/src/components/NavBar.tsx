import Image from "next/image";
import { GOOGLE_FORM_URL } from "@/config/links";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      {/* 1. 'justify-between' pushes the three children (Logo, UL, and Spacer) apart.
          2. 'w-full' and 'px-6' ensures it spans the screen with a little breathing room.
      */}
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-6">
        
        {/* 1. Logo Container (Pinned Left) */}
        <div className="flex flex-1 justify-start">
          <div className="relative flex items-center">
            <Image
              src="/a_clean_professional_corporate_logo_design_on_a_w-Picsart-BackgroundRemover.png"
              alt="Medibill Solutions"
              width={512}
              height={512}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28 -mt-1"
              sizes="(max-width: 768px) 96px, 112px"
              priority
            />
          </div>
        </div>

        {/* 2. Links (Centered in the middle of the page) */}
        <ul className="flex items-center gap-8 text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
          <li>
            <a href="#about-us" className="transition-colors hover:text-slate-700">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="transition-colors hover:text-slate-700">
              Services
            </a>
          </li>
          <li>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-700"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* 3. Empty Spacer (Required to keep the links perfectly centered) */}
        <div className="hidden flex-1 justify-end sm:flex" />
      </nav>
    </header>
  );
}