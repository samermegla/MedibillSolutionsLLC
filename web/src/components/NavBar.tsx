import { GOOGLE_FORM_URL } from "@/config/links";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-8 px-6 py-4">
        <div className="h-10 w-36 shrink-0 rounded-md border border-dashed border-slate-300" />

        <ul className="flex items-center gap-6 text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
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
          <li>
            <a
              href="#roi-calculator"
              className="transition-colors hover:text-slate-700"
            >
              ROI Calculator
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
