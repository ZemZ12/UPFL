import { Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, GlowBadge } from '../components/animations';
import { rules } from '../data/leagueData';

export default function Rules() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Shield size={14} /> Official Rulebook
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">League Rules</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400 max-w-xl mx-auto">
            All teams and players must adhere to the following rules. Ignorance of the rules is not an acceptable excuse for violations.
          </p>
        </FadeUp>
      </div>

      <div className="flex flex-col gap-6">
        {rules.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0b1c1f] border border-[#173040] rounded-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-transparent border-b border-[#173040] px-6 py-4 flex items-center gap-3">
              <motion.span
                className="bg-yellow-500 text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {i + 1}
              </motion.span>
              <h2 className="text-white font-bold text-lg">{section.section}</h2>
            </div>
            <div className="p-6 flex flex-col gap-3">
              {section.items.map((item, j) => (
                <motion.div
                  key={j}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: j * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChevronRight size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <FadeUp delay={0.1}>
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 text-center">
          <p className="text-yellow-400 font-medium text-sm">
            Rules are subject to change at the discretion of UPFL administration. Teams will be notified of any amendments via email.
          </p>
        </div>
      </FadeUp>
    </div>
  );
}
