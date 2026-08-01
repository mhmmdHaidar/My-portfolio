import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal, socials } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Setup form data for Web3Forms
    const submissionData = new FormData();
    
    // GANTI INI DENGAN ACCESS KEY DARI WEB3FORMS 👇
    submissionData.append("access_key", "c3fcc3d2-a6d1-46d7-8ab7-3cb9dd7b8ca2"); 
    
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("subject", formData.subject || 'Pesan dari Portofolio');
    submissionData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    // Reset button after 4 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#f8f8f8] bg-dot-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-gray-400 uppercase tracking-[0.25em] font-semibold mb-4">GET IN TOUCH</p>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-black text-black leading-[1.05] tracking-tight italic">
            Contact Me
          </h2>
          <p className="text-gray-400 text-sm mt-4">
            Have a project in mind or want to collaborate? Send me a message.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-extrabold text-black mb-1">Send a Message</h3>
              <p className="text-xs text-gray-400 mb-6 shrink-0">I usually respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors shrink-0"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors shrink-0"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors shrink-0"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors resize-none"
                ></textarea>
                <div className="pt-2 shrink-0">
                  <button
                    disabled={status === 'loading'}
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                      status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 
                      status === 'error' ? 'bg-red-600 hover:bg-red-700 text-white' :
                      status === 'loading' ? 'bg-gray-400 cursor-not-allowed text-white' :
                      'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {status === 'loading' ? 'Sending...' : 
                     status === 'success' ? 'Message Sent Successfully! ✅' : 
                     status === 'error' ? 'Failed to send ❌' : 
                     'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
