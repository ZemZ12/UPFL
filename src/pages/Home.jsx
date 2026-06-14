import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, TrendingUp, ArrowRight, Star, Play } from 'lucide-react';
import { standings, fixtures, news } from '../data/leagueData';
import { highlights } from '../data/highlightsData';
import { FadeUp, StaggerList, StaggerItem, CountUp, PulseDot } from '../components/animations';

const ease = [0.22, 1, 0.36, 1];

function StatCard({ icon: Icon, value, label, color, countTo, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-[#0b1c1f] border border-[#173040] rounded-xl p-6 flex items-center gap-4"
    >
      <div className={`p-3 rounded-lg ${color} shrink-0`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">
          {countTo ? <CountUp to={countTo} /> : value}
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const upcoming = fixtures.filter(f => !f.played).slice(0, 3);
  const recent = fixtures.filter(f => f.played).slice(-2);
  const latestNews = news.slice(0, 3);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-[#060f14] to-[#060f14]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(202,138,4,0.14) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(59,130,246,0.08) 0%, transparent 40%),
                            radial-gradient(circle at 50% 80%, rgba(22,163,74,0.06) 0%, transparent 40%)`,
        }} />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-24 right-16 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-8"
          >
            <PulseDot /> Summer 2025 Season — Now Live!
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            Ummah's Premier<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
            >
              Futsal League
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            Fast-paced, skill-first, community-driven indoor futsal in Cleveland, Ohio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
          >
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
              <Link to="/register" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-xl transition-colors flex items-center gap-2">
                Register Your Team <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/fixtures" className="border border-[#173040] hover:border-yellow-500/40 text-white font-medium px-8 py-3.5 rounded-xl transition-all hover:bg-white/5">
                View Fixtures
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-yellow-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* ── Stat Cards ── */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={Users}      value="8"    countTo={8}   label="Teams"          color="bg-green-700"  delay={0} />
            <StatCard icon={Calendar}   value="11"   countTo={11}  label="Matches Played" color="bg-blue-600"   delay={0.08} />
            <StatCard icon={Trophy}     value="2025" countTo={null} label="Season"         color="bg-yellow-600" delay={0.16} />
            <StatCard icon={TrendingUp} value="148"  countTo={148} label="Goals Scored"   color="bg-purple-700" delay={0.24} />
          </div>
        </section>

        {/* ── Fixtures & Standings ── */}
        <section className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fixtures */}
          <div>
            <FadeUp>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-white">Upcoming Fixtures</h2>
                <Link to="/fixtures" className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center gap-1 transition-colors">
                  All fixtures <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
            <StaggerList className="flex flex-col gap-3">
              {upcoming.map(f => (
                <StaggerItem key={f.id}>
                  <motion.div
                    whileHover={{ x: 4, borderColor: 'rgba(234,179,8,0.4)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-[#0b1c1f] border border-[#173040] rounded-xl p-4"
                  >
                    <div className="text-xs text-yellow-400 mb-2 font-medium">{f.date} · {f.time} · {f.venue}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-sm">{f.home}</span>
                      <span className="bg-[#0f232a] text-gray-400 text-xs px-3 py-1 rounded-full font-medium">VS</span>
                      <span className="text-white font-semibold text-sm text-right">{f.away}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerList>

            <div className="mt-6">
              <FadeUp delay={0.1}>
                <h2 className="text-xl font-bold text-white mb-4">Recent Results</h2>
              </FadeUp>
              <StaggerList className="flex flex-col gap-3">
                {recent.map(f => (
                  <StaggerItem key={f.id}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bg-[#0b1c1f] border border-[#173040] rounded-xl p-4"
                    >
                      <div className="text-xs text-gray-500 mb-2">{f.date} · {f.venue}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">{f.home}</span>
                        <span className="bg-yellow-500/20 text-yellow-400 text-lg font-black px-4 py-1 rounded-lg">
                          {f.homeScore} – {f.awayScore}
                        </span>
                        <span className="text-white font-semibold text-sm text-right">{f.away}</span>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </div>
          </div>

          {/* League Table */}
          <FadeUp delay={0.1}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-white">League Table</h2>
              <Link to="/table" className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center gap-1 transition-colors">
                Full table <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-[#0b1c1f] border border-[#173040] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#173040]">
                    {['#','Team','P','W','D','L','GD','Pts'].map(h => (
                      <th key={h} className={`py-3 text-gray-400 font-medium text-xs uppercase tracking-wide ${h === 'Team' ? 'text-left px-4' : 'text-center px-2'}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team, i) => (
                    <motion.tr
                      key={team.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.35, ease }}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                      className={`border-b border-[#173040]/50 ${i === 0 ? 'bg-yellow-500/5' : ''}`}
                    >
                      <td className="px-2 py-3 text-center">
                        <span className={`font-bold text-sm ${i === 0 ? 'text-yellow-400' : i < 3 ? 'text-blue-400' : 'text-gray-500'}`}>{i + 1}</span>
                      </td>
                      <td className="px-4 py-3 text-left">
                        <span className="mr-2">{team.logo}</span>
                        <span className="text-white font-medium">{team.name}</span>
                      </td>
                      <td className="text-center px-2 py-3 text-gray-300">{team.played}</td>
                      <td className="text-center px-2 py-3 text-green-400 font-medium">{team.wins}</td>
                      <td className="text-center px-2 py-3 text-gray-300">{team.draws}</td>
                      <td className="text-center px-2 py-3 text-red-400">{team.losses}</td>
                      <td className="text-center px-2 py-3">
                        <span className={team.gd > 0 ? 'text-green-400' : team.gd < 0 ? 'text-red-400' : 'text-gray-400'}>
                          {team.gd > 0 ? `+${team.gd}` : team.gd}
                        </span>
                      </td>
                      <td className="text-center px-2 py-3 font-black text-white">{team.points}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </section>

        {/* ── Highlights ── */}
        <section className="py-12">
          <FadeUp>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Play size={20} className="text-yellow-400" /> Match Highlights
              </h2>
              <Link to="/highlights" className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center gap-1 transition-colors">
                All highlights <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
          <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map(h => (
              <StaggerItem key={h.id}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                  <Link to="/highlights" className={`group relative bg-gradient-to-br ${h.gradientFrom} ${h.gradientTo} rounded-2xl overflow-hidden border border-[#173040] hover:border-yellow-500/40 transition-colors h-44 flex items-center justify-center block`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20 select-none">{h.thumbnail}</div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="bg-yellow-500/90 text-black rounded-full p-3 shadow-lg"
                      >
                        <Play size={18} fill="black" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-bold text-sm leading-tight">{h.title}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-yellow-400 font-black text-sm">{h.score}</span>
                        <span className="text-gray-300 text-xs">{h.duration}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerList>
        </section>

        {/* ── News ── */}
        <section className="py-12">
          <FadeUp>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Latest News</h2>
              <Link to="/news" className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center gap-1 transition-colors">
                All news <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
          <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestNews.map(item => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  className="bg-[#0b1c1f] border border-[#173040] rounded-xl overflow-hidden hover:border-yellow-500/40 transition-colors group h-full"
                >
                  <div className="bg-gradient-to-br from-[#0f232a] to-[#0b1c1f] h-36 flex items-center justify-center text-5xl">
                    {item.image}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-yellow-500/15 text-yellow-400 px-2.5 py-0.5 rounded-full font-medium">{item.category}</span>
                      <span className="text-gray-500 text-xs">{item.date}</span>
                    </div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.excerpt}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerList>
        </section>

        {/* ── CTA ── */}
        <FadeUp className="py-12 mb-4">
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="bg-gradient-to-r from-yellow-900/30 to-blue-900/20 border border-yellow-500/20 rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl font-black text-white mb-3">Ready to Compete?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Join the Ummah Premier Futsal League and showcase your skills against the best teams in the community.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                <Link to="/register" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl transition-colors inline-block">
                  Register Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link to="/contact" className="border border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 font-medium px-8 py-3 rounded-xl transition-all inline-block">
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </div>
  );
}
