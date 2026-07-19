import { useState } from 'react';
import { Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge } from '../components/animations';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ummahpremierfutsalleague@gmail.com', color: 'text-blue-400' },
  { icon: Clock, label: 'Office Hours', value: 'Mon-Fri: 9am - 6pm\nSat: 10am - 2pm', color: 'text-yellow-400' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Mail size={14} /> Get In Touch
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Contact Us</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">Have questions about UPFL? We're here to help.</p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Info */}
        <StaggerList className="lg:col-span-2 flex flex-col gap-5" stagger={0.09}>
          {contactInfo.map(({ icon: Icon, label, value, color }) => (
            <StaggerItem key={label}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-[#0b1c1f] border border-[#173040] rounded-xl p-5 flex items-start gap-4"
              >
                <div className={`${color} bg-[#0f232a] p-2.5 rounded-lg shrink-0`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">{label}</div>
                  <div className="text-white text-sm whitespace-pre-line">{value}</div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}

          <StaggerItem>
            <a
              href="https://instagram.com/_upfl_"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-[#0b1c1f] border border-[#173040] hover:border-pink-500/40 rounded-xl p-5 flex items-center gap-4 transition-colors group"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2.5 rounded-lg shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">Follow Us</div>
                  <div className="text-white text-sm font-semibold group-hover:text-pink-400 transition-colors">@_upfl_</div>
                </div>
              </motion.div>
            </a>
          </StaggerItem>
        </StaggerList>

        {/* Form */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 250, damping: 18 }}
                >
                  <CheckCircle size={52} className="text-yellow-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
                <p className="text-gray-400">Thanks, <span className="text-yellow-400">{form.name}</span>! We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-2 text-sm text-yellow-400 hover:underline">Send another message</button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onSubmit={handleSubmit}
                className="bg-[#0b1c1f] border border-[#173040] rounded-2xl p-7 flex flex-col gap-5"
              >
                <h2 className="text-white font-bold text-lg flex items-center gap-2">
                  <Send size={18} className="text-yellow-400" /> Send a Message
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Your Name *</label>
                    <input
                      type="text" required value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="John Smith"
                      className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Email *</label>
                    <input
                      type="email" required value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="you@email.com"
                      className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Subject *</label>
                  <select
                    required value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option>Team Registration</option>
                    <option>Sponsorship Inquiry</option>
                    <option>General Question</option>
                    <option>Rules &amp; Disputes</option>
                    <option>Media &amp; Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">Message *</label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Write your message here..."
                    className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-gray-500 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
