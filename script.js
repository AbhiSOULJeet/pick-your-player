const FOOTBALL_BASE = [
  { name: 'Lionel Messi', flag: '🇦🇷', pos: 'FW', club: 'Inter Miami', num: '10', c1: '#75aadb', c2: '#1b3a6b', ucl: true },
  { name: 'Cristiano Ronaldo', flag: '🇵🇹', pos: 'FW', club: 'Al Nassr', num: '7', c1: '#c8102e', c2: '#4a0a14', ucl: true },
  { name: 'Kylian Mbappé', flag: '🇫🇷', pos: 'FW', club: 'Real Madrid', num: '9', c1: '#1f4fd8', c2: '#0a1a4d', ucl: true },
  { name: 'Erling Haaland', flag: '🇳🇴', pos: 'FW', club: 'Manchester City', num: '9', c1: '#6cabdd', c2: '#1c2c5b', ucl: true },
  { name: 'Kevin De Bruyne', flag: '🇧🇪', pos: 'MF', club: 'Napoli', num: '17', c1: '#6cabdd', c2: '#12305e', ucl: true },
  { name: 'Mohamed Salah', flag: '🇪🇬', pos: 'FW', club: 'Liverpool', num: '11', c1: '#c8102e', c2: '#5a0714', ucl: true },
  { name: 'Harry Kane', flag: '🏴', pos: 'FW', club: 'Bayern Munich', num: '9', c1: '#dc052d', c2: '#4a0214', ucl: true },
  { name: 'Vinícius Júnior', flag: '🇧🇷', pos: 'FW', club: 'Real Madrid', num: '7', c1: '#e8e8f0', c2: '#6a5acd', ucl: true },
  { name: 'Jude Bellingham', flag: '🏴', pos: 'MF', club: 'Real Madrid', num: '5', c1: '#e8e8f0', c2: '#2b3a8a', ucl: true },
  { name: 'Rodri', flag: '🇪🇸', pos: 'MF', club: 'Manchester City', num: '16', c1: '#9db9de', c2: '#12305e', ucl: true },
  { name: 'Bukayo Saka', flag: '🏴', pos: 'FW', club: 'Arsenal', num: '7', c1: '#ef4444', c2: '#0f172a', ucl: false },
  { name: 'Phil Foden', flag: '🏴', pos: 'MF', club: 'Manchester City', num: '47', c1: '#f5d76e', c2: '#1d4ed8', ucl: true },
  { name: 'Sadio Mané', flag: '🇸🇳', pos: 'FW', club: 'Al Nassr', num: '10', c1: '#f59e0b', c2: '#111827', ucl: true },
  { name: 'Virgil van Dijk', flag: '🇳🇱', pos: 'DF', club: 'Liverpool', num: '4', c1: '#c8102e', c2: '#2d0509', ucl: true },
  { name: 'Rúben Dias', flag: '🇵🇹', pos: 'DF', club: 'Manchester City', num: '3', c1: '#9bb7ff', c2: '#111827', ucl: true },
  { name: 'Alisson Becker', flag: '🇧🇷', pos: 'GK', club: 'Liverpool', num: '1', c1: '#c6f6d5', c2: '#1d4ed8', ucl: true },
  { name: 'Manuel Neuer', flag: '🇩🇪', pos: 'GK', club: 'Bayern Munich', num: '1', c1: '#d1d5db', c2: '#0f172a', ucl: true },
  { name: 'Luka Modrić', flag: '🇭🇷', pos: 'MF', club: 'Real Madrid', num: '10', c1: '#e53935', c2: '#3b0d12', ucl: true },
  { name: 'Neymar Jr', flag: '🇧🇷', pos: 'FW', club: 'Al Hilal', num: '10', c1: '#f4c20d', c2: '#0b6b3a', ucl: true },
  { name: 'Robert Lewandowski', flag: '🇵🇱', pos: 'FW', club: 'Barcelona', num: '9', c1: '#a50044', c2: '#162d6b', ucl: true },
  { name: 'Thierry Henry', flag: '🇫🇷', pos: 'FW', club: 'Arsenal', num: '14', c1: '#d4202c', c2: '#4a0b10', ucl: true },
  { name: 'Andrea Pirlo', flag: '🇮🇹', pos: 'MF', club: 'Juventus', num: '21', c1: '#2a2a2a', c2: '#8a8a8a', ucl: true },
  { name: 'Gianluigi Buffon', flag: '🇮🇹', pos: 'GK', club: 'Juventus', num: '1', c1: '#3a3a3a', c2: '#0b0b0b', ucl: true },
  { name: 'Sergio Ramos', flag: '🇪🇸', pos: 'DF', club: 'Real Madrid', num: '4', c1: '#e0e0f0', c2: '#4a4f7a', ucl: true },
  { name: 'Son Heung-min', flag: '🇰🇷', pos: 'FW', club: 'Tottenham', num: '7', c1: '#1a2a5e', c2: '#6b8cd8', ucl: false },
  { name: 'Luis Suárez', flag: '🇺🇾', pos: 'FW', club: 'Inter Miami', num: '9', c1: '#6ec6ff', c2: '#1f2937', ucl: true },
  { name: 'Raúl', flag: '🇪🇸', pos: 'FW', club: 'Real Madrid', num: '7', c1: '#facc15', c2: '#1d4ed8', ucl: true },
  { name: 'Jamie Vardy', flag: '🏴', pos: 'FW', club: 'Leicester City', num: '9', c1: '#0f172a', c2: '#b91c1c', ucl: false },
  { name: 'Arjen Robben', flag: '🇳🇱', pos: 'FW', club: 'Bayern Munich', num: '10', c1: '#d1d5db', c2: '#1d4ed8', ucl: true },
  { name: 'Eden Hazard', flag: '🇧🇪', pos: 'FW', club: 'Real Madrid', num: '7', c1: '#1d4ed8', c2: '#111827', ucl: true },
  { name: 'Rivaldo', flag: '🇧🇷', pos: 'FW', club: 'Barcelona', num: '10', c1: '#c084fc', c2: '#1f2937', ucl: true },
  { name: 'Paolo Maldini', flag: '🇮🇹', pos: 'DF', club: 'AC Milan', num: '3', c1: '#d1d5db', c2: '#111827', ucl: true },
  { name: 'Carles Puyol', flag: '🇪🇸', pos: 'DF', club: 'Barcelona', num: '5', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'John Terry', flag: '🏴', pos: 'DF', club: 'Chelsea', num: '26', c1: '#034694', c2: '#0f172a', ucl: true },
  { name: 'Philipp Lahm', flag: '🇩🇪', pos: 'DF', club: 'Bayern Munich', num: '21', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Marcelo', flag: '🇧🇷', pos: 'DF', club: 'Real Madrid', num: '12', c1: '#facc15', c2: '#1d4ed8', ucl: true },
  { name: 'Cafu', flag: '🇧🇷', pos: 'DF', club: 'AC Milan', num: '2', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Giorgio Chiellini', flag: '🇮🇹', pos: 'DF', club: 'Juventus', num: '3', c1: '#d4d4d8', c2: '#0f172a', ucl: true },
  { name: 'Trent Alexander-Arnold', flag: '🏴', pos: 'DF', club: 'Liverpool', num: '66', c1: '#c8102e', c2: '#111827', ucl: true },
  { name: 'Kyle Walker', flag: '🏴', pos: 'DF', club: 'Manchester City', num: '2', c1: '#7dd3fc', c2: '#0f172a', ucl: true },
  { name: 'David Alaba', flag: '🇦🇹', pos: 'DF', club: 'Real Madrid', num: '4', c1: '#f8fafc', c2: '#1e293b', ucl: true },
  { name: 'Antonio Rüdiger', flag: '🇩🇪', pos: 'DF', club: 'Real Madrid', num: '22', c1: '#94a3b8', c2: '#111827', ucl: true },
  { name: 'Pedri', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '8', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Frenkie de Jong', flag: '🇳🇱', pos: 'MF', club: 'Barcelona', num: '21', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Declan Rice', flag: '🏴', pos: 'MF', club: 'Arsenal', num: '41', c1: '#ef4444', c2: '#111827', ucl: false },
  { name: 'Jamal Musiala', flag: '🇩🇪', pos: 'MF', club: 'Bayern Munich', num: '42', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Thomas Müller', flag: '🇩🇪', pos: 'FW', club: 'Bayern Munich', num: '25', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Alphonso Davies', flag: '🇨🇦', pos: 'DF', club: 'Bayern Munich', num: '19', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Mauro Icardi', flag: '🇦🇷', pos: 'FW', club: 'Galatasaray', num: '9', c1: '#fbbf24', c2: '#111827', ucl: false },
  { name: 'Alexis Mac Allister', flag: '🇦🇷', pos: 'MF', club: 'Liverpool', num: '10', c1: '#c8102e', c2: '#111827', ucl: true },
  { name: 'Enzo Fernández', flag: '🇦🇷', pos: 'MF', club: 'Chelsea', num: '8', c1: '#034694', c2: '#111827', ucl: false },
  { name: 'Pablo Dybala', flag: '🇦🇷', pos: 'FW', club: 'Roma', num: '10', c1: '#d1d5db', c2: '#111827', ucl: false },
  { name: 'Riyad Mahrez', flag: '🇩🇿', pos: 'FW', club: 'Al Ahli', num: '7', c1: '#0f172a', c2: '#22c55e', ucl: false },
  { name: 'Ciro Immobile', flag: '🇮🇹', pos: 'FW', club: 'Lazio', num: '17', c1: '#1d4ed8', c2: '#111827', ucl: false },
  { name: 'Lamine Yamal', flag: '🇪🇸', pos: 'FW', club: 'Barcelona', num: '19', c1: '#a50044', c2: '#fcd34d', ucl: false },
  { name: 'Rasmus Højlund', flag: '🇩🇰', pos: 'FW', club: 'Manchester United', num: '11', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Gavi', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '6', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Aitana Bonmatí', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '14', c1: '#facc15', c2: '#1d4ed8', ucl: false },
  { name: 'Kylian Mbappé', flag: '🇫🇷', pos: 'FW', club: 'Real Madrid', num: '9', c1: '#1f4fd8', c2: '#0a1a4d', ucl: true },
  { name: 'Andrés Iniesta', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '8', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Zlatan Ibrahimović', flag: '🇸🇪', pos: 'FW', club: 'AC Milan', num: '11', c1: '#fecb00', c2: '#006aa7', ucl: true },
  { name: 'Wayne Rooney', flag: '🏴', pos: 'FW', club: 'Manchester United', num: '10', c1: '#da291c', c2: '#3b0a06', ucl: true },
  { name: 'Steven Gerrard', flag: '🏴', pos: 'MF', club: 'Liverpool', num: '8', c1: '#c8102e', c2: '#3d0610', ucl: true },
  { name: 'Frank Lampard', flag: '🏴', pos: 'MF', club: 'Chelsea', num: '8', c1: '#034694', c2: '#021a3a', ucl: true },
  { name: 'Gianluigi Donnarumma', flag: '🇮🇹', pos: 'GK', club: 'Paris Saint-Germain', num: '99', c1: '#1d4ed8', c2: '#0f172a', ucl: false },
  { name: 'Ederson', flag: '🇧🇷', pos: 'GK', club: 'Manchester City', num: '31', c1: '#4ade80', c2: '#111827', ucl: true },
  { name: 'Marco Verratti', flag: '🇮🇹', pos: 'MF', club: 'Paris Saint-Germain', num: '6', c1: '#1d4ed8', c2: '#111827', ucl: false },
  { name: 'Theo Hernandez', flag: '🇫🇷', pos: 'DF', club: 'AC Milan', num: '19', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Jeremie Frimpong', flag: '🇳🇱', pos: 'DF', club: 'Bayer Leverkusen', num: '30', c1: '#0f172a', c2: '#f59e0b', ucl: false },
  { name: 'Jonathan Tah', flag: '🇩🇪', pos: 'DF', club: 'Bayer Leverkusen', num: '4', c1: '#1d4ed8', c2: '#0f172a', ucl: false },
  { name: 'Mikel Arteta', flag: '🇪🇸', pos: 'MF', club: 'Arsenal', num: '8', c1: '#ef4444', c2: '#111827', ucl: true },
  { name: 'Fabio Cannavaro', flag: '🇮🇹', pos: 'DF', club: 'Juventus', num: '5', c1: '#d1d5db', c2: '#111827', ucl: true },
  { name: 'Angelo Ogbonna', flag: '🇮🇹', pos: 'DF', club: 'West Ham', num: '21', c1: '#7c3aed', c2: '#111827', ucl: false },
  { name: 'Emerson Palmieri', flag: '🇧🇷', pos: 'DF', club: 'West Ham', num: '33', c1: '#7c3aed', c2: '#111827', ucl: false }
];

const CRICKET_BASE = [
  { name: 'Virat Kohli', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '18', c1: '#f44336', c2: '#8b0f1d', trophy: true },
  { name: 'Rohit Sharma', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '45', c1: '#ff9f1c', c2: '#7a2d00', trophy: true },
  { name: 'MS Dhoni', flag: '🇮🇳', pos: 'WK', club: 'India', num: '7', c1: '#f6d365', c2: '#d93f2d', trophy: true },
  { name: 'Jasprit Bumrah', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '93', c1: '#1b4f9c', c2: '#0a1730', trophy: true },
  { name: 'Pat Cummins', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '20', c1: '#f3c623', c2: '#0a0a0a', trophy: true },
  { name: 'Ben Stokes', flag: '🏴', pos: 'AR', club: 'England', num: '55', c1: '#1e2a38', c2: '#8f1d17', trophy: true },
  { name: 'Jos Buttler', flag: '🏴', pos: 'WK', club: 'England', num: '63', c1: '#0b1f4d', c2: '#7db0ff', trophy: true },
  { name: 'Shubman Gill', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '77', c1: '#1a6dff', c2: '#0d1d45', trophy: true },
  { name: 'KL Rahul', flag: '🇮🇳', pos: 'WK', club: 'India', num: '1', c1: '#1d6f6d', c2: '#082f31', trophy: true },
  { name: 'Hardik Pandya', flag: '🇮🇳', pos: 'AR', club: 'India', num: '33', c1: '#f9c74f', c2: '#8d2f1f', trophy: true },
  { name: 'Ravindra Jadeja', flag: '🇮🇳', pos: 'AR', club: 'India', num: '8', c1: '#f7b801', c2: '#0a4d8a', trophy: true },
  { name: 'Travis Head', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '62', c1: '#1f5bb5', c2: '#07192b', trophy: true },
  { name: 'Joe Root', flag: '🏴', pos: 'BAT', club: 'England', num: '66', c1: '#f1f1f1', c2: '#2d2d2d', trophy: true },
  { name: 'David Warner', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '31', c1: '#e26310', c2: '#4a1200', trophy: true },
  { name: 'Bhuvneshwar Kumar', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '13', c1: '#1d7a64', c2: '#0c2620', trophy: true },
  { name: 'Andre Russell', flag: '🇧🇩', pos: 'AR', club: 'West Indies', num: '12', c1: '#e62b2b', c2: '#2a0a0d', trophy: true },
  { name: 'Kuldeep Yadav', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '23', c1: '#1a73b8', c2: '#0b2342', trophy: true },
  { name: 'Steve Smith', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '49', c1: '#1b5fbf', c2: '#0b1220', trophy: true },
  { name: 'Mitchell Starc', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '56', c1: '#0ea5e9', c2: '#0f172a', trophy: true },
  { name: 'Kane Williamson', flag: '🇳🇿', pos: 'BAT', club: 'New Zealand', num: '22', c1: '#0c5f7a', c2: '#d3f0ff', trophy: true },
  { name: 'Rashid Khan', flag: '🇦🇫', pos: 'BOWL', club: 'Afghanistan', num: '19', c1: '#0a2e4b', c2: '#a5d6ff', trophy: true },
  { name: 'Shaheen Afridi', flag: '🇵🇰', pos: 'BOWL', club: 'Pakistan', num: '10', c1: '#0c4a6e', c2: '#d8f3ff', trophy: true },
  { name: 'Mohammed Siraj', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '13', c1: '#4372ff', c2: '#0d1b3c', trophy: true },
  { name: 'Dale Steyn', flag: '🇿🇦', pos: 'BOWL', club: 'South Africa', num: '8', c1: '#0ea5e9', c2: '#0f172a', trophy: true },
  { name: 'Moeen Ali', flag: '🏴', pos: 'AR', club: 'England', num: '18', c1: '#fbbf24', c2: '#0f172a', trophy: true },
  { name: 'Stuart Broad', flag: '🏴', pos: 'BOWL', club: 'England', num: '8', c1: '#fca5a5', c2: '#1f2937', trophy: true },
  { name: 'James Anderson', flag: '🏴', pos: 'BOWL', club: 'England', num: '20', c1: '#bfdbfe', c2: '#0f172a', trophy: true },
  { name: 'Chris Gayle', flag: '🇯🇲', pos: 'BAT', club: 'West Indies', num: '45', c1: '#7f1d1d', c2: '#facc15', trophy: true },
  { name: 'Sunil Narine', flag: '🇹🇹', pos: 'BOWL', club: 'West Indies', num: '27', c1: '#d4d4d8', c2: '#1f2937', trophy: true },
  { name: 'Kumar Sangakkara', flag: '🇱🇰', pos: 'WK', club: 'Sri Lanka', num: '11', c1: '#dbeafe', c2: '#1f2937', trophy: true },
  { name: 'Muttiah Muralitharan', flag: '🇱🇰', pos: 'BOWL', club: 'Sri Lanka', num: '8', c1: '#9fe870', c2: '#1d4d3b', trophy: true },
  { name: 'Lasith Malinga', flag: '🇱🇰', pos: 'BOWL', club: 'Sri Lanka', num: '99', c1: '#e1b12c', c2: '#0f172a', trophy: true },
  { name: 'Brendon McCullum', flag: '🇳🇿', pos: 'WK', club: 'New Zealand', num: '42', c1: '#0066cc', c2: '#fff6e5', trophy: true },
  { name: 'Martin Guptill', flag: '🇳🇿', pos: 'BAT', club: 'New Zealand', num: '31', c1: '#5eead4', c2: '#0f172a', trophy: true },
  { name: 'Temba Bavuma', flag: '🇿🇦', pos: 'BAT', club: 'South Africa', num: '13', c1: '#fbbf24', c2: '#1f2937', trophy: true },
  { name: 'Hashim Amla', flag: '🇿🇦', pos: 'BAT', club: 'South Africa', num: '81', c1: '#4ade80', c2: '#0f172a', trophy: true },
  { name: 'AB de Villiers', flag: '🇿🇦', pos: 'WK', club: 'South Africa', num: '17', c1: '#94a3b8', c2: '#111827', trophy: true },
  { name: 'Brian Lara', flag: '🇹🇹', pos: 'BAT', club: 'West Indies', num: '9', c1: '#f59e0b', c2: '#0f172a', trophy: true },
  { name: 'Shivnarine Chanderpaul', flag: '🇬🇾', pos: 'BAT', club: 'West Indies', num: '45', c1: '#00c2a8', c2: '#0f172a', trophy: true },
  { name: 'Babar Azam', flag: '🇵🇰', pos: 'BAT', club: 'Pakistan', num: '56', c1: '#0f766e', c2: '#d1fae5', trophy: true },
  { name: 'Mohammad Rizwan', flag: '🇵🇰', pos: 'WK', club: 'Pakistan', num: '75', c1: '#93c5fd', c2: '#0f172a', trophy: true },
  { name: 'Shakib Al Hasan', flag: '🇧🇩', pos: 'AR', club: 'Bangladesh', num: '75', c1: '#f59e0b', c2: '#0f172a', trophy: true },
  { name: 'Tamim Iqbal', flag: '🇧🇩', pos: 'BAT', club: 'Bangladesh', num: '27', c1: '#60a5fa', c2: '#111827', trophy: true },
  { name: 'Mushfiqur Rahim', flag: '🇧🇩', pos: 'WK', club: 'Bangladesh', num: '15', c1: '#4f46e5', c2: '#0f172a', trophy: true },
  { name: 'Mohammad Nabi', flag: '🇦🇫', pos: 'AR', club: 'Afghanistan', num: '20', c1: '#86efac', c2: '#0f172a', trophy: true },
  { name: 'Ibrahim Zadran', flag: '🇦🇫', pos: 'BAT', club: 'Afghanistan', num: '2', c1: '#22d3ee', c2: '#0f172a', trophy: true },
  { name: 'Naseem Shah', flag: '🇵🇰', pos: 'BOWL', club: 'Pakistan', num: '7', c1: '#ef4444', c2: '#0f172a', trophy: true },
  { name: 'Adam Zampa', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '18', c1: '#a1d6ff', c2: '#1d3f64', trophy: true },
  { name: 'Sam Curran', flag: '🏴', pos: 'AR', club: 'England', num: '3', c1: '#1a3b85', c2: '#e7b10c', trophy: true },
  { name: 'Liam Livingstone', flag: '🏴', pos: 'AR', club: 'England', num: '8', c1: '#b3d5ff', c2: '#1a2448', trophy: true },
  { name: 'Rachin Ravindra', flag: '🇳🇿', pos: 'AR', club: 'New Zealand', num: '8', c1: '#4ade80', c2: '#0f172a', trophy: true },
  { name: 'Tim Southee', flag: '🇳🇿', pos: 'BOWL', club: 'New Zealand', num: '38', c1: '#60a5fa', c2: '#0f172a', trophy: true },
  { name: 'Suryakumar Yadav', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '63', c1: '#22c55e', c2: '#111827', trophy: true },
  { name: 'Axar Patel', flag: '🇮🇳', pos: 'AR', club: 'India', num: '20', c1: '#f59e0b', c2: '#1e3a8a', trophy: true },
  { name: 'Yuzvendra Chahal', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '3', c1: '#1d4ed8', c2: '#0f172a', trophy: true },
  { name: 'Kagiso Rabada', flag: '🇿🇦', pos: 'BOWL', club: 'South Africa', num: '25', c1: '#0b7a75', c2: '#082d2f', trophy: true },
  { name: 'Shaheen Afridi', flag: '🇵🇰', pos: 'BOWL', club: 'Pakistan', num: '10', c1: '#3b82f6', c2: '#111827', trophy: true },
  { name: 'Faf du Plessis', flag: '🇿🇦', pos: 'BAT', club: 'South Africa', num: '18', c1: '#fbbf24', c2: '#111827', trophy: true },
  { name: 'Quinton de Kock', flag: '🇿🇦', pos: 'WK', club: 'South Africa', num: '12', c1: '#94a3b8', c2: '#111827', trophy: true },
  { name: 'Imam-ul-Haq', flag: '🇵🇰', pos: 'BAT', club: 'Pakistan', num: '8', c1: '#0f766e', c2: '#d1fae5', trophy: true },
  { name: 'Nicholas Pooran', flag: '🇹🇹', pos: 'WK', club: 'West Indies', num: '10', c1: '#fbbf24', c2: '#111827', trophy: true },
  { name: 'Jofra Archer', flag: '🏴', pos: 'BOWL', club: 'England', num: '51', c1: '#fbbf24', c2: '#111827', trophy: true },
  { name: 'Saqib Mahmood', flag: '🏴', pos: 'BOWL', club: 'England', num: '16', c1: '#93c5fd', c2: '#111827', trophy: true },
  { name: 'Dawid Malan', flag: '🏴', pos: 'BAT', club: 'England', num: '15', c1: '#f5f5f5', c2: '#111827', trophy: true }
];

const DEFAULT_SPORT = 'football';
const POS = { All: 'All', FW: 'Forwards', MF: 'Midfield', DF: 'Defenders', GK: 'Keepers' };
const CRICKET_POS = { All: 'All', BAT: 'Batters', BOWL: 'Bowlers', AR: 'All-rounders', WK: 'Wicketkeepers' };

function generatePool(baseList, total, type) {
  const pool = [];
  for (let index = 0; index < total; index += 1) {
    const source = baseList[index % baseList.length];
    const hue = (index * 29 + source.name.length * 11) % 360;
    pool.push({
      n: source.name,
      f: source.flag,
      pos: source.pos,
      club: source.club,
      num: String(source.num || index + 1),
      c1: source.c1 || `hsl(${hue} 70% 60%)`,
      c2: source.c2 || `hsl(${(hue + 45) % 360} 68% 20%)`,
      ucl: typeof source.ucl === 'boolean' ? source.ucl : index % 4 === 0,
      trophy: typeof source.trophy === 'boolean' ? source.trophy : index % 3 === 0,
    });
  }
  return pool;
}

const FOOTBALL_PLAYERS = generatePool(FOOTBALL_BASE, 500, 'football');
const CRICKET_PLAYERS = generatePool(CRICKET_BASE, 250, 'cricket');

const $ = (id) => document.getElementById(id);
const stage = $('stage');
const track = $('track');

let list = FOOTBALL_PLAYERS.slice();
let i = 0;
let picked = null;
let drag = null;
let busy = false;
let sportMode = DEFAULT_SPORT;

function getLabels(mode) {
  return mode === 'football' ? POS : CRICKET_POS;
}

function getSource(mode) {
  return mode === 'football' ? FOOTBALL_PLAYERS : CRICKET_PLAYERS;
}

function ini(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function updateFilterButtons(mode) {
  const labels = getLabels(mode);
  $('filters').innerHTML = Object.entries(labels)
    .map(([key, label]) => `<button class="chip${key === 'All' ? ' on' : ''}" data-k="${key}">${label}</button>`)
    .join('');
}

function update(instant) {
  [...track.children].forEach((card, key) => card.classList.toggle('active', key === i));
  if (instant) track.style.transition = 'none';
  track.style.transform = `translateX(${offset()}px)`;
  if (instant) {
    track.offsetWidth;
    track.style.transition = '';
  }

  const activePlayer = list[i];
  if (activePlayer) {
    document.body.style.setProperty('--glow', `color-mix(in srgb, ${activePlayer.c1} 27%, transparent)`);
  }

  $('count').textContent = list.length ? `${i + 1} / ${list.length}` : '';
}

function offset() {
  const card = track.children[i];
  if (!card) return 0;
  return stage.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2);
}

function render() {
  const labels = getLabels(sportMode);
  track.innerHTML = list
    .map((player, key) => `
      <div class="card${picked === player ? ' picked' : ''}" data-k="${key}" style="--c1:${player.c1};--c2:${player.c2};animation-delay:${Math.min(key * 40, 400)}ms">
        <div class="num">${player.num}</div>
        <div class="ini">${ini(player.n)}</div>
        <div class="flag">${player.f}</div>
        <div class="content">
          <h3>${player.n}</h3>
          <p>${player.club}</p>
          <span class="tag">${labels[player.pos] || player.pos}</span>
        </div>
      </div>
    `)
    .join('');

  update(true);
}

function setSportMode(mode) {
  sportMode = mode;
  list = getSource(mode).slice();
  i = 0;
  picked = null;
  busy = false;
  updateFilterButtons(mode);
  render();

  const modal = $('sportModal');
  if (modal) modal.classList.remove('show');
}

function choose() {
  const player = list[i];
  if (!player) return;

  picked = player;
  document.querySelectorAll('.card').forEach((card, key) => card.classList.toggle('picked', key === i));

  const panel = $('panel');
  panel.style.setProperty('--c1', player.c1);
  panel.style.setProperty('--c2', player.c2);
  $('pb').textContent = player.num;
  $('pn').textContent = `${player.n} ${player.f}`;
  $('pd').textContent = `${getLabels(sportMode)[player.pos] || player.pos} · ${player.club}`;

  const meta = $('pu');
  if (sportMode === 'football') {
    meta.textContent = player.ucl ? '🏆 Champions League winner' : 'No Champions League title';
    meta.style.color = player.ucl ? 'var(--accent)' : '#dce7ff';
  } else {
    meta.textContent = player.trophy ? '🏆 ICC trophy winner' : 'No ICC trophy';
    meta.style.color = player.trophy ? 'var(--accent)' : '#dce7ff';
  }
  meta.style.fontWeight = '600';

  panel.classList.remove('pop');
  panel.offsetWidth;
  panel.classList.add('show', 'pop');
}

function rand() {
  if (busy || list.length < 2) return;

  busy = true;
  ['pick', 'rand'].forEach((id) => $(id).disabled = true);

  let target;
  do {
    target = Math.floor(Math.random() * list.length);
  } while (Math.abs(target - i) < Math.min(8, Math.floor(list.length / 2)));

  $('panel').classList.remove('show');
  document.querySelectorAll('.card.active').forEach((card) => card.classList.remove('active'));
  track.classList.add('spin');
  i = target;
  track.style.transform = `translateX(${offset()}px)`;

  setTimeout(() => {
    track.classList.remove('spin');
    update();
    setTimeout(() => {
      busy = false;
      ['pick', 'rand'].forEach((id) => $(id).disabled = false);
      choose();
    }, 700);
  }, 3900);
}

const go = (direction) => {
  if (busy) return;
  i = Math.max(0, Math.min(list.length - 1, i + direction));
  update();
};

$('next').onclick = () => go(1);
$('prev').onclick = () => go(-1);
$('rand').onclick = rand;
$('pick').onclick = choose;

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') go(1);
  if (event.key === 'ArrowLeft') go(-1);
  if (event.key === 'Enter') choose();
  if (event.key === 'r' || event.key === 'R') rand();
});

window.addEventListener('resize', () => update(true));

stage.addEventListener('pointerdown', (event) => {
  if (busy) return;
  drag = { x: event.clientX, dx: 0, id: event.pointerId };
});

stage.addEventListener('pointermove', (event) => {
  if (!drag) return;
  drag.dx = event.clientX - drag.x;
  if (Math.abs(drag.dx) > 6) {
    stage.classList.add('drag');
    track.style.transform = `translateX(${offset() + drag.dx}px)`;
  }
});

const endDrag = () => {
  if (!drag) return;
  const dx = drag.dx;
  drag = null;
  stage.classList.remove('drag');

  if (Math.abs(dx) > 6) {
    const step = Math.round(-dx / 250);
    go(step || (dx < 0 ? 1 : -1));
  } else {
    update();
  }
};

stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointerleave', endDrag);
stage.addEventListener('pointercancel', endDrag);

track.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  if (busy || !card || Math.abs(drag?.dx || 0) > 6) return;
  const key = Number(card.dataset.k);
  if (key !== i) {
    i = key;
    update();
  } else {
    choose();
  }
});

stage.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 20) {
    event.preventDefault();
    go(event.deltaX > 0 ? 1 : -1);
  }
}, { passive: false });

$('filters').onclick = (event) => {
  const button = event.target.closest('.chip');
  if (!button) return;

  document.querySelectorAll('.chip').forEach((chip) => chip.classList.toggle('on', chip === button));

  const source = getSource(sportMode);
  list = button.dataset.k === 'All' ? source.slice() : source.filter((player) => player.pos === button.dataset.k);
  i = 0;
  picked = null;
  render();
};

document.querySelectorAll('.sport-btn').forEach((button) => {
  button.addEventListener('click', () => setSportMode(button.dataset.sport));
});

updateFilterButtons(DEFAULT_SPORT);
render();
$('sportModal').classList.add('show');
