const FOOTBALL_BASE = [
  // --- UCL WINNERS (ucl: true) ---
  { name: 'Lionel Messi', flag: '🇦🇷', pos: 'FW', club: 'Inter Miami', num: '10', c1: '#75aadb', c2: '#1b3a6b', ucl: true },
  { name: 'Cristiano Ronaldo', flag: '🇵🇹', pos: 'FW', club: 'Al Nassr', num: '7', c1: '#c8102e', c2: '#4a0a14', ucl: true },
  { name: 'Karim Benzema', flag: '🇫🇷', pos: 'FW', club: 'Al Ittihad', num: '9', c1: '#eab308', c2: '#0f172a', ucl: true },
  { name: 'Luka Modrić', flag: '🇭🇷', pos: 'MF', club: 'Real Madrid', num: '10', c1: '#e53935', c2: '#3b0d12', ucl: true },
  { name: 'Toni Kroos', flag: '🇩🇪', pos: 'MF', club: 'Real Madrid', num: '8', c1: '#f8fafc', c2: '#1e293b', ucl: true },
  { name: 'Gareth Bale', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', pos: 'FW', club: 'Real Madrid', num: '11', c1: '#dc2626', c2: '#166534', ucl: true },
  { name: 'Sergio Ramos', flag: '🇪🇸', pos: 'DF', club: 'Sevilla', num: '4', c1: '#e0e0f0', c2: '#4a4f7a', ucl: true },
  { name: 'Marcelo', flag: '🇧🇷', pos: 'DF', club: 'Fluminense', num: '12', c1: '#facc15', c2: '#1d4ed8', ucl: true },
  { name: 'Casemiro', flag: '🇧🇷', pos: 'MF', club: 'Manchester United', num: '18', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Daniel Carvajal', flag: '🇪🇸', pos: 'DF', club: 'Real Madrid', num: '2', c1: '#f8fafc', c2: '#1e293b', ucl: true },
  { name: 'Andrés Iniesta', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '8', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Xavi Hernández', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '6', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Sergio Busquets', flag: '🇪🇸', pos: 'MF', club: 'Inter Miami', num: '5', c1: '#ec4899', c2: '#1e293b', ucl: true },
  { name: 'Gerard Piqué', flag: '🇪🇸', pos: 'DF', club: 'Barcelona', num: '3', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Carles Puyol', flag: '🇪🇸', pos: 'DF', club: 'Barcelona', num: '5', c1: '#a50044', c2: '#1d4ed8', ucl: true },
  { name: 'Neymar Jr', flag: '🇧🇷', pos: 'FW', club: 'Al Hilal', num: '10', c1: '#1d4ed8', c2: '#0b6b3a', ucl: true },
  { name: 'Luis Suárez', flag: '🇺🇾', pos: 'FW', club: 'Inter Miami', num: '9', c1: '#ec4899', c2: '#1f2937', ucl: true },
  { name: 'Thierry Henry', flag: '🇫🇷', pos: 'FW', club: 'Barcelona', num: '14', c1: '#a50044', c2: '#4a0b10', ucl: true },
  { name: 'Ronaldinho', flag: '🇧🇷', pos: 'FW', club: 'Barcelona', num: '10', c1: '#fbbf24', c2: '#1e3a8a', ucl: true },
  { name: 'Samuel Eto\'o', flag: '🇨🇲', pos: 'FW', club: 'Inter Milan', num: '9', c1: '#0284c7', c2: '#0f172a', ucl: true },
  { name: 'Wayne Rooney', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'FW', club: 'Manchester United', num: '10', c1: '#da291c', c2: '#3b0a06', ucl: true },
  { name: 'Paul Scholes', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Manchester United', num: '18', c1: '#da291c', c2: '#1e293b', ucl: true },
  { name: 'Ryan Giggs', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', pos: 'MF', club: 'Manchester United', num: '11', c1: '#da291c', c2: '#1e293b', ucl: true },
  { name: 'Rio Ferdinand', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'DF', club: 'Manchester United', num: '5', c1: '#da291c', c2: '#1e293b', ucl: true },
  { name: 'Nemanja Vidić', flag: '🇷🇸', pos: 'DF', club: 'Manchester United', num: '15', c1: '#da291c', c2: '#1e293b', ucl: true },
  { name: 'Edwin van der Sar', flag: '🇳🇱', pos: 'GK', club: 'Manchester United', num: '1', c1: '#da291c', c2: '#1e293b', ucl: true },
  { name: 'Frank Lampard', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Chelsea', num: '8', c1: '#034694', c2: '#021a3a', ucl: true },
  { name: 'John Terry', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'DF', club: 'Chelsea', num: '26', c1: '#034694', c2: '#0f172a', ucl: true },
  { name: 'Didier Drogba', flag: '🇨🇮', pos: 'FW', club: 'Chelsea', num: '11', c1: '#034694', c2: '#0f172a', ucl: true },
  { name: 'Petr Čech', flag: '🇨🇿', pos: 'GK', club: 'Chelsea', num: '1', c1: '#034694', c2: '#0f172a', ucl: true },
  { name: 'Steven Gerrard', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Liverpool', num: '8', c1: '#c8102e', c2: '#3d0610', ucl: true },
  { name: 'Mohamed Salah', flag: '🇪🇬', pos: 'FW', club: 'Liverpool', num: '11', c1: '#c8102e', c2: '#5a0714', ucl: true },
  { name: 'Sadio Mané', flag: '🇸🇳', pos: 'FW', club: 'Al Nassr', num: '10', c1: '#f59e0b', c2: '#111827', ucl: true },
  { name: 'Virgil van Dijk', flag: '🇳🇱', pos: 'DF', club: 'Liverpool', num: '4', c1: '#c8102e', c2: '#2d0509', ucl: true },
  { name: 'Alisson Becker', flag: '🇧🇷', pos: 'GK', club: 'Liverpool', num: '1', c1: '#c8102e', c2: '#1d4ed8', ucl: true },
  { name: 'Trent Alexander-Arnold', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'DF', club: 'Liverpool', num: '66', c1: '#c8102e', c2: '#111827', ucl: true },
  { name: 'Roberto Firmino', flag: '🇧🇷', pos: 'FW', club: 'Al Ahli', num: '9', c1: '#16a34a', c2: '#111827', ucl: true },
  { name: 'Jordan Henderson', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Ajax', num: '14', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Kevin De Bruyne', flag: '🇧🇪', pos: 'MF', club: 'Manchester City', num: '17', c1: '#6cabdd', c2: '#12305e', ucl: true },
  { name: 'Erling Haaland', flag: '🇳🇴', pos: 'FW', club: 'Manchester City', num: '9', c1: '#6cabdd', c2: '#1c2c5b', ucl: true },
  { name: 'Rodri', flag: '🇪🇸', pos: 'MF', club: 'Manchester City', num: '16', c1: '#9db9de', c2: '#12305e', ucl: true },
  { name: 'İlkay Gündoğan', flag: '🇩🇪', pos: 'MF', club: 'Manchester City', num: '19', c1: '#6cabdd', c2: '#12305e', ucl: true },
  { name: 'Bernardo Silva', flag: '🇵🇹', pos: 'MF', club: 'Manchester City', num: '20', c1: '#6cabdd', c2: '#12305e', ucl: true },
  { name: 'Rúben Dias', flag: '🇵🇹', pos: 'DF', club: 'Manchester City', num: '3', c1: '#9bb7ff', c2: '#111827', ucl: true },
  { name: 'Ederson', flag: '🇧🇷', pos: 'GK', club: 'Manchester City', num: '31', c1: '#4ade80', c2: '#111827', ucl: true },
  { name: 'Kyle Walker', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'DF', club: 'Manchester City', num: '2', c1: '#7dd3fc', c2: '#0f172a', ucl: true },
  { name: 'Phil Foden', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Manchester City', num: '47', c1: '#f5d76e', c2: '#1d4ed8', ucl: true },
  { name: 'Riyad Mahrez', flag: '🇩🇿', pos: 'FW', club: 'Al Ahli', num: '7', c1: '#0f172a', c2: '#22c55e', ucl: true },
  { name: 'Manuel Neuer', flag: '🇩🇪', pos: 'GK', club: 'Bayern Munich', num: '1', c1: '#d1d5db', c2: '#0f172a', ucl: true },
  { name: 'Thomas Müller', flag: '🇩🇪', pos: 'FW', club: 'Bayern Munich', num: '25', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Robert Lewandowski', flag: '🇵🇱', pos: 'FW', club: 'Barcelona', num: '9', c1: '#a50044', c2: '#162d6b', ucl: true },
  { name: 'Joshua Kimmich', flag: '🇩🇪', pos: 'MF', club: 'Bayern Munich', num: '6', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Alphonso Davies', flag: '🇨🇦', pos: 'DF', club: 'Bayern Munich', num: '19', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'David Alaba', flag: '🇦🇹', pos: 'DF', club: 'Real Madrid', num: '4', c1: '#f8fafc', c2: '#1e293b', ucl: true },
  { name: 'Arjen Robben', flag: '🇳🇱', pos: 'FW', club: 'Bayern Munich', num: '10', c1: '#d1d5db', c2: '#1d4ed8', ucl: true },
  { name: 'Franck Ribéry', flag: '🇫🇷', pos: 'FW', club: 'Bayern Munich', num: '7', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Philipp Lahm', flag: '🇩🇪', pos: 'DF', club: 'Bayern Munich', num: '21', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Bastian Schweinsteiger', flag: '🇩🇪', pos: 'MF', club: 'Bayern Munich', num: '31', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Kaká', flag: '🇧🇷', pos: 'MF', club: 'AC Milan', num: '22', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Andrea Pirlo', flag: '🇮🇹', pos: 'MF', club: 'AC Milan', num: '21', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Paolo Maldini', flag: '🇮🇹', pos: 'DF', club: 'AC Milan', num: '3', c1: '#d1d5db', c2: '#111827', ucl: true },
  { name: 'Clarence Seedorf', flag: '🇳🇱', pos: 'MF', club: 'AC Milan', num: '10', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Alessandro Nesta', flag: '🇮🇹', pos: 'DF', club: 'AC Milan', num: '13', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Cafu', flag: '🇧🇷', pos: 'DF', club: 'AC Milan', num: '2', c1: '#dc2626', c2: '#111827', ucl: true },
  { name: 'Vinícius Júnior', flag: '🇧🇷', pos: 'FW', club: 'Real Madrid', num: '7', c1: '#e8e8f0', c2: '#6a5acd', ucl: true },
  { name: 'Jude Bellingham', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Real Madrid', num: '5', c1: '#e8e8f0', c2: '#2b3a8a', ucl: true },
  { name: 'Antonio Rüdiger', flag: '🇩🇪', pos: 'DF', club: 'Real Madrid', num: '22', c1: '#94a3b8', c2: '#111827', ucl: true },
  { name: 'Thibaut Courtois', flag: '🇧🇪', pos: 'GK', club: 'Real Madrid', num: '1', c1: '#f8fafc', c2: '#111827', ucl: true },
  { name: 'N\'Golo Kanté', flag: '🇫🇷', pos: 'MF', club: 'Al Ittihad', num: '7', c1: '#eab308', c2: '#0f172a', ucl: true },
  { name: 'Kai Havertz', flag: '🇩🇪', pos: 'FW', club: 'Arsenal', num: '29', c1: '#ef4444', c2: '#0f172a', ucl: true },

  // --- UCL NON-WINNERS (ucl: false) ---
  { name: 'Kylian Mbappé', flag: '🇫🇷', pos: 'FW', club: 'Real Madrid', num: '9', c1: '#1f4fd8', c2: '#0a1a4d', ucl: false },
  { name: 'Harry Kane', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'FW', club: 'Bayern Munich', num: '9', c1: '#dc052d', c2: '#4a0214', ucl: false },
  { name: 'Gianluigi Buffon', flag: '🇮🇹', pos: 'GK', club: 'Parma', num: '1', c1: '#3a3a3a', c2: '#0b0b0b', ucl: false },
  { name: 'Zlatan Ibrahimović', flag: '🇸🇪', pos: 'FW', club: 'AC Milan', num: '11', c1: '#fecb00', c2: '#006aa7', ucl: false },
  { name: 'Son Heung-min', flag: '🇰🇷', pos: 'FW', club: 'Tottenham', num: '7', c1: '#1a2a5e', c2: '#6b8cd8', ucl: false },
  { name: 'Bukayo Saka', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'FW', club: 'Arsenal', num: '7', c1: '#ef4444', c2: '#0f172a', ucl: false },
  { name: 'Declan Rice', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Arsenal', num: '41', c1: '#ef4444', c2: '#111827', ucl: false },
  { name: 'Martin Ødegaard', flag: '🇳🇴', pos: 'MF', club: 'Arsenal', num: '8', c1: '#ef4444', c2: '#111827', ucl: false },
  { name: 'William Saliba', flag: '🇫🇷', pos: 'DF', club: 'Arsenal', num: '2', c1: '#ef4444', c2: '#111827', ucl: false },
  { name: 'Gabriel Magalhães', flag: '🇧🇷', pos: 'DF', club: 'Arsenal', num: '6', c1: '#ef4444', c2: '#111827', ucl: false },
  { name: 'Pedri', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '8', c1: '#a50044', c2: '#1d4ed8', ucl: false },
  { name: 'Gavi', flag: '🇪🇸', pos: 'MF', club: 'Barcelona', num: '6', c1: '#a50044', c2: '#1d4ed8', ucl: false },
  { name: 'Lamine Yamal', flag: '🇪🇸', pos: 'FW', club: 'Barcelona', num: '19', c1: '#a50044', c2: '#fcd34d', ucl: false },
  { name: 'Frenkie de Jong', flag: '🇳🇱', pos: 'MF', club: 'Barcelona', num: '21', c1: '#a50044', c2: '#1d4ed8', ucl: false },
  { name: 'Raphinha', flag: '🇧🇷', pos: 'FW', club: 'Barcelona', num: '11', c1: '#a50044', c2: '#1d4ed8', ucl: false },
  { name: 'Jules Koundé', flag: '🇫🇷', pos: 'DF', club: 'Barcelona', num: '23', c1: '#a50044', c2: '#1d4ed8', ucl: false },
  { name: 'Jamal Musiala', flag: '🇩🇪', pos: 'MF', club: 'Bayern Munich', num: '42', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Florian Wirtz', flag: '🇩🇪', pos: 'MF', club: 'Bayer Leverkusen', num: '10', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Granit Xhaka', flag: '🇨🇭', pos: 'MF', club: 'Bayer Leverkusen', num: '34', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Jeremie Frimpong', flag: '🇳🇱', pos: 'DF', club: 'Bayer Leverkusen', num: '30', c1: '#0f172a', c2: '#f59e0b', ucl: false },
  { name: 'Jonathan Tah', flag: '🇩🇪', pos: 'DF', club: 'Bayer Leverkusen', num: '4', c1: '#1d4ed8', c2: '#0f172a', ucl: false },
  { name: 'Alexis Mac Allister', flag: '🇦🇷', pos: 'MF', club: 'Liverpool', num: '10', c1: '#c8102e', c2: '#111827', ucl: false },
  { name: 'Dominik Szoboszlai', flag: '🇭🇺', pos: 'MF', club: 'Liverpool', num: '8', c1: '#c8102e', c2: '#111827', ucl: false },
  { name: 'Darwin Núñez', flag: '🇺🇾', pos: 'FW', club: 'Liverpool', num: '9', c1: '#c8102e', c2: '#111827', ucl: false },
  { name: 'Luis Díaz', flag: '🇨🇴', pos: 'FW', club: 'Liverpool', num: '7', c1: '#c8102e', c2: '#111827', ucl: false },
  { name: 'Enzo Fernández', flag: '🇦🇷', pos: 'MF', club: 'Chelsea', num: '8', c1: '#034694', c2: '#111827', ucl: false },
  { name: 'Moisés Caicedo', flag: '🇪🇨', pos: 'MF', club: 'Chelsea', num: '25', c1: '#034694', c2: '#111827', ucl: false },
  { name: 'Cole Palmer', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Chelsea', num: '20', c1: '#034694', c2: '#111827', ucl: false },
  { name: 'Nicolas Jackson', flag: '🇸🇳', pos: 'FW', club: 'Chelsea', num: '15', c1: '#034694', c2: '#111827', ucl: false },
  { name: 'Bruno Fernandes', flag: '🇵🇹', pos: 'MF', club: 'Manchester United', num: '8', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Marcus Rashford', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'FW', club: 'Manchester United', num: '10', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Rasmus Højlund', flag: '🇩🇰', pos: 'FW', club: 'Manchester United', num: '11', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Alejandro Garnacho', flag: '🇦🇷', pos: 'FW', club: 'Manchester United', num: '17', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Kobbie Mainoo', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'MF', club: 'Manchester United', num: '37', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Lisandro Martínez', flag: '🇦🇷', pos: 'DF', club: 'Manchester United', num: '6', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'André Onana', flag: '🇨🇲', pos: 'GK', club: 'Manchester United', num: '24', c1: '#dc2626', c2: '#111827', ucl: false },
  { name: 'Giorgio Chiellini', flag: '🇮🇹', pos: 'DF', club: 'Juventus', num: '3', c1: '#d4d4d8', c2: '#0f172a', ucl: false },
  { name: 'Leonardo Bonucci', flag: '🇮🇹', pos: 'DF', club: 'Juventus', num: '19', c1: '#d4d4d8', c2: '#0f172a', ucl: false },
  { name: 'Fabio Cannavaro', flag: '🇮🇹', pos: 'DF', club: 'Real Madrid', num: '5', c1: '#d1d5db', c2: '#111827', ucl: false },
  { name: 'Cesc Fàbregas', flag: '🇪🇸', pos: 'MF', club: 'Chelsea', num: '4', c1: '#034694', c2: '#111827', ucl: false },
  { name: 'Alexis Sánchez', flag: '🇨🇱', pos: 'FW', club: 'Inter Milan', num: '7', c1: '#0284c7', c2: '#0f172a', ucl: false },
  { name: 'Romelu Lukaku', flag: '🇧🇪', pos: 'FW', club: 'Napoli', num: '9', c1: '#0284c7', c2: '#111827', ucl: false },
  { name: 'Victor Osimhen', flag: '🇳🇬', pos: 'FW', club: 'Galatasaray', num: '45', c1: '#f59e0b', c2: '#dc2626', ucl: false },
  { name: 'Khvicha Kvaratskhelia', flag: '🇬🇪', pos: 'FW', club: 'Napoli', num: '77', c1: '#0284c7', c2: '#111827', ucl: false },
  { name: 'Lautaro Martínez', flag: '🇦🇷', pos: 'FW', club: 'Inter Milan', num: '10', c1: '#0284c7', c2: '#0f172a', ucl: false },
  { name: 'Nicolò Barella', flag: '🇮🇹', pos: 'MF', club: 'Inter Milan', num: '23', c1: '#0284c7', c2: '#0f172a', ucl: false },
  { name: 'Alessandro Bastoni', flag: '🇮🇹', pos: 'DF', club: 'Inter Milan', num: '95', c1: '#0284c7', c2: '#0f172a', ucl: false },
  { name: 'Federico Dimarco', flag: '🇮🇹', pos: 'DF', club: 'Inter Milan', num: '32', c1: '#0284c7', c2: '#0f172a', ucl: false },
  { name: 'Gianluigi Donnarumma', flag: '🇮🇹', pos: 'GK', club: 'Paris Saint-Germain', num: '99', c1: '#1d4ed8', c2: '#0f172a', ucl: false },
  { name: 'Marquinhos', flag: '🇧🇷', pos: 'DF', club: 'Paris Saint-Germain', num: '5', c1: '#1d4ed8', c2: '#0f172a', ucl: false },
  { name: 'Achraf Hakimi', flag: '🇲🇦', pos: 'DF', club: 'Paris Saint-Germain', num: '2', c1: '#1d4ed8', c2: '#0f172a', ucl: true } // Won UCL with Real Madrid 2017–18
];


const CRICKET_BASE = [
  // --- ICC TROPHY WINNERS (trophy: true) ---
  // (Senior ICC Men's Events: ODI CWC, T20 WC, CT, WTC)
  { name: 'Virat Kohli', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '18', c1: '#1e40af', c2: '#dc2626', trophy: true }, // CWC 2011, CT 2013, T20 WC 2024
  { name: 'Rohit Sharma', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '45', c1: '#1e40af', c2: '#ea580c', trophy: true }, // T20 WC 2007 & 2024, CT 2013
  { name: 'MS Dhoni', flag: '🇮🇳', pos: 'WK', club: 'India', num: '7', c1: '#1e40af', c2: '#eab308', trophy: true }, // T20 WC 2007, CWC 2011, CT 2013
  { name: 'Jasprit Bumrah', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '93', c1: '#1e40af', c2: '#0f172a', trophy: true }, // T20 WC 2024
  { name: 'Hardik Pandya', flag: '🇮🇳', pos: 'AR', club: 'India', num: '33', c1: '#1e40af', c2: '#eab308', trophy: true }, // T20 WC 2024
  { name: 'Ravindra Jadeja', flag: '🇮🇳', pos: 'AR', club: 'India', num: '8', c1: '#1e40af', c2: '#16a34a', trophy: true }, // CT 2013, T20 WC 2024
  { name: 'Suryakumar Yadav', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '63', c1: '#1e40af', c2: '#22c55e', trophy: true }, // T20 WC 2024
  { name: 'Axar Patel', flag: '🇮🇳', pos: 'AR', club: 'India', num: '20', c1: '#1e40af', c2: '#f59e0b', trophy: true }, // T20 WC 2024
  { name: 'Kuldeep Yadav', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '23', c1: '#1e40af', c2: '#0b2342', trophy: true }, // T20 WC 2024
  { name: 'Arshdeep Singh', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '2', c1: '#1e40af', c2: '#0284c7', trophy: true }, // T20 WC 2024
  { name: 'Mohammed Siraj', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '13', c1: '#1e40af', c2: '#0d1b3c', trophy: true }, // T20 WC 2024 squad
  { name: 'Rishabh Pant', flag: '🇮🇳', pos: 'WK', club: 'India', num: '17', c1: '#1e40af', c2: '#dc2626', trophy: true }, // T20 WC 2024
  { name: 'Yuzvendra Chahal', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '3', c1: '#1e40af', c2: '#0f172a', trophy: true }, // T20 WC 2024 squad
  { name: 'Sachin Tendulkar', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '10', c1: '#1e40af', c2: '#ea580c', trophy: true }, // CWC 2011, CT 2002
  { name: 'Yuvraj Singh', flag: '🇮🇳', pos: 'AR', club: 'India', num: '12', c1: '#1e40af', c2: '#eab308', trophy: true }, // CT 2002, T20 WC 2007, CWC 2011
  { name: 'Gautam Gambhir', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '5', c1: '#1e40af', c2: '#16a34a', trophy: true }, // T20 WC 2007, CWC 2011
  { name: 'Virender Sehwag', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '44', c1: '#1e40af', c2: '#ea580c', trophy: true }, // CT 2002, T20 WC 2007, CWC 2011
  { name: 'Zaheer Khan', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '34', c1: '#1e40af', c2: '#0f172a', trophy: true }, // CT 2002, CWC 2011
  { name: 'Harbhajan Singh', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '27', c1: '#1e40af', c2: '#f59e0b', trophy: true }, // CT 2002, T20 WC 2007, CWC 2011
  { name: 'Suresh Raina', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '48', c1: '#1e40af', c2: '#eab308', trophy: true }, // CWC 2011, CT 2013
  { name: 'Bhuvneshwar Kumar', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '15', c1: '#1e40af', c2: '#0c2620', trophy: true }, // CT 2013
  { name: 'Shikhar Dhawan', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '25', c1: '#1e40af', c2: '#ea580c', trophy: true }, // CT 2013
  { name: 'Kapil Dev', flag: '🇮🇳', pos: 'AR', club: 'India', num: '4', c1: '#1e40af', c2: '#eab308', trophy: true }, // CWC 1983
  { name: 'Pat Cummins', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '30', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2015/2023, T20 WC 2021, WTC 2023
  { name: 'Mitchell Starc', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '56', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2015/2023, T20 WC 2021, WTC 2023
  { name: 'Steve Smith', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '49', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2015/2023, T20 WC 2021, WTC 2023
  { name: 'David Warner', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '31', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2015/2023, T20 WC 2021, WTC 2023
  { name: 'Travis Head', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '62', c1: '#eab308', c2: '#0f172a', trophy: true }, // WTC 2023, CWC 2023
  { name: 'Glenn Maxwell', flag: '🇦🇺', pos: 'AR', club: 'Australia', num: '32', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2015/2023, T20 WC 2021
  { name: 'Josh Hazlewood', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '38', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2015/2023, T20 WC 2021, WTC 2023
  { name: 'Adam Zampa', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '88', c1: '#eab308', c2: '#0f172a', trophy: true }, // T20 WC 2021, CWC 2023
  { name: 'Ricky Ponting', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '14', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 1999/2003/2007, CT 2006/2009
  { name: 'Shane Warne', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '23', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 1999
  { name: 'Glenn McGrath', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '11', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 1999/2003/2007
  { name: 'Adam Gilchrist', flag: '🇦🇺', pos: 'WK', club: 'Australia', num: '17', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 1999/2003/2007
  { name: 'Brett Lee', flag: '🇦🇺', pos: 'BOWL', club: 'Australia', num: '58', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2003, CT 2006/2009
  { name: 'Michael Clarke', flag: '🇦🇺', pos: 'BAT', club: 'Australia', num: '23', c1: '#eab308', c2: '#0f172a', trophy: true }, // CWC 2007/2015, CT 2006/2009
  { name: 'Ben Stokes', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'AR', club: 'England', num: '55', c1: '#0284c7', c2: '#dc2626', trophy: true }, // CWC 2019, T20 WC 2022
  { name: 'Jos Buttler', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'WK', club: 'England', num: '63', c1: '#0284c7', c2: '#dc2626', trophy: true }, // CWC 2019, T20 WC 2022
  { name: 'Joe Root', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'BAT', club: 'England', num: '66', c1: '#0284c7', c2: '#0f172a', trophy: true }, // CWC 2019
  { name: 'Eoin Morgan', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'BAT', club: 'England', num: '16', c1: '#0284c7', c2: '#dc2626', trophy: true }, // CWC 2019
  { name: 'Jofra Archer', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'BOWL', club: 'England', num: '22', c1: '#0284c7', c2: '#dc2626', trophy: true }, // CWC 2019
  { name: 'Moeen Ali', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'AR', club: 'England', num: '18', c1: '#0284c7', c2: '#dc2626', trophy: true }, // CWC 2019, T20 WC 2022
  { name: 'Sam Curran', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'AR', club: 'England', num: '58', c1: '#0284c7', c2: '#dc2626', trophy: true }, // T20 WC 2022
  { name: 'Liam Livingstone', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'AR', club: 'England', num: '23', c1: '#0284c7', c2: '#dc2626', trophy: true }, // T20 WC 2022
  { name: 'Stuart Broad', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'BOWL', club: 'England', num: '8', c1: '#0284c7', c2: '#0f172a', trophy: true }, // T20 WC 2010
  { name: 'Kevin Pietersen', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'BAT', club: 'England', num: '24', c1: '#0284c7', c2: '#0f172a', trophy: true }, // T20 WC 2010
  { name: 'Chris Gayle', flag: '🇯🇲', pos: 'BAT', club: 'West Indies', num: '45', c1: '#881337', c2: '#eab308', trophy: true }, // CT 2004, T20 WC 2012/2016
  { name: 'Daren Sammy', flag: '🇱🇨', pos: 'AR', club: 'West Indies', num: '88', c1: '#881337', c2: '#eab308', trophy: true }, // T20 WC 2012/2016
  { name: 'Marlon Samuels', flag: '🇯🇲', pos: 'BAT', club: 'West Indies', num: '7', c1: '#881337', c2: '#eab308', trophy: true }, // T20 WC 2012/2016
  { name: 'Dwayne Bravo', flag: '🇹🇹', pos: 'AR', club: 'West Indies', num: '47', c1: '#881337', c2: '#eab308', trophy: true }, // CT 2004, T20 WC 2012/2016
  { name: 'Andre Russell', flag: '🇯🇲', pos: 'AR', club: 'West Indies', num: '12', c1: '#881337', c2: '#eab308', trophy: true }, // T20 WC 2012/2016
  { name: 'Sunil Narine', flag: '🇹🇹', pos: 'BOWL', club: 'West Indies', num: '74', c1: '#881337', c2: '#eab308', trophy: true }, // T20 WC 2012
  { name: 'Brian Lara', flag: '🇹🇹', pos: 'BAT', club: 'West Indies', num: '9', c1: '#881337', c2: '#eab308', trophy: true }, // CT 2004
  { name: 'Shivnarine Chanderpaul', flag: '🇬🇾', pos: 'BAT', club: 'West Indies', num: '45', c1: '#881337', c2: '#eab308', trophy: true }, // CT 2004
  { name: 'Kane Williamson', flag: '🇳🇿', pos: 'BAT', club: 'New Zealand', num: '22', c1: '#0f172a', c2: '#f8fafc', trophy: true }, // WTC 2021
  { name: 'Tim Southee', flag: '🇳🇿', pos: 'BOWL', club: 'New Zealand', num: '38', c1: '#0f172a', c2: '#f8fafc', trophy: true }, // WTC 2021
  { name: 'Trent Boult', flag: '🇳🇿', pos: 'BOWL', club: 'New Zealand', num: '18', c1: '#0f172a', c2: '#f8fafc', trophy: true }, // WTC 2021
  { name: 'Ross Taylor', flag: '🇳🇿', pos: 'BAT', club: 'New Zealand', num: '3', c1: '#0f172a', c2: '#f8fafc', trophy: true }, // WTC 2021
  { name: 'Kumar Sangakkara', flag: '🇱🇰', pos: 'WK', club: 'Sri Lanka', num: '11', c1: '#1e3a8a', c2: '#eab308', trophy: true }, // CT 2002, T20 WC 2014
  { name: 'Mahela Jayawardene', flag: '🇱🇰', pos: 'BAT', club: 'Sri Lanka', num: '27', c1: '#1e3a8a', c2: '#eab308', trophy: true }, // CT 2002, T20 WC 2014
  { name: 'Muttiah Muralitharan', flag: '🇱🇰', pos: 'BOWL', club: 'Sri Lanka', num: '8', c1: '#1e3a8a', c2: '#eab308', trophy: true }, // CWC 1996, CT 2002
  { name: 'Lasith Malinga', flag: '🇱🇰', pos: 'BOWL', club: 'Sri Lanka', num: '99', c1: '#1e3a8a', c2: '#eab308', trophy: true }, // T20 WC 2014
  { name: 'Sanath Jayasuriya', flag: '🇱🇰', pos: 'AR', club: 'Sri Lanka', num: '7', c1: '#1e3a8a', c2: '#eab308', trophy: true }, // CWC 1996, CT 2002
  { name: 'Babar Azam', flag: '🇵🇰', pos: 'BAT', club: 'Pakistan', num: '56', c1: '#065f46', c2: '#f8fafc', trophy: true }, // CT 2017
  { name: 'Fakhar Zaman', flag: '🇵🇰', pos: 'BAT', club: 'Pakistan', num: '39', c1: '#065f46', c2: '#f8fafc', trophy: true }, // CT 2017
  { name: 'Sarfaraz Ahmed', flag: '🇵🇰', pos: 'WK', club: 'Pakistan', num: '54', c1: '#065f46', c2: '#f8fafc', trophy: true }, // CT 2017
  { name: 'Shadab Khan', flag: '🇵🇰', pos: 'AR', club: 'Pakistan', num: '7', c1: '#065f46', c2: '#f8fafc', trophy: true }, // CT 2017
  { name: 'Imran Khan', flag: '🇵🇰', pos: 'AR', club: 'Pakistan', num: '8', c1: '#065f46', c2: '#f8fafc', trophy: true }, // CWC 1992
  { name: 'Wasim Akram', flag: '🇵🇰', pos: 'BOWL', club: 'Pakistan', num: '3', c1: '#065f46', c2: '#f8fafc', trophy: true }, // CWC 1992
  { name: 'Waqar Younis', flag: '🇵🇰', pos: 'BOWL', club: 'Pakistan', num: '99', c1: '#065f46', c2: '#f8fafc', trophy: false }, // Missed 1992 WC injured; 0 ICC titles
  { name: 'Shahid Afridi', flag: '🇵🇰', pos: 'AR', club: 'Pakistan', num: '10', c1: '#065f46', c2: '#f8fafc', trophy: true }, // T20 WC 2009
  { name: 'Younis Khan', flag: '🇵🇰', pos: 'BAT', club: 'Pakistan', num: '75', c1: '#065f46', c2: '#f8fafc', trophy: true }, // T20 WC 2009

  // --- ICC TROPHY NON-WINNERS (trophy: false) ---
  { name: 'Shubman Gill', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '77', c1: '#1e40af', c2: '#0d1d45', trophy: false },
  { name: 'KL Rahul', flag: '🇮🇳', pos: 'WK', club: 'India', num: '1', c1: '#1e40af', c2: '#082f31', trophy: false },
  { name: 'Mohammed Shami', flag: '🇮🇳', pos: 'BOWL', club: 'India', num: '11', c1: '#1e40af', c2: '#0f172a', trophy: false },
  { name: 'Shreyas Iyer', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '96', c1: '#1e40af', c2: '#0f172a', trophy: false },
  { name: 'Yashasvi Jaiswal', flag: '🇮🇳', pos: 'BAT', club: 'India', num: '64', c1: '#1e40af', c2: '#0f172a', trophy: false },
  { name: 'James Anderson', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pos: 'BOWL', club: 'England', num: '20', c1: '#0284c7', c2: '#0f172a', trophy: false },
  { name: 'Brendon McCullum', flag: '🇳🇿', pos: 'WK', club: 'New Zealand', num: '42', c1: '#0f172a', c2: '#fff6e5', trophy: false },
  { name: 'Martin Guptill', flag: '🇳🇿', pos: 'BAT', club: 'New Zealand', num: '31', c1: '#0f172a', c2: '#0f172a', trophy: false },
  { name: 'Rachin Ravindra', flag: '🇳🇿', pos: 'AR', club: 'New Zealand', num: '8', c1: '#0f172a', c2: '#0f172a', trophy: false },
  { name: 'AB de Villiers', flag: '🇿🇦', pos: 'WK', club: 'South Africa', num: '17', c1: '#15803d', c2: '#eab308', trophy: false },
  { name: 'Dale Steyn', flag: '🇿🇦', pos: 'BOWL', club: 'South Africa', num: '8', c1: '#15803d', c2: '#0f172a', trophy: false },
  { name: 'Hashim Amla', flag: '🇿🇦', pos: 'BAT', club: 'South Africa', num: '1', c1: '#15803d', c2: '#eab308', trophy: false },
  { name: 'Kagiso Rabada', flag: '🇿🇦', pos: 'BOWL', club: 'South Africa', num: '25', c1: '#15803d', c2: '#0f172a', trophy: false },
  { name: 'Quinton de Kock', flag: '🇿🇦', pos: 'WK', club: 'South Africa', num: '12', c1: '#15803d', c2: '#0f172a', trophy: false },
  { name: 'Faf du Plessis', flag: '🇿🇦', pos: 'BAT', club: 'South Africa', num: '18', c1: '#15803d', c2: '#eab308', trophy: false },
  { name: 'Temba Bavuma', flag: '🇿🇦', pos: 'BAT', club: 'South Africa', num: '13', c1: '#15803d', c2: '#0f172a', trophy: false },
  { name: 'Shaheen Afridi', flag: '🇵🇰', pos: 'BOWL', club: 'Pakistan', num: '10', c1: '#065f46', c2: '#f8fafc', trophy: false },
  { name: 'Mohammad Rizwan', flag: '🇵🇰', pos: 'WK', club: 'Pakistan', num: '16', c1: '#065f46', c2: '#f8fafc', trophy: false },
  { name: 'Naseem Shah', flag: '🇵🇰', pos: 'BOWL', club: 'Pakistan', num: '71', c1: '#065f46', c2: '#f8fafc', trophy: false },
  { name: 'Shakib Al Hasan', flag: '🇧🇩', pos: 'AR', club: 'Bangladesh', num: '75', c1: '#047857', c2: '#dc2626', trophy: false },
  { name: 'Tamim Iqbal', flag: '🇧🇩', pos: 'BAT', club: 'Bangladesh', num: '28', c1: '#047857', c2: '#dc2626', trophy: false },
  { name: 'Mushfiqur Rahim', flag: '🇧🇩', pos: 'WK', club: 'Bangladesh', num: '15', c1: '#047857', c2: '#dc2626', trophy: false },
  { name: 'Mustafizur Rahman', flag: '🇧🇩', pos: 'BOWL', club: 'Bangladesh', num: '90', c1: '#047857', c2: '#dc2626', trophy: false },
  { name: 'Rashid Khan', flag: '🇦🇫', pos: 'BOWL', club: 'Afghanistan', num: '19', c1: '#2563eb', c2: '#dc2626', trophy: false },
  { name: 'Mohammad Nabi', flag: '🇦🇫', pos: 'AR', club: 'Afghanistan', num: '7', c1: '#2563eb', c2: '#dc2626', trophy: false },
  { name: 'Ibrahim Zadran', flag: '🇦🇫', pos: 'BAT', club: 'Afghanistan', num: '18', c1: '#2563eb', c2: '#dc2626', trophy: false },
  { name: 'Rahmanullah Gurbaz', flag: '🇦🇫', pos: 'WK', club: 'Afghanistan', num: '21', c1: '#2563eb', c2: '#dc2626', trophy: false },
  { name: 'Nicholas Pooran', flag: '🇹🇹', pos: 'WK', club: 'West Indies', num: '29', c1: '#881337', c2: '#eab308', trophy: false },
  { name: 'Shimron Hetmyer', flag: '🇬🇾', pos: 'BAT', club: 'West Indies', num: '2', c1: '#881337', c2: '#eab308', trophy: false },
  { name: 'Alzarri Joseph', flag: '🇦🇬', pos: 'BOWL', club: 'West Indies', num: '8', c1: '#881337', c2: '#eab308', trophy: false }
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
