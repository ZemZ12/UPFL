import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge } from '../components/animations';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Cleveland Sports Arena\n123 Lakeside Ave\nCleveland, OH 44114', color: 'text-yellow-400' },
  { icon: Mail, label: 'Email', value: 'ummahpremierfutsalleague@gmail.com', color: 'text-blue-400' },
  { icon: Phone, label: 'Phone', value: '(216) 555-0192', color: 'text-purple-400' },
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
            <div className="bg-[#0b1c1f] border border-[#173040] rounded-xl p-5">
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-3">Find Us</div>
              <div className="bg-[#0f232a] rounded-lg h-36 flex items-center justify-center text-gray-500 text-sm">
                Cleveland Sports Arena, OH 44114
              </div>
            </div>
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
