import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sideWave from "../assets/side_wave.png"; // Import image

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Right-side wave image */}
        <img
          src={sideWave}
          alt="Decorative wave"
          className="absolute right-0 top-0 h-full w-auto object-cover z-0"
        />

        {/* Dotted background */}
        <div className="absolute inset-0 bg-dots -z-10" />

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-24 grid md:grid-cols-2 gap-10 items-center relative z-10 -mt-16">
          <div data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Powering the <span className="text-brand-red">Networks</span> of Tomorrow.
            </h1>
            <p className="mt-5 text-gray-700 text-lg">
              1NETWORKS is a dynamic startup delivering innovative technology solutions
              tailored to modern businesses — with decades of accumulated expertise and a
              solution-driven model alongside technology partners.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="/services"
                className="px-6 py-3 rounded-xl border hover:bg-gray-100 transition"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl bg-brand-red text-white hover:opacity-90 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Services Card */}
          <div
            className="rounded-2xl border p-6 shadow-soft bg-white"
            data-aos="fade-left"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                "Structured Cabling Solutions",
                "IT Consulting",
                "AMC (Annual Maintenance Contracts)",
                "Cloud-Based Solutions",
                "Servers & Storage",
                "Modern Data Center Infrastructure",
              ].map((s) => (
                <li key={s} className="border rounded-xl p-3">
                  <span className="font-semibold">•</span> {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              Innovation-driven · Expert team · Comprehensive services · Customer-centric ·
              Reliable · Cost-effective · Commitment to excellence
            </p>
          </div>
        
        </div>
        
      </section>
      
    </main>
  );
}