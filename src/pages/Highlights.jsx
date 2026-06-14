import { useState } from 'react';
import { Play, Clock, Eye, Zap, TrendingUp, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge } from '../components/animations';
import { highlights, topPlays } from '../data/highlightsData';

const playTypeColor = {
  goal: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  card: 'bg-red-500/20 text-red-400 border-red-500/30',
  assist: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

const playTypeIcon = { goal: '⚽', card: '🟨', assist: '🎯' };

function VideoCard({ match, onClick, featured = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.48, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(match)}
      className={`group cursor-pointer bg-[#0b1c1f] border border-[#173040] hover:border-yellow-500/40 rounded-2xl overflow-hidden transition-colors ${featured ? 'md:col-span-2' : ''}`}
    >
      {/* Thumbnail */}
      <div className={`relative bg-gradient-to-br ${match.gradientFrom} ${match.gradientTo} flex items-center justify-center ${featured ? 'h-64' : 'h-44'}`}>
        <div className="text-7xl opacity-30 select-none">{match.thumbnail}</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="bg-yellow-500 group-hover:bg-yellow-400 text-black rounded-full p-4 shadow-2xl transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
          >
            <Play size={featured ? 28 : 22} fill="black" />
          </motion.div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-mono flex items-center gap-1">
          <Clock size={10} /> {match.duration}
        </div>
        {featured && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Zap size={11} /> Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`text-white font-bold group-hover:text-yellow-400 transition-colors leading-tight ${featured ? 'text-lg' : 'text-sm'}`}>
            {match.title}
          </h3>
          <span className="bg-yellow-500/20 text-yellow-400 font-black text-sm px-3 py-0.5 rounded-lg shrink-0">
            {match.score}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{match.date} &middot; {match.venue}</span>
          <span className="flex items-center gap-1"><Eye size={11} /> {match.views}</span>
        </div>
      </div>
    </motion.div>
  );
}

function MatchModal({ match, onClose }) {
  if (!match) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#0b1c1f] border border-[#173040] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
        onClick={e => e.stopPropagation()}
      >
        <div className={`relative bg-gradient-to-br ${match.gradientFrom} ${match.gradientTo} h-56 flex items-center justify-center`}>
          <div className="text-8xl opacity-20 select-none">{match.thumbnail}</div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="bg-yellow-500 text-black rounded-full p-5 shadow-2xl">
              <Play size={32} fill="black" />
            </div>
            <p className="text-white/60 text-sm">Highlight reel coming soon</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h2 className="text-white font-black text-xl">{match.title}</h2>
              <p className="text-gray-400 text-sm mt-0.5">{match.date} &middot; {match.venue}</p>
            </div>
            <span className="bg-yellow-500/20 text-yellow-400 font-black text-xl px-4 py-1 rounded-xl shrink-0">
              {match.score}
            </span>
          </div>

          <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
            <Zap size={14} /> Key Plays
          </h3>

          <div className="flex flex-col gap-2">
            {match.keyPlays.map((play, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 bg-[#0f232a] border border-[#173040] rounded-xl p-3"
              >
                <div className="bg-[#173040] text-gray-300 text-xs font-bold px-2 py-1 rounded-lg shrink-0 min-w-[42px] text-center">
                  {play.minute}'
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${playTypeColor[play.type]}`}>
                      {playTypeIcon[play.type]} {play.type.charAt(0).toUpperCase() + play.type.slice(1)}
                    </span>
                    <span className="text-white text-sm font-semibold">{play.player}</span>
                    <span className="text-gray-500 text-xs">{play.team}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{play.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Highlights() {
  const [selected, setSelected] = useState(null);
  const featured = highlights.find(h => h.featured);
  const rest = highlights.filter(h => !h.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Play size={14} /> Match Highlights
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Highlights & Key Plays</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400 max-w-xl mx-auto">
            Relive the best moments from every UPFL match — goals, assists, cards, and match-winning plays.
          </p>
        </FadeUp>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {featured && <VideoCard match={featured} onClick={setSelected} featured index={0} />}
        {rest.map((m, i) => <VideoCard key={m.id} match={m} onClick={setSelected} index={i + 1} />)}
      </div>

      {/* Top Plays Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <FadeUp>
            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <TrendingUp size={20} className="text-yellow-400" /> Top Plays of the Season
            </h2>
          </FadeUp>
          <div className="flex flex-col gap-3">
            {topPlays.map((play, i) => (
              <motion.div
                key={play.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4 }}
                className="bg-[#0b1c1f] border border-[#173040] rounded-xl p-4 flex items-center gap-4 hover:border-yellow-500/30 transition-all"
              >
                <div className={`text-2xl font-black w-10 text-center shrink-0 ${
                  play.rank === 1 ? 'text-yellow-400' : play.rank === 2 ? 'text-gray-300' : play.rank === 3 ? 'text-orange-400' : 'text-gray-600'
                }`}>
                  {play.rank <= 3 ? ['#1','#2','#3'][play.rank - 1] : `#${play.rank}`}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm truncate">{play.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{play.player} &middot; {play.match} &middot; {play.minute}'</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-yellow-400 font-black text-sm">{play.votes}</div>
                  <div className="text-gray-600 text-xs">votes</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submit CTA */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <FadeUp>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap size={20} className="text-blue-400" /> Got a Clip?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-gradient-to-br from-blue-900/30 to-[#0b1c1f] border border-blue-500/20 rounded-2xl p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Filmed a great play from the stands or sideline? Submit your clip and it could be featured as the official match highlight!
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {['Goals & assists', 'Saves & blocks', 'Skill moves', 'Post-match celebrations'].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                      <ChevronRight size={14} className="text-yellow-400 shrink-0" /> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="block bg-blue-600 hover:bg-blue-500 text-white font-bold text-center py-3 rounded-xl transition-colors"
              >
                Submit a Highlight
              </motion.a>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="bg-[#0b1c1f] border border-[#173040] rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-white mb-1">{highlights.reduce((a, h) => a + h.keyPlays.length, 0)}</div>
              <div className="text-gray-400 text-sm">Key Plays Recorded</div>
              <div className="mt-3 text-3xl font-black text-yellow-400">{highlights.length}</div>
              <div className="text-gray-400 text-sm">Match Highlights</div>
            </div>
          </FadeUp>
        </div>
      </div>

      <AnimatePresence>
        {selected && <MatchModal match={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
