import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Logo from "./assets/logo.png";

const Nav = () => (
  <motion.header
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b"
  >
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <img 
          src={Logo} 
          alt="1NETWORKS Logo" 
          className="h-20 w-auto"
        />
      </a>

      {/* Nav links */}
      <nav className="flex gap-6 text-sm">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Services", "/services"],
          ["Contact", "/contact"],
        ].map(([label, to], i) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                `hover:text-brand-red transition ${
                  isActive ? "text-brand-red font-semibold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      {/* CTA button */}
      <a
        href="/contact"
        className="hidden sm:inline-block bg-brand-red text-white px-4 py-2 rounded-xl shadow-soft hover:opacity-90"
      >
        Get in touch
      </a>
    </div>
  </motion.header>
);

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: showFooter ? 0 : 100,
        opacity: showFooter ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-4 shadow-lg border-t-2 border-red-600"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-red-500">1NETWORKS</h3>
          <p className="text-gray-400">Novel Tech Park, #46/4, GB Palya, Kudlu Gate, Hosur Road, Bangalore-560068</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <h4 className="font-semibold mb-1 text-red-500">Sales</h4>
            <p>+919845522880</p>
            <p>preetikiran@1networks.in</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-red-500">Operations/Finance</h4>
            <p>+917019397719</p>
            <p>priya@1networks.in</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pb-24"> {/* Added padding-bottom to prevent footer overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}