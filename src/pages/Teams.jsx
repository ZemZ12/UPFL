import { useState } from 'react';
import { Users, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge } from '../components/animations';
import { teams, standings, teamRosters } from '../data/leagueData';

export default function Teams() {
  const [openRoster, setOpenRoster] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Users size={14} /> Season 2026
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Team Profiles</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">All six teams competing in the UPFL Summer 2026 season.</p>
        </FadeUp>
      </div>

      <StaggerList className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
        {teams.map(team => {
          const standing = standings.find(s => s.id === team.id);
          const pos = standings.findIndex(s => s.id === team.id) + 1;
          const roster = teamRosters[team.name] || [];
          const isOpen = openRoster === team.id;

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
                        className="h-14 w-14 rounded-xl bg-[#0f232a] border border-[#173040] p-1.5 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <img src={team.logo} alt={`${team.name} logo`} className="h-full w-full object-contain" />
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

                  {/* Roster dropdown */}
                  <div className="mt-5 rounded-xl border border-[#173040] overflow-hidden">
                    <button
                      onClick={() => setOpenRoster(isOpen ? null : team.id)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-[#0f232a] hover:bg-[#132c36] transition-colors text-sm font-semibold text-gray-300"
                    >
                      <span className="flex items-center gap-2">
                        <Users size={14} className="text-yellow-400" />
                        Squad ({roster.length} players)
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={16} className="text-gray-400" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="roster"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 border-t border-[#173040] bg-[#0f232a]/40 text-xs uppercase tracking-wide text-gray-500 font-semibold">
                            <div className="px-4 py-2">Name</div>
                            <div className="px-4 py-2 text-right">#</div>
                          </div>
                          <div className="divide-y divide-[#173040]/60">
                            {roster.map((player, pi) => (
                              <motion.div
                                key={`${player.name}-${player.number}-${pi}`}
                                className="grid grid-cols-2 text-sm"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: pi * 0.03, duration: 0.25 }}
                              >
                                <div className="px-4 py-2.5 text-gray-200">{player.name}</div>
                                <div className="px-4 py-2.5 text-right text-yellow-400 font-bold">{player.number}</div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
