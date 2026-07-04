import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, GlowBadge, CountUp } from '../components/animations';
import { standings } from '../data/leagueData';

export default function Table() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Trophy size={14} /> Season 2026
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">League Table</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">Live standings for the UPFL Summer 2026 season.</p>
        </FadeUp>
      </div>

      <FadeUp delay={0.2}>
        <div className="flex gap-6 justify-center text-xs text-gray-400 mb-6">
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-sm inline-block" /> Championship</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-500 rounded-sm inline-block" /> Playoffs</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-sm inline-block" /> Relegation Zone</div>
        </div>
      </FadeUp>

      <FadeUp delay={0.25}>
        <div className="bg-[#0b1c1f] border border-[#173040] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#173040] bg-[#0b1c1f]/80">
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">#</th>
                  <th className="text-left px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Team</th>
                  <th className="text-center px-3 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">P</th>
                  <th className="text-center px-3 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">W</th>
                  <th className="text-center px-3 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">D</th>
                  <th className="text-center px-3 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">L</th>
                  <th className="text-center px-3 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">GF</th>
                  <th className="text-center px-3 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">GA</th>
                  <th className="text-center px-3 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">GD</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-semibold uppercase text-xs tracking-wide">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team, i) => {
                  const posColor = i === 0
                    ? 'border-l-4 border-l-green-500 bg-yellow-500/5'
                    : i < 3
                    ? 'border-l-4 border-l-blue-500'
                    : i >= standings.length - 2
                    ? 'border-l-4 border-l-red-500/60'
                    : 'border-l-4 border-l-transparent';

                  return (
                    <motion.tr
                      key={team.id}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                      className={`border-b border-[#173040]/60 transition-colors ${posColor}`}
                    >
                      <td className="px-5 py-4">
                        <span className={`text-sm font-bold ${i === 0 ? 'text-yellow-400' : i < 3 ? 'text-blue-400' : 'text-gray-500'}`}>
                          {i + 1}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2.5">
                          <span className="h-7 w-7 rounded-md bg-[#0f232a] border border-[#173040] p-0.5 inline-flex items-center justify-center shrink-0">
                            <img src={team.logo} alt={`${team.name} logo`} className="h-full w-full object-contain" />
                          </span>
                          <span className="text-white font-semibold">{team.name}</span>
                        </div>
                      </td>
                      <td className="text-center px-3 py-4 text-gray-300">{team.played}</td>
                      <td className="text-center px-3 py-4 text-yellow-400 font-medium">{team.wins}</td>
                      <td className="text-center px-3 py-4 text-gray-300">{team.draws}</td>
                      <td className="text-center px-3 py-4 text-red-400">{team.losses}</td>
                      <td className="text-center px-3 py-4 text-gray-300">{team.gf}</td>
                      <td className="text-center px-3 py-4 text-gray-300">{team.ga}</td>
                      <td className="text-center px-3 py-4 font-medium">
                        <span className={team.gd > 0 ? 'text-yellow-400' : team.gd < 0 ? 'text-red-400' : 'text-gray-400'}>
                          {team.gd > 0 ? `+${team.gd}` : team.gd}
                        </span>
                      </td>
                      <td className="text-center px-5 py-4">
                        <span className="bg-white/10 text-white font-black px-3 py-1 rounded-lg text-base">
                          {team.points}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
