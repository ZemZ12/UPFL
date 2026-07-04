import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge, CountUp } from '../components/animations';
import { fixtures } from '../data/leagueData';

function FixtureCard({ fixture, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 4 }}
      className={`bg-[#0b1c1f] border rounded-xl p-5 ${fixture.played ? 'border-[#173040]' : 'border-[#1e4258] hover:border-yellow-500/40'} transition-all cursor-default`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-yellow-400 font-medium">{fixture.date} &middot; {fixture.time}</span>
        <span className="text-xs text-gray-500 bg-[#0f232a] px-2.5 py-0.5 rounded-full">{fixture.venue}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-white font-bold text-sm md:text-base flex-1">{fixture.home}</span>
        {fixture.played ? (
          <span className="bg-yellow-500/20 text-yellow-300 text-xl font-black px-5 py-1.5 rounded-xl shrink-0">
            {fixture.homeScore} - {fixture.awayScore}
          </span>
        ) : (
          <span className="bg-[#0f232a] text-gray-400 text-sm font-bold px-5 py-1.5 rounded-xl shrink-0">VS</span>
        )}
        <span className="text-white font-bold text-sm md:text-base flex-1 text-right">{fixture.away}</span>
      </div>
    </motion.div>
  );
}

export default function Fixtures() {
  const played = fixtures.filter(f => f.played);
  const upcoming = fixtures.filter(f => !f.played);

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Calendar size={14} /> Season 2026
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Fixtures & Results</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">All match schedules and results for the UPFL Summer 2026 season.</p>
        </FadeUp>
      </div>

      <FadeUp delay={0.2}>
        <div className="grid grid-cols-3 text-center gap-4 mb-12">
          {[
            { label: 'Total Matches', value: fixtures.length, color: 'text-white' },
            { label: 'Played', value: played.length, color: 'text-yellow-400' },
            { label: 'Upcoming', value: upcoming.length, color: 'text-yellow-400' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-[#0b1c1f] border border-[#173040] rounded-xl p-4"
            >
              <CountUp to={stat.value} className={`text-2xl font-black ${stat.color} block`} />
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </FadeUp>

      {upcoming.length > 0 && (
        <div className="mb-10">
          <FadeUp>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <motion.span
                className="w-2 h-2 bg-yellow-400 rounded-full inline-block"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              Upcoming Matches
            </h2>
          </FadeUp>
          <div className="flex flex-col gap-3">
            {upcoming.map((f, i) => <FixtureCard key={f.id} fixture={f} index={i} />)}
          </div>
        </div>
      )}

      <div>
        <FadeUp>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block" />
            Results
          </h2>
        </FadeUp>
        <div className="flex flex-col gap-3">
          {[...played].reverse().map((f, i) => <FixtureCard key={f.id} fixture={f} index={i} />)}
        </div>
      </div>
    </div>
  );
}
