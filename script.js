const CRICKET_POS = {All:'All', BAT:'Batters', BOWL:'Bowlers', AR:'All-rounders', WK:'Wicketkeepers'};
const CRICKET_PLAYERS = [
['Virat Kohli','🇮🇳','BAT','India','18','#f44336','#8b0f1d',true],
['Rohit Sharma','🇮🇳','BAT','India','45','#ff9f1c','#7a2d00',true],
['MS Dhoni','🇮🇳','WK','India','7','#f6d365','#d93f2d',true],
['Jasprit Bumrah','🇮🇳','BOWL','India','93','#1b4f9c','#0a1730',true],
['Pat Cummins','🇦🇺','BOWL','Australia','20','#f3c623','#0a0a0a',true],
['Ben Stokes','🏴','AR','England','55','#1e2a38','#8f1d17',true],
['Jos Buttler','🏴','WK','England','63','#0b1f4d','#7db0ff',true],
['Shubman Gill','🇮🇳','BAT','India','77','#1a6dff','#0d1d45',true],
['KL Rahul','🇮🇳','WK','India','1','#1d6f6d','#082f31',false],
['Hardik Pandya','🇮🇳','AR','India','33','#f9c74f','#8d2f1f',true],
['Ravindra Jadeja','🇮🇳','AR','India','8','#f7b801','#0a4d8a',true],
['Travis Head','🇦🇺','BAT','Australia','62','#1f5bb5','#07192b',true],
['Kagiso Rabada','🇿🇦','BOWL','South Africa','25','#0b7a75','#082d2f',false],
['Suryakumar Yadav','🇮🇳','BAT','India','63','#171d4a','#d81b60',false],
['Joe Root','🏴','BAT','England','66','#f1f1f1','#2d2d2d',true],
['David Warner','🇦🇺','BAT','Australia','31','#e26310','#4a1200',true],
['Bhuvneshwar Kumar','🇮🇳','BOWL','India','13','#1d7a64','#0c2620',true],
['Sam Curran','🏴','AR','England','3','#1a3b85','#e7b10c',false],
['Andre Russell','🇧🇩','AR','West Indies','12','#e62b2b','#2a0a0d',true],
['Kuldeep Yadav','🇮🇳','BOWL','India','23','#1a73b8','#0b2342',true],
['Adam Zampa','🇦🇺','BOWL','Australia','18','#a1d6ff','#1d3f64',true],
['Liam Livingstone','🏴','AR','England','8','#b3d5ff','#1a2448',false],
['Glenn Maxwell','🇦🇺','AR','Australia','32','#1d9bf0','#0d1f39',true],
['Rashid Khan','🇦🇫','BOWL','Afghanistan','19','#0a2e4b','#a5d6ff',true],
['Shaheen Afridi','🇵🇰','BOWL','Pakistan','10','#0c4a6e','#d8f3ff',false],
['Mohammed Siraj','🇮🇳','BOWL','India','13','#4372ff','#0d1b3c',true],
['Faf du Plessis','🇿🇦','BAT','South Africa','18','#0f9d58','#073d2e',false],
['Kane Williamson','🇳🇿','BAT','New Zealand','22','#0c5f7a','#d3f0ff',true],
['Quinton de Kock','🇿🇦','WK','South Africa','12','#aef1ff','#0b2d5b',false],
['Eoin Morgan','🏴','BAT','England','16','#7f8dd8','#1e1b4b',true],
['Chris Gayle','🇯🇲','BAT','West Indies','45','#7f1d1d','#facc15',true],
['Dwayne Bravo','🇹🇹','AR','West Indies','7','#fdd835','#2a2a2a',true],
['Kieron Pollard','🇹🇹','AR','West Indies','55','#2b7fff','#0b1b3a',true],
['Sunil Narine','🇹🇹','BOWL','West Indies','27','#d4d4d8','#1f2937',true],
['Lasith Malinga','🇱🇰','BOWL','Sri Lanka','99','#e1b12c','#0f172a',true],
['Angelo Mathews','🇱🇰','AR','Sri Lanka','99','#f97316','#221100',false],
['Mahela Jayawardene','🇱🇰','BAT','Sri Lanka','27','#e11d48','#1f2937',true],
['Tillakaratne Dilshan','🇱🇰','BAT','Sri Lanka','23','#fbbf24','#1f2937',false],
['Kumar Sangakkara','🇱🇰','WK','Sri Lanka','11','#dbeafe','#1f2937',true],
['Sanath Jayasuriya','🇱🇰','AR','Sri Lanka','7','#fbbf24','#0f172a',true],
['Muttiah Muralitharan','🇱🇰','BOWL','Sri Lanka','8','#9fe870','#1d4d3b',true],
['Chaminda Vaas','🇱🇰','BOWL','Sri Lanka','58','#f59e0b','#1f2937',false],
['Upul Tharanga','🇱🇰','BAT','Sri Lanka','21','#60a5fa','#0f172a',false],
['Thisara Perera','🇱🇰','AR','Sri Lanka','15','#3b82f6','#0f172a',false],
['Nuwan Kulasekara','🇱🇰','BOWL','Sri Lanka','19','#84cc16','#1e293b',false],
['Dilshan Madushanka','🇱🇰','BOWL','Sri Lanka','82','#c084fc','#1f2937',false],
['Dinesh Chandimal','🇱🇰','WK','Sri Lanka','72','#e879f9','#1e293b',false],
['Dimuth Karunaratne','🇱🇰','BAT','Sri Lanka','16','#a3e635','#1f2937',false],
['Lasith Embuldeniya','🇱🇰','BOWL','Sri Lanka','45','#6ee7b7','#0f172a',false],
['Pathum Nissanka','🇱🇰','BAT','Sri Lanka','31','#93c5fd','#0f172a',false],
['Steve Smith','🇦🇺','BAT','Australia','49','#1b5fbf','#0b1220',true],
['Mitchell Starc','🇦🇺','BOWL','Australia','56','#0ea5e9','#0f172a',true],
['Josh Hazlewood','🇦🇺','BOWL','Australia','38','#ff6b6b','#1f2937',true],
['Nathan Lyon','🇦🇺','BOWL','Australia','88','#4ade80','#0f172a',true],
['Cameron Green','🇦🇺','AR','Australia','31','#8b5cf6','#1f2937',true],
['Marcus Stoinis','🇦🇺','AR','Australia','17','#f87171','#0f172a',true],
['Alex Carey','🇦🇺','WK','Australia','14','#fbbf24','#111827',true],
['Mitchell Marsh','🇦🇺','AR','Australia','8','#fca5a5','#1f2937',false],
['Sean Abbott','🇦🇺','BOWL','Australia','21','#94a3b8','#0f172a',false],
['Aaron Finch','🇦🇺','BAT','Australia','5','#f59e0b','#1f2937',true],
['Ross Taylor','🇳🇿','BAT','New Zealand','3','#4ade80','#0f172a',false],
['Brendon McCullum','🇳🇿','WK','New Zealand','42','#0066cc','#fff6e5',true],
['Martin Guptill','🇳🇿','BAT','New Zealand','31','#5eead4','#0f172a',false],
['Chris Cairns','🇳🇿','AR','New Zealand','38','#60a5fa','#0f172a',true],
['Brian Lara','🇹🇹','BAT','West Indies','9','#f59e0b','#0f172a',false],
['Shivnarine Chanderpaul','🇬🇾','BAT','West Indies','45','#00c2a8','#0f172a',false],
['Hashim Amla','🇿🇦','BAT','South Africa','81','#4ade80','#0f172a',false],
['Temba Bavuma','🇿🇦','BAT','South Africa','13','#fbbf24','#1f2937',false],
['AB de Villiers','🇿🇦','WK','South Africa','17','#94a3b8','#111827',false],
['Dale Steyn','🇿🇦','BOWL','South Africa','8','#0ea5e9','#0f172a',false],
['Imran Tahir','🇿🇦','BOWL','South Africa','99','#f59e0b','#111827',false],
['Morne Morkel','🇿🇦','BOWL','South Africa','48','#c084fc','#1f2937',false],
['Keshav Maharaj','🇿🇦','BOWL','South Africa','32','#60a5fa','#0f172a',false],
['Tabraiz Shamsi','🇿🇦','BOWL','South Africa','31','#f97216','#0f172a',false],
['Jonny Bairstow','🏴','WK','England','52','#22d3ee','#0f172a',true],
['Jimmy Neesham','🇳🇿','AR','New Zealand','38','#2dd4bf','#0f172a',true],
['Trent Boult','🇳🇿','BOWL','New Zealand','18','#ef4444','#0f172a',true],
['Mark Chapman','🇳🇿','BAT','New Zealand','10','#93c5fd','#0f172a',false],
['Colin Munro','🇳🇿','BAT','New Zealand','21','#93c5fd','#111827',false],
['Tom Curran','🏴','BOWL','England','23','#c084fc','#1f2937',false],
['Ben Cutting','🇳🇿','AR','New Zealand','9','#8b5cf6','#1f2937',false],
['Colin de Grandhomme','🇳🇿','AR','New Zealand','8','#f59e0b','#111827',false],
['Daryl Mitchell','🇳🇿','AR','New Zealand','88','#facc15','#0f172a',true],
['Rachin Ravindra','🇳🇿','AR','New Zealand','8','#4ade80','#0f172a',true],
['Lockie Ferguson','🇳🇿','BOWL','New Zealand','23','#00c2a8','#0f172a',false],
['Marnus Labuschagne','🇦🇺','BAT','Australia','27','#facc15','#0f172a',true],
['Steven Finn','🏴','BOWL','England','4','#60a5fa','#0f172a',false],
['Stuart Broad','🏴','BOWL','England','8','#fca5a5','#1f2937',true],
['James Anderson','🏴','BOWL','England','20','#bfdbfe','#0f172a',true],
['Moeen Ali','🏴','AR','England','18','#fbbf24','#0f172a',true],
['Jofra Archer','🏴','BOWL','England','22','#ef4444','#0f172a',true],
['Adil Rashid','🏴','BOWL','England','3','#4ade80','#0f172a',true],
['Sam Billings','🏴','WK','England','16','#f9a8d4','#0f172a',false],
['Phil Salt','🏴','WK','England','24','#1d4ed8','#0f172a',false],
['Mark Wood','🏴','BOWL','England','35','#f87171','#1f2937',false],
['Liam Plunkett','🏴','BOWL','England','22','#93c5fd','#0f172a',false],
['Jason Roy','🏴','BAT','England','5','#f97316','#0f172a',true],
['Harry Brook','🏴','BAT','England','18','#93c5fd','#0f172a',false],
['Reece Topley','🏴','BOWL','England','14','#38bdf8','#0f172a',false],
['Ollie Pope','🏴','WK','England','15','#34d399','#0f172a',false],
['Shakib Al Hasan','🇧🇩','AR','Bangladesh','75','#f59e0b','#0f172a',false],
['Mustafizur Rahman','🇧🇩','BOWL','Bangladesh','90','#e879f9','#0f172a',false],
['Tamim Iqbal','🇧🇩','BAT','Bangladesh','27','#60a5fa','#111827',false],
['Mushfiqur Rahim','🇧🇩','WK','Bangladesh','15','#4f46e5','#0f172a',false],
['Mahmudullah','🇧🇩','AR','Bangladesh','8','#fbbf24','#111827',false],
['Liton Das','🇧🇩','WK','Bangladesh','32','#93c5fd','#0f172a',false],
['Mehidy Hasan Miraz','🇧🇩','BOWL','Bangladesh','18','#facc15','#111827',false],
['Soumya Sarkar','🇧🇩','BAT','Bangladesh','75','#fca5a5','#0f172a',false],
['Taskin Ahmed','🇧🇩','BOWL','Bangladesh','29','#c084fc','#0f172a',false],
['Afif Hossain','🇧🇩','BAT','Bangladesh','11','#22d3ee','#0f172a',false],
['Taijul Islam','🇧🇩','BOWL','Bangladesh','13','#f9a8d4','#111827',false],
['Mohammad Nabi','🇦🇫','AR','Afghanistan','20','#86efac','#0f172a',false],
['Najibullah Zadran','🇦🇫','BAT','Afghanistan','27','#fbbf24','#0f172a',false],
['Mohammad Naeem','🇦🇫','BAT','Afghanistan','22','#93c5fd','#0f172a',false],
['Noor Ali Zadran','🇦🇫','BAT','Afghanistan','11','#b4f0ff','#0f172a',false],
['Hamid Hassan','🇦🇫','BOWL','Afghanistan','14','#fca5a5','#111827',false],
['Mujeeb Ur Rahman','🇦🇫','BOWL','Afghanistan','83','#99f6e4','#0f172a',false],
['Gulbadin Naib','🇦🇫','AR','Afghanistan','12','#f5980b','#1f2937',false],
['Naveen-ul-Haq','🇦🇫','BOWL','Afghanistan','19','#4ade80','#0f172a',false],
['Ibrahim Zadran','🇦🇫','BAT','Afghanistan','2','#22d3ee','#0f172a',false],
['Rahmat Shah','🇦🇫','BAT','Afghanistan','10','#f5d0fe','#111827',false],
['Darwish Rasooli','🇦🇫','BAT','Afghanistan','9','#f8fafc','#0f172a',false],
['Mohammad Shahzad','🇦🇫','WK','Afghanistan','55','#93c5fd','#0f172a',false],
['Fazalhaq Farooqi','🇦🇫','BOWL','Afghanistan','77','#a78bfa','#0f172a',false],
['Azmatullah Omarzai','🇦🇫','AR','Afghanistan','17','#60a5fa','#111827',false],
['Chris Woakes','🏴','BOWL','England','37','#1d4ed8','#0f172a',true],
['Tom Banton','🏴','WK','England','12','#f9a8d4','#0f172a',false],
['Samit Patel','🏴','AR','England','12','#7dd3fc','#0f172a',false],
['Phil Mustard','🏴','WK','England','1','#facc15','#0f172a',false],
['James Vince','🏴','BAT','England','19','#f59e0b','#111827',false],
['Alex Hales','🏴','BAT','England','30','#a78bfa','#0f172a',true],
['Dan Lawrence','🏴','BAT','England','28','#c4b5fd','#0f172a',false],
['Ollie Robinson','🏴','BOWL','England','31','#93c5fd','#0f172a',false],
['Craig Overton','🏴','BOWL','England','49','#fb7185','#0f172a',false],
['Matt Parkinson','🏴','BOWL','England','7','#2dd4bf','#0f172a',false],
['Saqib Mahmood','🏴','BOWL','England','19','#fca5a5','#1f2937',false],
['Gus Atkinson','🏴','BOWL','England','43','#7dd3fc','#0f172a',false],
['Brydon Carse','🏴','BOWL','England','39','#fbbf24','#1f2937',false],
['Jacob Bethell','🏴','AR','England','52','#93c5fd','#0f172a',false],
['Dawid Malan','🏴','BAT','England','18','#7dd3fc','#0f172a',false],
['Venkatesh Iyer','🇮🇳','AR','India','21','#f87171','#111827',false],
['Ruturaj Gaikwad','🇮🇳','BAT','India','31','#facc15','#0f172a',false],
['Yashasvi Jaiswal','🇮🇳','BAT','India','64','#2563eb','#0f172a',false],
['Prasidh Krishna','🇮🇳','BOWL','India','28','#a78bfa','#0f172a',false],
['Piyush Chawla','🇮🇳','BOWL','India','22','#fca5a5','#111827',true],
['Mukesh Kumar','🇮🇳','BOWL','India','19','#86efac','#0f172a',false],
['Arshdeep Singh','🇮🇳','BOWL','India','2','#60a5fa','#0f172a',true],
['Ishan Kishan','🇮🇳','WK','India','18','#f472b6','#0f172a',false],
['Rishabh Pant','🇮🇳','WK','India','17','#fbbf24','#111827',false],
['Babar Azam','🇵🇰','BAT','Pakistan','56','#0f766e','#d1fae5',false],
['Mohammad Rizwan','🇵🇰','WK','Pakistan','75','#93c5fd','#0f172a',false],
['Fakhar Zaman','🇵🇰','BAT','Pakistan','74','#fbbf24','#111827',false],
['Haris Rauf','🇵🇰','BOWL','Pakistan','56','#7dd3fc','#0f172a',false],
['Naseem Shah','🇵🇰','BOWL','Pakistan','7','#ef4444','#0f172a',false],
['Salman Ali Agha','🇵🇰','AR','Pakistan','16','#60a5fa','#0f172a',false],
['Irfan Khan','🇵🇰','AR','Pakistan','39','#fca5a5','#111827',false],
['Imam-ul-Haq','🇵🇰','BAT','Pakistan','81','#93c5fd','#0f172a',false],
['Shadab Khan','🇵🇰','BOWL','Pakistan','76','#fbbf24','#0f172a',false],
['Usman Qadir','🇵🇰','BOWL','Pakistan','13','#94a3b8','#0f172a',false],
['Sarfaraz Ahmed','🇵🇰','WK','Pakistan','10','#60a5fa','#0f172a',true],
['Azam Khan','🇵🇰','WK','Pakistan','39','#f472b6','#111827',false],
['Haider Ali','🇵🇰','BAT','Pakistan','18','#fcd34d','#0f172a',false],
['Asif Ali','🇵🇰','BAT','Pakistan','16','#a78bfa','#0f172a',false],
['Haris Sohail','🇵🇰','BAT','Pakistan','28','#f9a8d4','#0f172a',false],
['Saud Shakeel','🇵🇰','BAT','Pakistan','55','#a9f3d0','#0f172a',false],
['Khushdil Shah','🇵🇰','AR','Pakistan','20','#d8b4fe','#0f172a',false],
['Zaman Khan','🇵🇰','BOWL','Pakistan','15','#34d399','#0f172a',false],
['Iftikhar Ahmed','🇵🇰','AR','Pakistan','28','#fca5a5','#111827',false],
['Shaan Masood','🇵🇰','BAT','Pakistan','25','#93c5fd','#0f172a',false],
['Kamran Ghulam','🇵🇰','BAT','Pakistan','59','#fbbf24','#111827',false],
['David Willey','🏴','AR','England','18','#7dd3fc','#0f172a',true],
['Liam Dawson','🏴','BOWL','England','25','#a78bfa','#0f172a',false],
['Mason Crane','🏴','BOWL','England','14','#60a5fa','#0f172a',false],
['Harry Tector','🇮🇪','BAT','Ireland','17','#22c55e','#0f172a',false],
['Gareth Delany','🇮🇪','AR','Ireland','4','#7dd3fc','#111827',false],
['Neil Rock','🇮🇪','WK','Ireland','35','#fbbf24','#111827',false],
['George Dockrell','🇮🇪','BOWL','Ireland','17','#a78bfa','#0f172a',false],
['Lorcan Tucker','🇮🇪','WK','Ireland','42','#fb7185','#0f172a',false],
['John Anderson','🇮🇪','AR','Ireland','22','#60a5fa','#0f172a',false],
['Keith Barker','🇿🇦','BOWL','South Africa','35','#fbbf24','#0f172a',false],
['Reagan Denness','🇿🇦','BAT','South Africa','26','#93c5fd','#111827',false],
['Mike Hendricks','🇿🇦','AR','South Africa','11','#f9a8d4','#0f172a',false],
['Craig Young','🇮🇪','BOWL','Ireland','5','#7dd3fc','#0f172a',false],
['Benny Howell','🏴','AR','England','28','#e879f9','#0f172a',false],
['Mark Adair','🇮🇪','BOWL','Ireland','35','#93c5fd','#0f172a',false],
['Andrew Balbirnie','🇮🇪','BAT','Ireland','26','#f59e0b','#111827',false],
['Curtis Campher','🇮🇪','AR','Ireland','34','#a78bfa','#0f172a',false],
['Paul Stirling','🇮🇪','BAT','Ireland','24','#49d7b0','#0f172a',false],
['George Coetzee','🇿🇦','BOWL','South Africa','65','#fbbf24','#0f172a',false],
['Ben Cooper','🇮🇪','BAT','Ireland','15','#7dd3fc','#111827',false],
['Graham Hume','🇮🇪','BOWL','Ireland','16','#93c5fd','#111827',false],
['Bradley Evans','🇮🇪','BAT','Ireland','21','#facc15','#0f172a',false],
['Peter Moor','🇿🇼','WK','Zimbabwe','15','#22d3ee','#0f172a',false],
['Andrew McBrine','🇮🇪','BOWL','Ireland','2','#38bdf8','#0f172a',false],
['William Porterfield','🇮🇪','BAT','Ireland','9','#fbbf24','#0f172a',false],
['Rory Burns','🏴','BAT','England','18','#94a3b8','#0f172a',false],
['Dom Sibley','🏴','BAT','England','22','#8b5cf6','#0f172a',false],
['Zak Crawley','🏴','BAT','England','61','#fbbf24','#0f172a',false],
['Ben Duckett','🏴','BAT','England','63','#a78bfa','#0f172a',false],
['Joe Denly','🏴','BAT','England','34','#f59e0b','#0f172a',false],
['Haseeb Hameed','🏴','BAT','England','9','#7dd3fc','#0f172a',false],
['Keaton Jennings','🏴','BAT','England','68','#a5b4fc','#0f172a',false],
['Sam Robson','🏴','BAT','England','2','#fca5a5','#111827',false],
['Jack Leach','🏴','BOWL','England','16','#86efac','#0f172a',false],
['James Bracey','🏴','WK','England','58','#f9a8d4','#0f172a',false],
['Ben Foakes','🏴','WK','England','13','#93c5fd','#0f172a',true],
['Matthew Potts','🏴','BOWL','England','39','#fbbf24','#0f172a',false],
['Ollie Stone','🏴','BOWL','England','15','#60a5fa','#0f172a',false],
['Irfan Pathan','🇮🇳','BOWL','India','29','#c084fc','#0f172a',true],
['Ajinkya Rahane','🇮🇳','BAT','India','27','#38bdf8','#0f172a',false],
['Cheteshwar Pujara','🇮🇳','BAT','India','25','#fbbf24','#0f172a',false],
['Karun Nair','🇮🇳','BAT','India','12','#93c5fd','#0f172a',false],
['Hanuma Vihari','🇮🇳','BAT','India','24','#22d3ee','#0f172a',false],
['Mayank Agarwal','🇮🇳','BAT','India','18','#fca5a5','#111827',false],
['Shreyas Iyer','🇮🇳','BAT','India','40','#f59e0b','#0f172a',false],
['Nitish Kumar Reddy','🇮🇳','AR','India','42','#a78bfa','#0f172a',false],
['Shikhar Dhawan','🇮🇳','BAT','India','18','#60a5fa','#0f172a',false],
['Murali Vijay','🇮🇳','BAT','India','2','#fbbf24','#0f172a',false],
['Prithvi Shaw','🇮🇳','BAT','India','47','#a5b4fc','#0f172a',false],
['R Ashwin','🇮🇳','BOWL','India','99','#22d3ee','#0f172a',true],
['Ishant Sharma','🇮🇳','BOWL','India','38','#fca5a5','#111827',false],
['Umesh Yadav','🇮🇳','BOWL','India','19','#93c5fd','#0f172a',true],
['Ajit Agarkar','🇮🇳','BOWL','India','12','#4ade80','#0f172a',false],
['Zaheer Khan','🇮🇳','BOWL','India','54','#ef4444','#0f172a',true],
['Darren Sammy','🇹🇹','AR','West Indies','81','#fbbf24','#0f172a',true],
['Ramnaresh Sarwan','🇬🇾','BAT','West Indies','18','#c084fc','#0f172a',false],
['Narsingh Deonarine','🇬🇾','AR','West Indies','8','#93c5fd','#0f172a',false],
['Marlon Samuels','🇬🇾','AR','West Indies','44','#fca5a5','#111827',false],
['Suresh Raina','🇮🇳','BAT','India','48','#60a5fa','#0f172a',true],
['Yuvraj Singh','🇮🇳','AR','India','12','#facc15','#0f172a',true],
['Sreesanth','🇮🇳','BOWL','India','6','#fda4af','#111827',true],
['Dinesh Mongia','🇮🇳','BAT','India','51','#a78bfa','#0f172a',false],
['Robin Uthappa','🇮🇳','WK','India','17','#fbbf24','#111827',false],
['Manish Pandey','🇮🇳','BAT','India','18','#93c5fd','#0f172a',false],
['Kedar Jadhav','🇮🇳','AR','India','18','#4ade80','#0f172a',false],
['Mayank Markande','🇮🇳','BOWL','India','52','#86efac','#0f172a',false],
['Naman Ojha','🇮🇳','WK','India','45','#60a5fa','#0f172a',false],
['Rinku Singh','🇮🇳','BAT','India','33','#fbbf24','#0f172a',false],
['Shardul Thakur','��🇳','BOWL','India','54','#fca5a5','#111827',false],
['Yuzvendra Chahal','🇮🇳','BOWL','India','3','#99f6e4','#0f172a',true],
['Tim Southee','🇳🇿','BOWL','New Zealand','38','#60a5fa','#0f172a',true],
['Mitchell Santner','🇳🇿','BOWL','New Zealand','74','#0ea5e9','#0f172a',true],
['Tom Latham','🇳🇿','WK','New Zealand','9','#fbbf24','#0f172a',false],
['Devon Conway','🇳🇿','WK','New Zealand','18','#93c5fd','#0f172a',false],
['Henry Nicholls','🇳🇿','BAT','New Zealand','57','#f59e0b','#0f172a',false],
['Will Young','🇳🇿','BAT','New Zealand','82','#fca5a5','#111827',false],
['Daryl Mitchell','🇳🇿','AR','New Zealand','88','#facc15','#0f172a',true],
['Keshav Maharaj','🇿🇦','BOWL','South Africa','32','#60a5fa','#0f172a',false],
['Anrich Nortje','🇿🇦','BOWL','South Africa','16','#fbbf24','#0f172a',false],
['Lungi Ngidi','🇿🇦','BOWL','South Africa','16','#93c5fd','#111827',false],
['Heinrich Klaasen','🇿🇦','WK','South Africa','97','#13b5ff','#0f172a',false],
['David Miller','🇿🇦','BAT','South Africa','18','#a78bfa','#0f172a',false],
['Reeza Hendricks','🇿🇦','BAT','South Africa','18','#fca5a5','#111827',false],
['Aiden Markram','🇿🇦','AR','South Africa','4','#34d399','#0f172a',false],
['Marco Jansen','🇿🇦','AR','South Africa','8','#fbbf24','#0f172a',false],
['Rassie van der Dussen','🇿🇦','BAT','South Africa','7','#93c5fd','#0f172a',false],
['Janneman Malan','🇿🇦','BAT','South Africa','17','#a5b4fc','#0f172a',false],
['Gerald Coetzee','🇿🇦','BOWL','South Africa','16','#fca5a5','#111827',false],
['Migael Pretorius','🇿🇦','BOWL','South Africa','15','#60a5fa','#0f172a',false],
['Bhanuka Rajapaksa','🇱🇰','BAT','Sri Lanka','22','#fbbf24','#111827',false],
['Charith Asalanka','🇱🇰','BAT','Sri Lanka','8','#93c5fd','#0f172a',false]
];

const sportModal = document.getElementById('sportModal');
let sportMode = 'football';

const labelsFor = mode => mode === 'football' ? POS : CRICKET_POS;
const sourceFor = mode => mode === 'football' ? P : CRICKET_PLAYERS;

function updateFilterButtons(mode) {
  const labels = labelsFor(mode);
  $('filters').innerHTML = Object.entries(labels)
    .map(([key, label]) => `<button class="chip${key === 'All' ? ' on' : ''}" data-k="${key}">${label}</button>`)
    .join('');
}

function setSportMode(mode) {
  sportMode = mode;
  list = sourceFor(mode).slice();
  i = 0;
  picked = null;
  busy = false;
  updateFilterButtons(mode);
  render();
  sportModal.classList.remove('show');
}

const originalRender = render;
render = function() {
  const labels = labelsFor(sportMode);
  track.innerHTML = list.map((p, k) => `
    <div class="card${picked === p ? ' picked' : ''}" data-k="${k}" style="--c1:${p.c1};--c2:${p.c2};animation-delay:${Math.min(k * 40, 400)}ms">
      <div class="num">${p.num}</div>
      <div class="ini">${(p.n.split(' ').map(w => w[0]).slice(0, 2).join('')).toUpperCase()}</div>
      <div class="flag">${p.f}</div>
      <div class="content">
        <h3>${p.n}</h3>
        <p>${p.club}</p>
        <span class="tag">${labels[p.pos]}</span>
      </div>
    </div>
  `).join('');
  update(true);
};

const originalChoose = choose;
choose = function() {
  const p = list[i];
  if (!p) return;
  picked = p;
  document.querySelectorAll('.card').forEach((c, k) => c.classList.toggle('picked', k === i));
  const panel = $('panel');
  panel.style.setProperty('--c1', p.c1);
  panel.style.setProperty('--c2', p.c2);
  $('pb').textContent = p.num;
  $('pn').textContent = `${p.n} ${p.f}`;
  $('pd').textContent = `${labelsFor(sportMode)[p.pos]} · ${p.club}`;

  const u = $('pu');
  if (sportMode === 'football') {
    u.textContent = p.ucl ? '🏆 Champions League winner' : 'No Champions League title';
    u.style.color = p.ucl ? 'var(--accent)' : '#dce7ff';
  } else {
    u.textContent = p.trophy ? '🏆 ICC trophy winner' : 'No ICC trophy';
    u.style.color = p.trophy ? 'var(--accent)' : '#dce7ff';
  }
  u.style.fontWeight = '600';
  panel.classList.remove('pop');
  panel.offsetWidth;
  panel.classList.add('show', 'pop');
};

$('filters').onclick = e => {
  const b = e.target.closest('.chip');
  if (!b) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === b));
  const source = sourceFor(sportMode);
  list = b.dataset.k === 'All' ? source.slice() : source.filter(p => p.pos === b.dataset.k);
  i = 0;
  render();
};

document.querySelectorAll('.sport-btn').forEach(button => {
  button.addEventListener('click', () => setSportMode(button.dataset.sport));
});

sportModal.classList.add('show');
render();

if (typeof originalRender === 'function') {
  // no-op; keeps the original football rendering behavior while allowing the sport switch
}
