import { motion } from "framer-motion";

const services = [
  { 
    title: "Structured Cabling Solutions", 
    desc: "Efficiently organized network cables for reliable connectivity and easy scalability, supporting both current and future technology needs.",
    icon: "🔌"
  },
  { 
    title: "IT Consulting", 
    desc: "Field of activity which focuses on advising organizations on how best to use information technology in achieving their business objectives and growth.",
    icon: "💡"
  },
  { 
    title: "AMC", 
    desc: "Dedicated to delivering exceptional service agreements that provide ongoing maintenance and support for specific equipment or assets.",
    icon: "🛠️"
  },
  { 
    title: "Cloud-Based Solutions", 
    desc: "Cloud and AI Management, enabling enterprises to optimize and manage their cloud financial operations with a unified environment.",
    icon: "☁️"
  },
  { 
    title: "Servers / Storage", 
    desc: "Desktops to Servers designed to provide services and resources over a network with high performance and security.",
    icon: "💾"
  },
  { 
    title: "Modern Data Center Infrastructure", 
    desc: "Delivers cutting-edge data centers that offer high performance, scalability, and robust security, including SFP/AOC solutions.",
    icon: "🏢"
  },
];

export default function Services() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Our <span className="text-red-600">Services</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to empower your business
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
          >
            <div className="h-full rounded-xl border-2 border-black p-6 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4 text-red-600">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 bg-black rounded-xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready to transform your IT infrastructure?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Our experts are ready to discuss how we can help your business thrive with cutting-edge technology solutions.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-red-700 transition-colors"
        >
          Get in touch
        </motion.a>
      </motion.div>
    </main>
  );
}