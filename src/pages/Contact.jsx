import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // basic client-side validation
    const form = new FormData(formRef.current);
    const name = form.get("from_name")?.toString().trim();
    const email = form.get("from_email")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", msg: "Please fill in name, email and message." });
      return;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
      formRef.current.reset();
    } catch (err) {
      setStatus({ type: "error", msg: "Could not send. Please try again later." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-4 pt-10 pb-16 md:pt-12 md:pb-20" // Adjusted padding here
    >
      {/* Contact Us Header - Moved up by adjusting padding and margins */}
      <motion.div variants={itemVariants} className="mb-10"> {/* Reduced margin-bottom */}
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl">
          Have a project in mind? Let's collaborate and make it happen.
        </p>
      </motion.div>

      {/* Enhanced Form with improved visibility */}
      <motion.form 
        ref={formRef} 
        onSubmit={onSubmit} 
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Your Name*</label>
            <input 
              id="name"
              name="from_name" 
              className="w-full border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-white shadow-sm transition-all duration-200" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Your Email*</label>
            <input 
              id="email"
              type="email" 
              name="from_email" 
              className="w-full border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-white shadow-sm transition-all duration-200" 
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">Phone</label>
            <input 
              id="phone"
              name="phone" 
              placeholder="(Optional)"
              className="w-full border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-white shadow-sm transition-all duration-200" 
            />
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col">
          <div>
            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Your Message*</label>
            <textarea 
              id="message"
              name="message" 
              rows={7} 
              className="w-full border-2 border-gray-300 rounded-xl p-4 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-white shadow-sm transition-all duration-200"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold disabled:opacity-70 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
          {status.msg && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-sm p-4 rounded-lg ${status.type === "success" ? "bg-green-100 text-green-800 border border-green-200" : "bg-red-100 text-red-800 border border-red-200"}`}
            >
              {status.msg}
            </motion.div>
          )}
        </motion.div>
      </motion.form>

      {/* Reach Us Directly Section */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 rounded-2xl border border-red-900/20 p-8 bg-gradient-to-br from-black to-gray-900 shadow-xl"
      >
        <h3 className="font-bold text-xl text-red-500 mb-4">REACH US DIRECTLY</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-2 border-red-600 pl-4">
            <p className="text-red-400 font-medium mb-1">SALES</p>
            <p className="text-gray-300">+91 9845522880</p>
            <p className="text-gray-300">preetikiran@1networks.in</p>
          </div>
          <div className="border-l-2 border-red-600 pl-4">
            <p className="text-red-400 font-medium mb-1">OPERATIONS/FINANCE</p>
            <p className="text-gray-300">+91 7019397719</p>
            <p className="text-gray-300">priya@1networks.in</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-red-900/30">
          <p className="text-red-400 font-medium mb-1">OUR OFFICE</p>
          <p className="text-gray-300">Novel Tech Park, #46/4, GB Palya, Kudlu Gate, Hosur Road, Bangalore - 560068</p>
        </div>
      </motion.div>
    </motion.main>
  );
}