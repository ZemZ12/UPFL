import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge } from '../components/animations';
import { teams, standings } from '../data/leagueData';

export default function Teams() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Users size={14} /> Season 2025
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Team Profiles</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">All eight teams competing in the UPFL Summer 2025 season.</p>
        </FadeUp>
      </div>

      <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
        {teams.map(team => {
          const standing = standings.find(s => s.id === team.id);
          const pos = standings.findIndex(s => s.id === team.id) + 1;
          return (
            <StaggerItem key={team.id}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="bg-[#0b1c1f] border border-[#173040] hover:border-yellow-500/40 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <motion.div
                  className={`bg-gradient-to-r ${team.color} h-2`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'left' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="text-5xl"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {team.logo}
                      </motion.div>
                      <div>
                        <h2 className="text-white font-black text-lg group-hover:text-yellow-400 transition-colors">{team.name}</h2>
                        <div className="text-gray-400 text-sm">Cleveland, Ohio</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-black ${pos === 1 ? 'text-yellow-400' : pos <= 3 ? 'text-blue-400' : 'text-gray-400'}`}>
                        #{pos}
                      </div>
                      <div className="text-gray-500 text-xs">Position</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {[
                      { label: 'Points', value: standing.points, color: 'text-white' },
                      { label: 'Wins', value: standing.wins, color: 'text-yellow-400' },
                      { label: 'Draws', value: standing.draws, color: 'text-gray-300' },
                      { label: 'Losses', value: standing.losses, color: 'text-red-400' },
                    ].map((stat, si) => (
                      <motion.div
                        key={stat.label}
                        className="bg-[#0f232a]/60 rounded-xl p-3 text-center"
                        whileHover={{ backgroundColor: 'rgba(15,35,42,0.9)' }}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.06, duration: 0.35 }}
                      >
                        <div className={`text-xl font-black ${stat.color}`}>{stat.value}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                    <span>GF: <span className="text-white font-medium">{standing.gf}</span></span>
                    <span>GA: <span className="text-white font-medium">{standing.ga}</span></span>
                    <span>GD: <span className={`font-medium ${standing.gd > 0 ? 'text-yellow-400' : 'text-red-400'}`}>{standing.gd > 0 ? `+${standing.gd}` : standing.gd}</span></span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </div>
  );
}
