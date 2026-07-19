import { Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge } from '../components/animations';
import { sponsors } from '../data/leagueData';

const tierConfig = {
  Gold: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/40', badge: 'bg-yellow-500 text-black', label: 'Gold Sponsors', color: 'text-yellow-400' },
  Silver: { bg: 'bg-gray-500/10', border: 'border-gray-500/40', badge: 'bg-gray-400 text-black', label: 'Silver Sponsors', color: 'text-gray-300' },
  Bronze: { bg: 'bg-orange-900/20', border: 'border-orange-700/40', badge: 'bg-orange-700 text-white', label: 'Bronze Sponsors', color: 'text-orange-500' },
};

function SponsorCard({ sponsor, index }) {
  const cfg = tierConfig[sponsor.tier];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, y: -4 }}
      className={`${cfg.bg} border ${cfg.border} rounded-2xl p-8 flex flex-col items-center text-center cursor-default`}
    >
      <div className="text-4xl mb-3">{sponsor.tier === 'Gold' ? 'G' : sponsor.tier === 'Silver' ? 'S' : 'B'}</div>
      <h3 className="text-white font-black text-xl mb-1">{sponsor.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{sponsor.description}</p>
      <span className={`${cfg.badge} text-xs font-bold px-3 py-1 rounded-full`}>{sponsor.tier} Sponsor</span>
    </motion.div>
  );
}

function TierSection({ tier, list }) {
  const cfg = tierConfig[tier];
  if (!list.length) return null;
  return (
    <div className="mb-10">
      <FadeUp>
        <h2 className={`text-center ${cfg.color} font-bold uppercase tracking-widest text-sm mb-5`}>{cfg.label}</h2>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {list.map((s, i) => <SponsorCard key={i} sponsor={s} index={i} />)}
      </div>
    </div>
  );
}

export default function Sponsors() {
  const gold = sponsors.filter(s => s.tier === 'Gold');
  const silver = sponsors.filter(s => s.tier === 'Silver');
  const bronze = sponsors.filter(s => s.tier === 'Bronze');

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Star size={14} /> Partners
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Sponsors</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400 max-w-xl mx-auto">
            UPFL is made possible by the generous support of our sponsors. Thank you for investing in Ummah futsal community.
          </p>
        </FadeUp>
      </div>

      <FadeUp delay={0.2}>
        <div className="bg-[#0b1c1f] border border-yellow-500/20 rounded-2xl p-14 text-center mb-10">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-white font-black text-2xl mb-2">Sponsors — To Be Announced</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Our sponsor lineup for Season 1 is being finalized. Stay tuned for exciting partnerships coming soon.
          </p>
        </div>
      </FadeUp>

      {/* Become Sponsor */}
      <FadeUp delay={0.1}>
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="bg-gradient-to-r from-yellow-900/30 to-yellow-900/20 border border-yellow-500/20 rounded-2xl p-10 text-center"
        >
          <Heart size={32} className="text-yellow-400 mx-auto mb-4" />
          <h2 className="text-white font-black text-2xl mb-3">Become a Sponsor</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Support Ummah growing futsal community and get your brand in front of hundreds of passionate local sports fans every week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-sm">
            {[
              { label: 'Gold - $1,500', desc: 'Logo on jerseys, banners, website', color: 'text-yellow-400' },
              { label: 'Silver - $800', desc: 'Website listing & social media', color: 'text-gray-300' },
              { label: 'Bronze - $400', desc: 'Website listing & match day mentions', color: 'text-orange-500' },
            ].map((tier, i) => (
              <motion.div
                key={tier.label}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-[#0b1c1f]/80 rounded-xl p-4"
              >
                <div className={`${tier.color} font-black text-lg mb-1`}>{tier.label}</div>
                <div className="text-gray-400">{tier.desc}</div>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Get Sponsorship Info
          </motion.a>
        </motion.div>
      </FadeUp>
    </div>
  );
}
