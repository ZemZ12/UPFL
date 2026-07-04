import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, GlowBadge, CountUp } from '../components/animations';
import { playerStats } from '../data/leagueData';

export default function Stats() {
  const topScorer = playerStats[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <TrendingUp size={14} /> Season 2026
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Player Stats</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">Goals, assists, and disciplinary records for all UPFL players.</p>
        </FadeUp>
      </div>

      {/* Top Scorer Highlight */}
      <FadeUp delay={0.2}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-gradient-to-r from-yellow-900/40 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-6 mb-8 flex items-center gap-5"
        >
          <div className="bg-yellow-500/20 rounded-xl p-4 shrink-0">
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='#fbbf24'>
              <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
            </svg>
          </div>
          <div>
            <div className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">Golden Boot Leader</div>
            <div className="text-white font-black text-xl">{topScorer.name}</div>
            <div className="text-gray-400 text-sm">{topScorer.team}</div>
          </div>
          <div className="ml-auto flex gap-6 text-center">
            <div>
              <CountUp to={topScorer.goals} className="text-3xl font-black text-yellow-400 block" />
              <div className="text-gray-400 text-xs">Goals</div>
            </div>
            <div>
              <CountUp to={topScorer.assists} className="text-3xl font-black text-blue-400 block" />
              <div className="text-gray-400 text-xs">Assists</div>
            </div>
          </div>
        </motion.div>
      </FadeUp>

      {/* Stats Table */}
      <FadeUp delay={0.3}>
        <div className="bg-[#0b1c1f] border border-[#173040] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#173040]">
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Rank</th>
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Player</th>
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Team</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Goals</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Assists</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Cards</th>
                </tr>
              </thead>
              <tbody>
                {playerStats.map((p, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                    className={`border-b border-[#173040]/60 transition-colors ${i === 0 ? 'bg-yellow-500/5' : ''}`}
                  >
                    <td className="px-5 py-4">
                      <span className={`font-bold text-base ${i === 0 ? 'text-yellow-400' : i < 3 ? 'text-gray-300' : 'text-gray-500'}`}>
                        {i === 0 ? '#1' : i === 1 ? '#2' : i === 2 ? '#3' : p.rank}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-white font-semibold">{p.name}</td>
                    <td className="px-5 py-4 text-gray-400">{p.team}</td>
                    <td className="text-center px-5 py-4">
                      <span className="bg-yellow-500/20 text-yellow-400 font-bold px-3 py-0.5 rounded-full">{p.goals}</span>
                    </td>
                    <td className="text-center px-5 py-4">
                      <span className="bg-blue-500/20 text-blue-400 font-bold px-3 py-0.5 rounded-full">{p.assists}</span>
                    </td>
                    <td className="text-center px-5 py-4">
                      {p.cards > 0 ? (
                        <span className="bg-yellow-500/20 text-yellow-400 font-bold px-3 py-0.5 rounded-full">{p.cards}</span>
                      ) : (
                        <span className="text-gray-600">-</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
