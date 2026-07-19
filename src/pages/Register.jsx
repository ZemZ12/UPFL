import { useState } from 'react';
import { ClipboardList, Download, CheckCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, SlideIn, GlowBadge } from '../components/animations';

export default function Register() {
  const [form, setForm] = useState({
    teamName: '', captainName: '', email: '', phone: '',
    players: '', division: '', shirtColor: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waiverSigned, setWaiverSigned] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('https://formspree.io/f/mgogywwb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <div className="text-center mb-10">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <ClipboardList size={14} /> Season 2026
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Team Registration</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">Register your team for the UPFL Summer 2026 season. Registration closes June 30, 2026.</p>
        </FadeUp>
      </div>

      {/* Waiver Section */}
      <SlideIn delay={0.2}>
        <div className="bg-[#0b1c1f] border border-[#173040] rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-500/20 p-3 rounded-xl shrink-0">
              <FileText size={22} className="text-yellow-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-white font-bold text-lg mb-1">Player Waiver & Liability Release</h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                All players must sign the UPFL Liability Waiver before participating. Download the waiver, print it, have all players sign, and bring it to your first match.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="/waiver.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  <Download size={16} /> Download Waiver (PDF)
                </motion.a>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={waiverSigned}
                    onChange={e => setWaiverSigned(e.target.checked)}
                    className="accent-yellow-500 w-4 h-4"
                  />
                  I acknowledge all players will sign the waiver
                </label>
              </div>
            </div>
          </div>
        </div>
      </SlideIn>

      {/* Registration Form */}
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
            >
              <CheckCircle size={48} className="text-yellow-400 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-2">Registration Submitted!</h2>
            <p className="text-gray-400">
              Thank you, <span className="text-yellow-400">{form.teamName}</span>! We'll review your registration and contact <span className="text-yellow-400">{form.email}</span> within 2 business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="bg-[#0b1c1f] border border-[#173040] rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <ClipboardList size={20} className="text-yellow-400" /> Team Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: 'Team Name *', name: 'teamName', type: 'text', placeholder: 'e.g. Heavy Breathers', col: 2 },
                { label: 'Captain Name *', name: 'captainName', type: 'text', placeholder: 'Full name', col: 1 },
                { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '(216) 555-0000', col: 1 },
                { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'captain@email.com', col: 2 },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  className={field.col === 2 ? 'md:col-span-2' : ''}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.38 }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-1.5">{field.label}</label>
                  <input
                    type={field.type} name={field.name} value={form[field.name]}
                    onChange={handleChange} required placeholder={field.placeholder}
                    className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-gray-500"
                  />
                </motion.div>
              ))}

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Number of Players *</label>
                <select
                  name="players" value={form.players} onChange={handleChange} required
                  className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option value="">Select...</option>
                  {[5,6,7,8,9,10,11,12].map(n => <option key={n} value={n}>{n} players</option>)}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Division *</label>
                <select
                  name="division" value={form.division} onChange={handleChange} required
                  className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="competitive">Competitive</option>
                  <option value="recreational">Recreational</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Preferred Shirt Color</label>
                <input
                  type="text" name="shirtColor" value={form.shirtColor} onChange={handleChange}
                  placeholder="e.g. Red and Black"
                  className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-gray-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Additional Notes</label>
                <textarea
                  name="notes" value={form.notes} onChange={handleChange} rows={3}
                  placeholder="Any questions or special requests..."
                  className="w-full bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-gray-500 resize-none"
                />
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-300">
              Registration fee: <strong className="text-white">$1,000/team</strong> &mdash; payable upon confirmation. Payment details will be sent via email.
            </div>

            <motion.button
              type="submit"
              disabled={!waiverSigned || loading}
              whileHover={waiverSigned ? { scale: 1.02 } : {}}
              whileTap={waiverSigned ? { scale: 0.98 } : {}}
              className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-black font-bold py-3.5 rounded-xl transition-colors"
            >
              {loading ? 'Submitting...' : waiverSigned ? 'Submit Registration' : 'Acknowledge Waiver to Continue'}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
