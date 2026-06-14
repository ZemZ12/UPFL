export const teams = [
  { id: 1, name: "Cleveland Cobras", logo: "🐍", wins: 8, draws: 2, losses: 1, gf: 42, ga: 18, color: "from-yellow-500 to-yellow-700" },
  { id: 2, name: "Lake Erie FC", logo: "🌊", wins: 7, draws: 2, losses: 2, gf: 38, ga: 22, color: "from-blue-500 to-blue-700" },
  { id: 3, name: "Rock City United", logo: "🎸", wins: 6, draws: 3, losses: 2, gf: 33, ga: 20, color: "from-red-500 to-red-700" },
  { id: 4, name: "Buckeye Ballers", logo: "🌰", wins: 5, draws: 3, losses: 3, gf: 29, ga: 25, color: "from-green-500 to-green-700" },
  { id: 5, name: "Steel City Strikers", logo: "⚡", wins: 4, draws: 4, losses: 3, gf: 26, ga: 24, color: "from-purple-500 to-purple-700" },
  { id: 6, name: "North Coast Ninjas", logo: "🥷", wins: 3, draws: 2, losses: 6, gf: 21, ga: 32, color: "from-orange-500 to-orange-700" },
  { id: 7, name: "Forest City Wolves", logo: "🐺", wins: 2, draws: 3, losses: 6, gf: 17, ga: 35, color: "from-teal-500 to-teal-700" },
  { id: 8, name: "Ohio Outlaws", logo: "🤠", wins: 1, draws: 1, losses: 9, gf: 12, ga: 44, color: "from-pink-500 to-pink-700" },
];

export const standings = teams.map(t => ({
  ...t,
  played: t.wins + t.draws + t.losses,
  points: t.wins * 3 + t.draws,
  gd: t.gf - t.ga,
})).sort((a, b) => b.points - a.points || b.gd - a.gd);

export const fixtures = [
  { id: 1, date: "2025-07-05", time: "6:00 PM", home: "Cleveland Cobras", away: "Lake Erie FC", homeScore: 4, awayScore: 2, played: true, venue: "Cleveland Sports Arena" },
  { id: 2, date: "2025-07-05", time: "7:30 PM", home: "Rock City United", away: "Buckeye Ballers", homeScore: 2, awayScore: 2, played: true, venue: "Cleveland Sports Arena" },
  { id: 3, date: "2025-07-12", time: "6:00 PM", home: "Steel City Strikers", away: "North Coast Ninjas", homeScore: 3, awayScore: 1, played: true, venue: "East Side Futsal Center" },
  { id: 4, date: "2025-07-19", time: "6:00 PM", home: "Lake Erie FC", away: "Buckeye Ballers", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
  { id: 5, date: "2025-07-19", time: "7:30 PM", home: "Cleveland Cobras", away: "Rock City United", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
  { id: 6, date: "2025-07-26", time: "6:00 PM", home: "Ohio Outlaws", away: "Forest City Wolves", homeScore: null, awayScore: null, played: false, venue: "West Side Arena" },
  { id: 7, date: "2025-08-02", time: "6:00 PM", home: "North Coast Ninjas", away: "Cleveland Cobras", homeScore: null, awayScore: null, played: false, venue: "East Side Futsal Center" },
  { id: 8, date: "2025-08-09", time: "7:30 PM", home: "Buckeye Ballers", away: "Steel City Strikers", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
];

export const playerStats = [
  { rank: 1, name: "Marcus Rivera", team: "Cleveland Cobras", goals: 14, assists: 6, cards: 1 },
  { rank: 2, name: "Jamal Thompson", team: "Lake Erie FC", goals: 11, assists: 8, cards: 0 },
  { rank: 3, name: "Diego Santos", team: "Rock City United", goals: 10, assists: 4, cards: 2 },
  { rank: 4, name: "Kevin O'Brien", team: "Buckeye Ballers", goals: 9, assists: 7, cards: 1 },
  { rank: 5, name: "Antoine Dubois", team: "Steel City Strikers", goals: 8, assists: 5, cards: 3 },
  { rank: 6, name: "Luis Hernandez", team: "North Coast Ninjas", goals: 7, assists: 9, cards: 0 },
  { rank: 7, name: "Tyler Johnson", team: "Cleveland Cobras", goals: 7, assists: 3, cards: 1 },
  { rank: 8, name: "Carlos Mendoza", team: "Forest City Wolves", goals: 6, assists: 2, cards: 4 },
  { rank: 9, name: "Brendan Walsh", team: "Ohio Outlaws", goals: 5, assists: 1, cards: 2 },
  { rank: 10, name: "Kwame Asante", team: "Lake Erie FC", goals: 5, assists: 6, cards: 0 },
];

export const news = [
  {
    id: 1,
    title: "Summer 2025 Season Kicks Off This July!",
    date: "June 10, 2025",
    category: "Announcement",
    excerpt: "The UPFL Summer 2025 season is officially here. Eight teams will battle it out over 8 weeks for the championship trophy. Registration closes June 30.",
    image: "⚽",
  },
  {
    id: 2,
    title: "New Venue Confirmed: East Side Futsal Center",
    date: "June 5, 2025",
    category: "News",
    excerpt: "We're excited to announce a partnership with East Side Futsal Center, adding a second match venue for the upcoming season with state-of-the-art facilities.",
    image: "🏟️",
  },
  {
    id: 3,
    title: "Cleveland Cobras Dominate Opening Night",
    date: "July 5, 2025",
    category: "Match Report",
    excerpt: "Marcus Rivera bagged a hat-trick as Cleveland Cobras crushed Lake Erie FC 4-2 in a thrilling opening night clash. The Cobras look like title contenders.",
    image: "🏆",
  },
  {
    id: 4,
    title: "Player of the Month: Marcus Rivera",
    date: "July 8, 2025",
    category: "Award",
    excerpt: "Cleveland Cobras striker Marcus Rivera has been voted Player of the Month for July, leading the golden boot race with 14 goals in just 6 matches.",
    image: "⭐",
  },
];

export const sponsors = [
  { name: "Cleveland Kicks", tier: "Gold", description: "Official Kit Supplier" },
  { name: "Lake Shore Fitness", tier: "Gold", description: "Official Gym Partner" },
  { name: "Ohio Sports Drinks", tier: "Silver", description: "Official Hydration Partner" },
  { name: "North East Printing", tier: "Silver", description: "Media & Print Partner" },
  { name: "Buckeye Physio", tier: "Bronze", description: "Official Medical Partner" },
  { name: "CLE Pizza Co.", tier: "Bronze", description: "Official Catering Partner" },
];

export const rules = [
  {
    section: "Team Composition",
    items: [
      "Each team must have 5 players on the court at all times (including goalkeeper).",
      "Teams may register a maximum of 12 players per squad.",
      "A minimum of 4 players is required to start a match.",
      "Players must be 16 years of age or older.",
      "Each player must sign a waiver before participating.",
    ],
  },
  {
    section: "Match Rules",
    items: [
      "Matches consist of two 20-minute halves with a 5-minute half-time break.",
      "Rolling substitutions are allowed - no limit on the number of substitutions.",
      "Kick-ins replace throw-ins. The ball must be placed on or behind the sideline.",
      "The goalkeeper may not handle back passes played intentionally with the foot.",
      "There is no offside rule in futsal.",
    ],
  },
  {
    section: "Fouls & Discipline",
    items: [
      "Accumulated fouls: after the 5th team foul per half, a direct free kick is awarded from the second penalty spot.",
      "Yellow card: caution. Two yellow cards in one match result in a red card and one-match suspension.",
      "Red card: immediate dismissal and minimum one-match ban.",
      "Violent conduct may result in a multi-match ban at the league's discretion.",
      "Dissent towards referees will be dealt with strictly.",
    ],
  },
  {
    section: "Scoring & Standings",
    items: [
      "Win = 3 points, Draw = 1 point, Loss = 0 points.",
      "Tiebreakers (in order): goal difference, goals scored, head-to-head record.",
      "Results are final unless a formal protest is submitted within 24 hours.",
      "All goals and assists are recorded for the player stats leaderboard.",
    ],
  },
  {
    section: "General Conduct",
    items: [
      "All players and spectators must conduct themselves with respect.",
      "Teams are responsible for the behavior of their supporters.",
      "Alcohol and smoking are prohibited inside the venue.",
      "Teams must arrive at least 15 minutes before kickoff.",
      "Shin guards are mandatory for all outfield players.",
    ],
  },
];
