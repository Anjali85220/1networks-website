import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
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
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            NAVIGATING THE <span className="text-red-600">FUTURE</span> OF 
            <span className="text-red-600"> TECHNOLOGY</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Delivering innovative technology solutions tailored for modern businesses
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-black">About <span className="text-red-600">1NETWORKS</span></h2>
            <p className="mt-4 text-gray-800 text-lg">
              1NETWORKS is a dynamic startup dedicated to delivering innovative technology solutions 
              tailored to meet the unique needs of modern businesses. Founded in 2024, with a rich 
              experience of 30 years in IT, we pursue a solution-driven business model that integrates 
              with technology partners.
            </p>
            <p className="mt-4 text-gray-800 text-lg">
              With a team of passionate experts and a commitment to excellence, we strive to push the 
              boundaries of technology and create impactful solutions for our customers.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border-2 border-black p-6 bg-black text-white shadow-lg"
          >
            <h3 className="font-semibold text-xl mb-2 text-red-500">Our Vision</h3>
            <p className="mt-2">
              To be the leading IT solution provider that empowers businesses and individuals to thrive 
              in a rapidly evolving digital world.
            </p>
            
            <h3 className="font-semibold text-xl mt-6 mb-2 text-red-500">Our Mission</h3>
            <p className="mt-2">
              We are committed to delivering innovative, user-centric products and services that drive 
              growth, efficiency, and success for our clients.
            </p>
          </motion.div>
        </div>

        {/* What Makes Us Unique Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-black">What Makes Us <span className="text-red-600">Unique</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Innovative Solutions",
                desc: "Leveraging the latest advancements and customizable options to meet your specific needs."
              },
              {
                title: "Expert Team",
                desc: "Experienced professionals with deep technical expertise across various technology domains."
              },
              {
                title: "Comprehensive Services",
                desc: "End-to-end solutions including consultation, implementation, and support."
              },
              {
                title: "Customer-Centric Approach",
                desc: "Tailored solutions and responsive support focused on driving your success."
              },
              {
                title: "Reliability and Quality",
                desc: "Proven track record with high standards of performance and trusted partnerships."
              },
              {
                title: "Cost-Effective Solutions",
                desc: "Clear pricing with a focus on delivering maximum value and return on investment."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border-2 border-black shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-2 text-red-600">{item.title}</h3>
                <p className="text-gray-800">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

    </div>
  );
}