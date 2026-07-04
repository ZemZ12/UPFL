import ahlaShababLogo from '../assets/teamLogo/ahlashabab.PNG';
import xlUnitedLogo from '../assets/teamLogo/extralargeunited.PNG';
import heavyBreathersLogo from '../assets/teamLogo/heavybreathers.PNG';
import palestinoAthleticLogo from '../assets/teamLogo/palestino.PNG';
import sparrowFcLogo from '../assets/teamLogo/sparrowfc.png';
import tajLogo from '../assets/teamLogo/taj.PNG';

export const teams = [
  { id: 1, name: "Heavy Breathers", logo: heavyBreathersLogo, wins: 1, draws: 0, losses: 0, gf: 0, ga: 0, color: "from-yellow-500 to-yellow-700" },
  { id: 2, name: "Ahla Shabab", logo: ahlaShababLogo, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, color: "from-blue-500 to-blue-700" },
  { id: 3, name: "XL United", logo: xlUnitedLogo, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, color: "from-red-500 to-red-700" },
  { id: 4, name: "Palestino Athletic", logo: palestinoAthleticLogo, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, color: "from-green-500 to-green-700" },
  { id: 5, name: "Sparrow FC", logo: sparrowFcLogo, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, color: "from-teal-500 to-teal-700" },
  { id: 6, name: "TAJ", logo: tajLogo, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, color: "from-orange-500 to-orange-700" },
];

export const standings = teams.map(t => ({
  ...t,
  played: t.wins + t.draws + t.losses,
  points: t.wins * 3 + t.draws,
  gd: t.gf - t.ga,
})).sort((a, b) => b.points - a.points || b.gd - a.gd);

export const teamRosters = {
  'Heavy Breathers': [
    { name: 'Nader', size: 'XL', number: 12 },
    { name: 'Maher', size: '2XL', number: 2 },
    { name: 'Sulieman', size: 'L', number: 5 },
    { name: 'Zaid', size: 'L', number: 7 },
    { name: 'Khalid', size: 'M', number: 9 },
    { name: 'Eric', size: 'L', number: 1 },
    { name: 'Jason', size: 'L', number: 8 },
    { name: 'Abdulhadi', size: 'M', number: 3 },
  ],
  'Ahla Shabab': [
    { name: 'Rushdi', size: 'M', number: 6 },
    { name: 'Kutaibah', size: 'L', number: 7 },
    { name: 'Suhaib', size: 'M', number: 10 },
    { name: 'Buraq', size: 'L', number: 17 },
    { name: 'Ahmed', size: '2XL', number: 47 },
    { name: 'Ameer', size: 'M', number: 13 },
    { name: 'Mourane', size: 'L', number: 11 },
    { name: 'Hamza', size: 'L', number: 8 },
    { name: 'Homam', size: 'XL', number: 5 },
    { name: 'Muamer', size: 'M', number: 4 },
    { name: 'Saeid', size: 'M', number: 9 },
  ],
  'XL United': [
    { name: 'Abdullah M', size: 'L', number: 13 },
    { name: 'Mohammad W', size: 'L', number: 7 },
    { name: 'Kasem T', size: 'M', number: 9 },
    { name: 'Monaldo', size: 'L', number: 17 },
    { name: 'Yaser Y', size: '2XL', number: 3 },
    { name: 'Eamon De Leon', size: 'M', number: 33 },
    { name: 'Bashar A', size: 'L', number: 2 },
    { name: 'Jehad M', size: '2XL', number: 8 },
    { name: 'Mohammad H', size: 'L', number: 11 },
    { name: 'Alex O', size: 'M', number: 10 },
  ],
  'Palestino Athletic': [
    { name: 'Izzy', size: 'M', number: 9 },
    { name: 'Ali', size: 'L', number: 21 },
    { name: 'Ali', size: 'L', number: 8 },
    { name: 'Mushtaba', size: 'M', number: 67 },
    { name: 'Mahmoud', size: 'M', number: 18 },
    { name: 'Adnan', size: 'M', number: 7 },
    { name: 'Mohammed', size: 'L', number: 10 },
    { name: 'Ismaeel', size: 'M', number: 1 },
  ],
  'Sparrow FC': [
    { name: 'Noor', size: 'L', number: 11 },
    { name: 'Christian', size: 'L', number: 1 },
    { name: 'Ahmad', size: 'XL', number: 6 },
    { name: 'Murad', size: 'XL', number: 9 },
    { name: 'Majdi', size: 'XL', number: 19 },
    { name: 'Mamdouh', size: 'L', number: 7 },
    { name: 'Sharky', size: 'M', number: 8 },
    { name: 'Salha', size: 'L', number: 10 },
  ],
  TAJ: [
    { name: 'Abu Mustafa', size: 'XL', number: 1 },
    { name: 'Nemer', size: 'M', number: 2 },
    { name: 'Omar', size: 'M', number: 7 },
    { name: 'Nebras', size: 'XL', number: 5 },
    { name: 'Bassam', size: 'S', number: 11 },
    { name: 'Wahdan', size: 'M', number: 9 },
    { name: 'Aladin', size: 'XL', number: 10 },
    { name: 'Sohaib', size: 'XL', number: 3 },
    { name: 'Palestine', size: 'L', number: 8 },
    { name: 'Anas', size: 'M', number: 6 },
  ],
};

export const fixtures = [
  { id: 1, date: "2026-07-05", time: "6:00 PM", home: "Heavy Breathers", away: "Ahla Shabab", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
  { id: 2, date: "2026-07-05", time: "7:30 PM", home: "XL United", away: "Palestino Athletic", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
  { id: 3, date: "2026-07-12", time: "6:00 PM", home: "Sparrow FC", away: "TAJ", homeScore: null, awayScore: null, played: false, venue: "East Side Futsal Center" },
  { id: 4, date: "2026-07-19", time: "6:00 PM", home: "Ahla Shabab", away: "XL United", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
  { id: 5, date: "2026-07-19", time: "7:30 PM", home: "Palestino Athletic", away: "Heavy Breathers", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
  { id: 6, date: "2026-07-26", time: "6:00 PM", home: "TAJ", away: "Ahla Shabab", homeScore: null, awayScore: null, played: false, venue: "West Side Arena" },
  { id: 7, date: "2026-08-02", time: "6:00 PM", home: "Sparrow FC", away: "XL United", homeScore: null, awayScore: null, played: false, venue: "East Side Futsal Center" },
  { id: 8, date: "2026-08-09", time: "7:30 PM", home: "TAJ", away: "Palestino Athletic", homeScore: null, awayScore: null, played: false, venue: "Cleveland Sports Arena" },
];

export const playerStats = [
  // Heavy Breathers
  { rank: 1,  name: "Nader",         team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  { rank: 2,  name: "Maher",         team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  { rank: 3,  name: "Sulieman",      team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  { rank: 4,  name: "Zaid",          team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  { rank: 5,  name: "Khalid",        team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  { rank: 6,  name: "Eric",          team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  { rank: 7,  name: "Jason",         team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  { rank: 8,  name: "Abdulhadi",     team: "Heavy Breathers",     goals: 0, assists: 0, cards: 0 },
  // Ahla Shabab
  { rank: 9,  name: "Rushdi",        team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 10, name: "Kutaibah",      team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 11, name: "Suhaib",        team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 12, name: "Buraq",         team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 13, name: "Ahmed",         team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 14, name: "Ameer",         team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 15, name: "Mourane",       team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 16, name: "Hamza",         team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 17, name: "Homam",         team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 18, name: "Muamer",        team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  { rank: 19, name: "Saeid",         team: "Ahla Shabab",         goals: 0, assists: 0, cards: 0 },
  // XL United
  { rank: 20, name: "Abdullah M",    team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 21, name: "Mohammad W",    team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 22, name: "Kasem T",       team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 23, name: "Monaldo",       team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 24, name: "Yaser Y",       team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 25, name: "Eamon De Leon", team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 26, name: "Bashar A",      team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 27, name: "Jehad M",       team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 28, name: "Mohammad H",    team: "XL United",           goals: 0, assists: 0, cards: 0 },
  { rank: 29, name: "Alex O",        team: "XL United",           goals: 0, assists: 0, cards: 0 },
  // Palestino Athletic
  { rank: 30, name: "Izzy",          team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  { rank: 31, name: "Ali (#21)",     team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  { rank: 32, name: "Ali (#8)",      team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  { rank: 33, name: "Mushtaba",      team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  { rank: 34, name: "Mahmoud",       team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  { rank: 35, name: "Adnan",         team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  { rank: 36, name: "Mohammed",      team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  { rank: 37, name: "Ismaeel",       team: "Palestino Athletic",  goals: 0, assists: 0, cards: 0 },
  // Sparrow FC
  { rank: 38, name: "Noor",          team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  { rank: 39, name: "Christian",     team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  { rank: 40, name: "Ahmad",         team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  { rank: 41, name: "Murad",         team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  { rank: 42, name: "Majdi",         team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  { rank: 43, name: "Mamdouh",       team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  { rank: 44, name: "Sharky",        team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  { rank: 45, name: "Salha",         team: "Sparrow FC",          goals: 0, assists: 0, cards: 0 },
  // TAJ
  { rank: 46, name: "Abu Mustafa",   team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 47, name: "Nemer",         team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 48, name: "Omar",          team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 49, name: "Nebras",        team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 50, name: "Bassam",        team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 51, name: "Wahdan",        team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 52, name: "Aladin",        team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 53, name: "Sohaib",        team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 54, name: "Palestine",     team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
  { rank: 55, name: "Anas",          team: "TAJ",                 goals: 0, assists: 0, cards: 0 },
];

export const news = [
  {
    id: 1,
    title: "Summer 2026 Season Kicks Off This July!",
    date: "June 10, 2026",
    category: "Announcement",
    excerpt: "The UPFL Summer 2026 season is officially here. Six teams will battle it out over 8 weeks for the championship trophy. Registration closes June 30.",
    image: "⚽",
  },
  {
    id: 2,
    title: "New Venue Confirmed: East Side Futsal Center",
    date: "June 5, 2026",
    category: "News",
    excerpt: "We're excited to announce a partnership with East Side Futsal Center, adding a second match venue for the upcoming season with state-of-the-art facilities.",
    image: "🏟️",
  },
  {
    id: 3,
    title: "Season Opener Coming Soon",
    date: "July 5, 2026",
    category: "Match Report",
    excerpt: "The first matches of the UPFL Summer 2026 season are scheduled — stay tuned for full match reports and results.",
    image: "🏆",
  },
  {
    id: 4,
    title: "Player of the Month: Coming Soon",
    date: "July 8, 2026",
    category: "Award",
    excerpt: "The Player of the Month award will be announced after the first round of matches. Follow the season to see who takes the golden boot!",
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
    section: "1. Match Format",
    items: [
      "Team composition: Matches are played 5 vs 5 (1 goalkeeper and 4 outfield players).",
      "Match duration: Two 20-minute halves with a 5-minute halftime interval.",
      "Running clock is used throughout the match.",
      "Referee may stop the clock for significant delays, injuries, or disciplinary incidents.",
      "Timeouts: Each team receives one timeout per half (1 minute).",
      "Unused timeouts do not carry over.",
    ],
  },
  {
    section: "2. Team Rosters",
    items: [
      "Maximum roster size: 10 players.",
      "All registered players must be Muslim, with up to 2 non-Muslims allowed per team.",
      "Players may only represent one team during the season.",
      "All players must be registered before participating.",
      "No player additions after the registration deadline unless approved by league management.",
    ],
  },
  {
    section: "3. Substitutions",
    items: [
      "Flying substitutions are permitted and unlimited.",
      "Substitutions may occur while play is ongoing.",
      "Players must enter and exit through the designated substitution zone.",
      "Incoming players may only enter once the outgoing player has completely exited the court.",
      "Improper substitutions may result in a free kick and disciplinary action.",
    ],
  },
  {
    section: "4. Basic Futsal Rules",
    items: [
      "No offside: There is no offside rule in futsal.",
      "Kick-ins replace throw-ins and must be taken within 4 seconds with the ball on or behind the touchline.",
      "Goal clearances restart play when the ball crosses the goal line off an attacking player; goalkeeper uses hands.",
      "Four-second rule applies to kick-ins, corner kicks, goal clearances, and free kicks.",
      "Failure to restart within 4 seconds awards possession to the opposing team.",
      "Goalkeeper may possess the ball for up to 4 seconds in their own half.",
      "After release, goalkeeper may not touch the ball again in their own half unless an opponent touches it first or play is restarted.",
      "Official futsal ball (size 4, low bounce) and futsal court/goals are required.",
      "Goalkeepers may slide within their penalty area.",
      "Outfield players may not slide tackle opponents.",
      "Sliding that endangers an opponent results in a direct free kick and possible disciplinary action.",
      "For free kicks, opponents must stand at least 5 meters from the ball.",
      "Direct free kicks may be shot directly at goal.",
      "Indirect free kicks require a second touch before a goal can be scored.",
      "Corner kicks are awarded when defending team last touches the ball before it crosses their goal line and must be taken within 4 seconds.",
    ],
  },
  {
    section: "5. Discipline and Conduct",
    items: [
      "Respect policy: profanity, cursing, insults, abusive language, unsportsmanlike behavior, and disrespect toward opponents, officials, or spectators are prohibited.",
      "First offense: verbal warning or yellow card.",
      "Repeated offenses: match suspension and league fine determined by league management.",
    ],
  },
  {
    section: "6. Referee Authority",
    items: [
      "Only team captains may respectfully communicate with referees regarding decisions.",
      "Players must immediately comply with referee instructions.",
      "Excessive arguing, confrontation, or disrespect toward officials may result in yellow card, red card, match suspension, and additional league discipline.",
      "Referee decisions are final and not subject to in-game protest.",
    ],
  },
  {
    section: "7. Cards and Suspensions",
    items: [
      "Two yellow cards in the same match result in a red card and immediate ejection.",
      "Red card: immediate ejection and minimum one-match suspension.",
      "Additional penalties may be assessed by league management.",
      "When a player receives a red card, the team must play with one fewer player.",
      "A substitute may enter after 2 minutes or when the opposing team scores, whichever occurs first.",
      "Violent conduct examples include fighting, threats, physical intimidation, and abusive behavior.",
      "Penalties for violent conduct may include multi-match suspension, league expulsion, or season-long ban.",
      "League management reserves the right to impose additional sanctions.",
    ],
  },
  {
    section: "8. Accumulated Team Fouls",
    items: [
      "Team fouls are tracked separately each half.",
      "Beginning with the sixth accumulated foul, every additional direct-free-kick foul gives the opposing team a direct shooting opportunity.",
      "No defensive wall is permitted on these opportunities.",
      "All players except the goalkeeper must stand behind the ball.",
      "Accumulated fouls reset at halftime.",
    ],
  },
  {
    section: "9. Forfeit Policy",
    items: [
      "A team must have at least 5 players present to begin a match.",
      "A team not ready within 10 minutes of scheduled kickoff forfeits the match.",
      "Official forfeit result: opponent is awarded a 3-0 victory.",
      "Forfeiting team is responsible for referee fees and any additional league costs.",
    ],
  },
  {
    section: "10. League Management",
    items: [
      "League management reserves the right to interpret league rules.",
      "League management may issue disciplinary action.",
      "League management may resolve disputes.",
      "League management may modify league policies when necessary for league operations.",
      "Any matters not specifically covered shall be decided by league management using FIFA Futsal Laws of the Game as guidance.",
    ],
  },
];
