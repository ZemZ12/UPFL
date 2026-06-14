import { Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerList, StaggerItem, GlowBadge } from '../components/animations';
import { news } from '../data/leagueData';

export default function News() {
  const [featured, ...rest] = news;

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <GlowBadge>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-4">
            <Newspaper size={14} /> Latest Updates
          </div>
        </GlowBadge>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">News & Announcements</h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-gray-400">Stay up to date with everything happening in the UPFL.</p>
        </FadeUp>
      </div>

      {/* Featured */}
      <FadeUp delay={0.2}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="bg-[#0b1c1f] border border-yellow-500/30 rounded-2xl overflow-hidden mb-8 group hover:border-yellow-500/60 transition-all cursor-pointer"
        >
          <div className="bg-gradient-to-br from-yellow-900/30 to-gray-900 h-52 flex items-center justify-center text-8xl">
            {featured.image}
          </div>
          <div className="p-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">{featured.category}</span>
              <span className="text-gray-500 text-sm">{featured.date}</span>
              <span className="bg-[#0f232a] text-gray-400 text-xs px-2 py-0.5 rounded-full">Featured</span>
            </div>
            <h2 className="text-white font-black text-2xl mb-3 group-hover:text-yellow-400 transition-colors">{featured.title}</h2>
            <p className="text-gray-400 leading-relaxed">{featured.excerpt}</p>
          </div>
        </motion.div>
      </FadeUp>

      {/* Rest */}
      <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.09}>
        {rest.map(item => (
          <StaggerItem key={item.id}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="bg-[#0b1c1f] border border-[#173040] rounded-xl overflow-hidden hover:border-yellow-500/40 transition-all group cursor-pointer h-full"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-36 flex items-center justify-center text-5xl">
                {item.image}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs bg-yellow-500/15 text-yellow-400 px-2.5 py-0.5 rounded-full font-medium">{item.category}</span>
                  <span className="text-gray-500 text-xs">{item.date}</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-sm leading-tight group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{item.excerpt}</p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerList>

      {/* Newsletter */}
      <FadeUp delay={0.1}>
        <div className="mt-12 bg-[#0b1c1f] border border-[#173040] rounded-2xl p-8 text-center">
          <h2 className="text-white font-bold text-xl mb-2">Stay in the Loop</h2>
          <p className="text-gray-400 text-sm mb-5">Get UPFL news, results, and announcements straight to your inbox.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#0f232a] border border-[#1e4258] text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-gray-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shrink-0"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
