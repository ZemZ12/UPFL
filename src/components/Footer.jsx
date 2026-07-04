import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060f14] border-t border-[#173040] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <img src="/upfl.png" alt="UPFL Logo" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ummah Premier Futsal League - Ummah premier indoor futsal competition.
              Uniting the community through the beautiful game.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-yellow-400" /> Cleveland Sports Arena, Cleveland, OH</span>
              <span className="flex items-center gap-2"><Mail size={14} className="text-yellow-400" /> ummahpremierfutsalleague@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={14} className="text-yellow-400" /> (216) 555-0192</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">League</h4>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/fixtures', 'Fixtures'], ['/table', 'League Table'], ['/stats', 'Player Stats'], ['/teams', 'Teams']].map(([to, label]) => (
                <Link key={to} to={to} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Info</h4>
            <div className="flex flex-col gap-2">
              {[['/rules', 'League Rules'], ['/register', 'Register'], ['/news', 'News'], ['/sponsors', 'Sponsors'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#173040] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">Â© 2026 Ummah Premier Futsal League. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Ummah Community</p>
        </div>
      </div>
    </footer>
  );
}
