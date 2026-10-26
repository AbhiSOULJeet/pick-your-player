const P0=[
["Lionel Messi","🇦🇷","FW","Inter Miami","10","#75aadb","#1b3a6b"],
["Cristiano Ronaldo","🇵🇹","FW","Al Nassr","7","#c8102e","#4a0a14"],
["Neymar Jr","🇧🇷","FW","Santos","10","#f4c20d","#0b6b3a"],
["Kylian Mbappé","🇫🇷","FW","Real Madrid","9","#1f4fd8","#0a1a4d"],
["Erling Haaland","🇳🇴","FW","Manchester City","9","#6cabdd","#1c2c5b"],
["Luka Modrić","🇭🇷","MF","AC Milan","10","#e53935","#3b0d12"],
["Zinedine Zidane","🇫🇷","MF","Real Madrid","5","#e8e8f0","#5b5f80"],
["Ronaldinho","🇧🇷","FW","Barcelona","10","#a50044","#004d98"],
["Xavi Hernández","🇪🇸","MF","Barcelona","6","#004d98","#a50044"],
["Andrés Iniesta","🇪🇸","MF","Barcelona","8","#a50044","#1b2a5c"],
["Thierry Henry","🇫🇷","FW","Arsenal","14","#d4202c","#4a0b10"],
["Kaká","🇧🇷","MF","AC Milan","22","#d00027","#111"],
["Robert Lewandowski","🇵🇱","FW","Barcelona","9","#a50044","#162d6b"],
["Mohamed Salah","🇪🇬","FW","Liverpool","11","#c8102e","#5a0714"],
["Kevin De Bruyne","🇧🇪","MF","Napoli","17","#6cabdd","#12305e"],
["Harry Kane","🏴󠁧󠁢󠁥󠁮󠁧󠁿","FW","Bayern Munich","9","#dc052d","#4a0214"],
["Karim Benzema","🇫🇷","FW","Al Hilal","9","#1b6fd8","#071a45"],
["Zlatan Ibrahimović","🇸🇪","FW","AC Milan","11","#fecb00","#006aa7"],
["Wayne Rooney","🏴󠁧󠁢󠁥󠁮󠁧󠁿","FW","Man United","10","#da291c","#3b0a06"],
["Steven Gerrard","🏴󠁧󠁢󠁥󠁮󠁧󠁿","MF","Liverpool","8","#c8102e","#3d0610"],
["Frank Lampard","🏴󠁧󠁢󠁥󠁮󠁧󠁿","MF","Chelsea","8","#034694","#021a3a"],
["Andrea Pirlo","🇮🇹","MF","Juventus","21","#2a2a2a","#8a8a8a"],
["Gianluigi Buffon","🇮🇹","GK","Juventus","1","#3a3a3a","#0b0b0b"],
["Iker Casillas","🇪🇸","GK","Real Madrid","1","#7b5ee0","#25185a"],
["Virgil van Dijk","🇳🇱","DF","Liverpool","4","#c8102e","#2d0509"],
["Sergio Ramos","🇪🇸","DF","Real Madrid","4","#e0e0f0","#4a4f7a"],
["Son Heung-min","🇰🇷","FW","LAFC","7","#1a2a5e","#6b8cd8"],
["Vinícius Jr","🇧🇷","FW","Real Madrid","7","#e8e8f0","#6a5acd"],
["Jude Bellingham","🏴󠁧󠁢󠁥󠁮󠁧󠁿","MF","Real Madrid","5","#e8e8f0","#2b3a8a"],
["Ronaldo Nazário","🇧🇷","FW","Real Madrid","9","#f4c20d","#0b6b3a"]
].map(([n,f,pos,club,num,c1,c2])=>({n,f,pos,club,num,c1,c2}));
const CL={'Man City':['#6cabdd','#12305e'],'Real Madrid':['#e8e8f0','#5a5f8a'],'Barcelona':['#a50044','#004d98'],'Man United':['#da291c','#3b0a06'],'Liverpool':['#c8102e','#3d0610'],'Chelsea':['#034694','#021a3a'],'Arsenal':['#d4202c','#4a0b10'],'Bayern':['#dc052d','#4a0214'],'Atlético':['#cb3524','#1b2a6b'],'Juventus':['#2a2a2a','#8a8a8a'],'Inter':['#0a3a8c','#050f2b'],'AC Milan':['#d00027','#111111'],'Napoli':['#12a0d7','#0a3a6b'],'Roma':['#8e1f2f','#c9921a'],'PSG':['#004170','#da0812'],'Valencia':['#f58220','#222222'],'Lazio':['#87d8f7','#1b4a7a'],'Benfica':['#e30613','#4a0409'],'Monaco':['#e30613','#7a0710'],'Leicester':['#003090','#0a1a4d'],'Boca Juniors':['#00539f','#c9a300']};
const FL={ar:'🇦🇷',br:'🇧🇷',fr:'🇫🇷',es:'🇪🇸',pt:'🇵🇹',it:'🇮🇹',de:'🇩🇪',en:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',wa:'🏴󠁧󠁢󠁷󠁬󠁳󠁿',nl:'🇳🇱',be:'🇧🇪',no:'🇳🇴',sn:'🇸🇳',ng:'🇳🇬',ci:'🇨🇮',cm:'🇨🇲',ma:'🇲🇦',co:'🇨🇴',uy:'🇺🇾',rs:'🇷🇸',at:'🇦🇹',ie:'🇮🇪',ua:'🇺🇦',cz:'🇨🇿',ge:'🇬🇪',ca:'🇨🇦',si:'🇸🇮'};
const P=P0.concat(`Luis Suárez,uy,FW,Barcelona,9
Sergio Agüero,ar,FW,Man City,10
Didier Drogba,ci,FW,Chelsea,11
Samuel Eto'o,cm,FW,Barcelona,9
David Villa,es,FW,Valencia,7
Fernando Torres,es,FW,Liverpool,9
Raúl,es,FW,Real Madrid,7
Ruud van Nistelrooy,nl,FW,Man United,10
Robin van Persie,nl,FW,Arsenal,10
Andriy Shevchenko,ua,FW,AC Milan,7
Gabriel Batistuta,ar,FW,Roma,18
Francesco Totti,it,FW,Roma,10
Alessandro Del Piero,it,FW,Juventus,10
Filippo Inzaghi,it,FW,AC Milan,9
Miroslav Klose,de,FW,Lazio,11
Thomas Müller,de,FW,Bayern,25
Antoine Griezmann,fr,FW,Atlético,7
Olivier Giroud,fr,FW,AC Milan,9
Edinson Cavani,uy,FW,PSG,9
Gonzalo Higuaín,ar,FW,Real Madrid,9
Carlos Tevez,ar,FW,Man City,32
Radamel Falcao,co,FW,Monaco,9
Sadio Mané,sn,FW,Liverpool,10
Roberto Firmino,br,FW,Liverpool,9
Gabriel Jesus,br,FW,Arsenal,9
Rafael Leão,pt,FW,AC Milan,10
Victor Osimhen,ng,FW,Napoli,9
Lautaro Martínez,ar,FW,Inter,10
Marcus Rashford,en,FW,Man United,10
Raheem Sterling,en,FW,Man City,7
Bukayo Saka,en,FW,Arsenal,7
Phil Foden,en,FW,Man City,47
Michael Owen,en,FW,Liverpool,10
Jamie Vardy,en,FW,Leicester,9
Ángel Di María,ar,FW,Benfica,11
Arjen Robben,nl,FW,Bayern,10
Franck Ribéry,fr,FW,Bayern,7
Eden Hazard,be,FW,Chelsea,10
Romelu Lukaku,be,FW,Inter,9
Gareth Bale,wa,FW,Real Madrid,11
Luís Figo,pt,FW,Real Madrid,10
Rivaldo,br,FW,Barcelona,11
Pedro,es,FW,Barcelona,17
Raphinha,br,FW,Barcelona,11
Lamine Yamal,es,FW,Barcelona,19
Khvicha Kvaratskhelia,ge,FW,PSG,7
Paul Scholes,en,MF,Man United,18
David Beckham,en,MF,Man United,7
Ryan Giggs,wa,MF,Man United,11
Patrick Vieira,fr,MF,Arsenal,4
Cesc Fàbregas,es,MF,Arsenal,4
Xabi Alonso,es,MF,Liverpool,14
Sergio Busquets,es,MF,Barcelona,5
Toni Kroos,de,MF,Real Madrid,8
Bastian Schweinsteiger,de,MF,Bayern,31
Mesut Özil,de,MF,Arsenal,10
Michael Ballack,de,MF,Chelsea,13
N'Golo Kanté,fr,MF,Chelsea,7
Paul Pogba,fr,MF,Juventus,10
Casemiro,br,MF,Real Madrid,14
Bernardo Silva,pt,MF,Man City,20
Bruno Fernandes,pt,MF,Man United,8
Joshua Kimmich,de,MF,Bayern,6
İlkay Gündoğan,de,MF,Man City,8
Frenkie de Jong,nl,MF,Barcelona,21
Pedri,es,MF,Barcelona,8
Federico Valverde,uy,MF,Real Madrid,15
Declan Rice,en,MF,Arsenal,41
Martin Ødegaard,no,MF,Arsenal,8
Rodri,es,MF,Man City,16
Jamal Musiala,de,MF,Bayern,42
Florian Wirtz,de,MF,Liverpool,7
Clarence Seedorf,nl,MF,AC Milan,10
Gennaro Gattuso,it,MF,AC Milan,8
Claude Makélélé,fr,MF,Chelsea,4
Juan Román Riquelme,ar,MF,Boca Juniors,10
Pavel Nedvěd,cz,MF,Juventus,11
Roy Keane,ie,MF,Man United,16
Wesley Sneijder,nl,MF,Inter,10
Marco Verratti,it,MF,PSG,6
Thiago Alcântara,es,MF,Liverpool,6
James Rodríguez,co,MF,Real Madrid,10
Paolo Maldini,it,DF,AC Milan,3
Fabio Cannavaro,it,DF,Juventus,5
Alessandro Nesta,it,DF,AC Milan,13
Carles Puyol,es,DF,Barcelona,5
Gerard Piqué,es,DF,Barcelona,3
John Terry,en,DF,Chelsea,26
Rio Ferdinand,en,DF,Man United,5
Nemanja Vidić,rs,DF,Man United,15
Philipp Lahm,de,DF,Bayern,21
Dani Alves,br,DF,Barcelona,2
Marcelo,br,DF,Real Madrid,12
Roberto Carlos,br,DF,Real Madrid,3
Cafu,br,DF,AC Milan,2
Lúcio,br,DF,Bayern,3
Thiago Silva,br,DF,Chelsea,6
Marquinhos,br,DF,PSG,5
Giorgio Chiellini,it,DF,Juventus,3
Leonardo Bonucci,it,DF,Juventus,19
Raphaël Varane,fr,DF,Real Madrid,5
Trent Alexander-Arnold,en,DF,Liverpool,66
Achraf Hakimi,ma,DF,PSG,2
Kyle Walker,en,DF,Man City,2
Rúben Dias,pt,DF,Man City,3
Alphonso Davies,ca,DF,Bayern,19
Jordi Alba,es,DF,Barcelona,18
David Alaba,at,DF,Real Madrid,4
Ashley Cole,en,DF,Chelsea,3
Antonio Rüdiger,de,DF,Real Madrid,22
Manuel Neuer,de,GK,Bayern,1
Petr Čech,cz,GK,Chelsea,1
Edwin van der Sar,nl,GK,Man United,1
Oliver Kahn,de,GK,Bayern,1
Thibaut Courtois,be,GK,Real Madrid,1
Alisson,br,GK,Liverpool,1
Ederson,br,GK,Man City,31
David de Gea,es,GK,Man United,1
Gianluigi Donnarumma,it,GK,PSG,99
Jan Oblak,si,GK,Atlético,13`.split('\n').map(l=>{const[n,c,pos,club,num]=l.split(',');const[c1,c2]=CL[club];return{n,f:FL[c],pos,club,num,c1,c2}}));

const UW=new Set(`Lionel Messi|Cristiano Ronaldo|Neymar Jr|Erling Haaland|Luka Modrić|Zinedine Zidane|Ronaldinho|Xavi Hernández|Andrés Iniesta|Thierry Henry|Kaká|Robert Lewandowski|Mohamed Salah|Kevin De Bruyne|Karim Benzema|Wayne Rooney|Steven Gerrard|Frank Lampard|Andrea Pirlo|Iker Casillas|Virgil van Dijk|Sergio Ramos|Vinícius Jr|Jude Bellingham|Luis Suárez|Didier Drogba|Samuel Eto'o|David Villa|Fernando Torres|Raúl|Andriy Shevchenko|Alessandro Del Piero|Filippo Inzaghi|Thomas Müller|Olivier Giroud|Carlos Tevez|Sadio Mané|Roberto Firmino|Phil Foden|Ángel Di María|Arjen Robben|Franck Ribéry|Gareth Bale|Pedro|Khvicha Kvaratskhelia|Paul Scholes|David Beckham|Ryan Giggs|Cesc Fàbregas|Xabi Alonso|Sergio Busquets|Toni Kroos|Bastian Schweinsteiger|N'Golo Kanté|Casemiro|Bernardo Silva|Joshua Kimmich|İlkay Gündoğan|Federico Valverde|Rodri|Clarence Seedorf|Gennaro Gattuso|Claude Makélélé|Roy Keane|Wesley Sneijder|Thiago Alcântara|James Rodríguez|Paolo Maldini|Alessandro Nesta|Carles Puyol|Gerard Piqué|John Terry|Rio Ferdinand|Nemanja Vidić|Philipp Lahm|Dani Alves|Marcelo|Roberto Carlos|Cafu|Lúcio|Thiago Silva|Marquinhos|Raphaël Varane|Trent Alexander-Arnold|Achraf Hakimi|Kyle Walker|Rúben Dias|Alphonso Davies|Jordi Alba|David Alaba|Ashley Cole|Antonio Rüdiger|Manuel Neuer|Petr Čech|Edwin van der Sar|Oliver Kahn|Thibaut Courtois|Alisson|Ederson|Gianluigi Donnarumma`.split('|'));
P.forEach(p=>p.ucl=UW.has(p.n));
const hs=s=>[...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7)%360;
const iso=c=>c==='sc'?String.fromCodePoint(0x1F3F4,0xE0067,0xE0062,0xE0073,0xE0063,0xE0074,0xE007F):[...c.toUpperCase()].map(x=>String.fromCodePoint(127397+x.charCodeAt(0))).join('');
const seen=new Set(P.map(p=>p.n));
P.push(...`Dennis Bergkamp,nl,FW,Arsenal,10
Robert Pirès,fr,MF,Arsenal,7
Freddie Ljungberg,se,MF,Arsenal,8
Sol Campbell,en,DF,Arsenal,23
Gilberto Silva,br,MF,Arsenal,19
Jens Lehmann,de,GK,Arsenal,1
Kolo Touré,ci,DF,Arsenal,28
Emmanuel Adebayor,tg,FW,Arsenal,25
Gaël Clichy,fr,DF,Arsenal,22
Alexis Sánchez,cl,FW,Arsenal,7
Aaron Ramsey,wa,MF,Arsenal,16
Pierre-Emerick Aubameyang,ga,FW,Arsenal,14
Alexandre Lacazette,fr,FW,Arsenal,9
William Saliba,fr,DF,Arsenal,2
Gabriel Magalhães,br,DF,Arsenal,6
Kai Havertz,de,FW,Arsenal,29,1
Ben White,en,DF,Arsenal,4
Mikel Arteta,es,MF,Arsenal,8
Thomas Partey,gh,MF,Arsenal,5
Martin Zubimendi,es,MF,Arsenal,36
Theo Walcott,en,FW,Arsenal,14
Jack Wilshere,en,MF,Arsenal,10
Gabriel Martinelli,br,FW,Arsenal,11
Leandro Trossard,be,FW,Arsenal,19
Viktor Gyökeres,se,FW,Arsenal,14
Eberechi Eze,en,MF,Arsenal,10
César Azpilicueta,es,DF,Chelsea,28,1
Michael Essien,gh,MF,Chelsea,5
Juan Mata,es,MF,Chelsea,10,1
David Luiz,br,DF,Chelsea,4,1
Branislav Ivanović,rs,DF,Chelsea,2,1
Ramires,br,MF,Chelsea,7,1
Oscar,br,MF,Chelsea,11
Cole Palmer,en,MF,Chelsea,20
Mason Mount,en,MF,Chelsea,19,1
Reece James,en,DF,Chelsea,24,1
Mateo Kovačić,hr,MF,Chelsea,8,1
Jorginho,it,MF,Chelsea,5,1
Édouard Mendy,sn,GK,Chelsea,16,1
Kepa Arrizabalaga,es,GK,Chelsea,1,1
Enzo Fernández,ar,MF,Chelsea,8
Joe Cole,en,MF,Chelsea,10
Timo Werner,de,FW,Chelsea,11,1
Christopher Nkunku,fr,FW,Chelsea,18
Hakim Ziyech,ma,FW,Chelsea,22,1
Ricardo Carvalho,pt,DF,Chelsea,6,1
Paulo Ferreira,pt,DF,Chelsea,20,1
Florent Malouda,fr,MF,Chelsea,15
Nicolas Anelka,fr,FW,Chelsea,39
Christian Pulisic,us,FW,AC Milan,11,1
Nani,pt,FW,Man United,17,1
Patrice Evra,fr,DF,Man United,3,1
Michael Carrick,en,MF,Man United,16,1
Darren Fletcher,sc,MF,Man United,24,1
Anderson,br,MF,Man United,8,1
Owen Hargreaves,en,MF,Man United,4,1
Antonio Valencia,ec,FW,Man United,25
Park Ji-sung,kr,MF,Man United,13,1
Henrikh Mkhitaryan,am,MF,Man United,22
Harry Maguire,en,DF,Man United,5
Jadon Sancho,en,FW,Man United,25
Dimitar Berbatov,bg,FW,Man United,9
Ashley Young,en,FW,Man United,18
Jesse Lingard,en,MF,Man United,14
Luke Shaw,en,DF,Man United,23
Victor Lindelöf,se,DF,Man United,2
Bryan Mbeumo,cm,FW,Man United,19
Matheus Cunha,br,FW,Man United,10
Vincent Kompany,be,DF,Man City,4
David Silva,es,MF,Man City,21
Yaya Touré,ci,MF,Man City,42
Joe Hart,en,GK,Man City,1
John Stones,en,DF,Man City,5,1
Manuel Akanji,ch,DF,Man City,25,1
Julián Álvarez,ar,FW,Atlético,19,1
Riyad Mahrez,dz,FW,Man City,26,1
João Cancelo,pt,DF,Man City,7
Gareth Barry,en,MF,Man City,18
Aleksandar Kolarov,rs,DF,Man City,11
Pablo Zabaleta,ar,DF,Man City,5
Joleon Lescott,en,DF,Man City,6
Jamie Carragher,en,DF,Liverpool,23,1
Luis García,es,MF,Liverpool,10,1
Jordan Henderson,en,MF,Liverpool,14,1
Georginio Wijnaldum,nl,MF,Liverpool,5,1
Andy Robertson,sc,DF,Liverpool,26,1
Fabinho,br,MF,Liverpool,3,1
Luis Díaz,co,FW,Liverpool,7
Darwin Núñez,uy,FW,Liverpool,9
Dominik Szoboszlai,hu,MF,Liverpool,8
James Milner,en,MF,Liverpool,7,1
Pepe Reina,es,GK,Liverpool,25
Sami Hyypiä,fi,DF,Liverpool,4,1
Jerzy Dudek,pl,GK,Liverpool,1,1
Cody Gakpo,nl,FW,Liverpool,18
Diogo Jota,pt,FW,Liverpool,20
Alexander Isak,se,FW,Liverpool,9
Federico Chiesa,it,FW,Liverpool,14
Peter Crouch,en,FW,Liverpool,15
Dirk Kuyt,nl,FW,Liverpool,18
Jeremie Frimpong,nl,DF,Liverpool,30
Dele Alli,en,MF,Tottenham,20
Christian Eriksen,dk,MF,Tottenham,23
Hugo Lloris,fr,GK,Tottenham,1
Jermain Defoe,en,FW,Tottenham,18
Rafael van der Vaart,nl,MF,Tottenham,11
Ledley King,en,DF,Tottenham,26
James Maddison,en,MF,Tottenham,10
Robbie Keane,ie,FW,Tottenham,10
Eric Dier,en,DF,Tottenham,15
Toby Alderweireld,be,DF,Tottenham,4
Jan Vertonghen,be,DF,Tottenham,5
Mousa Dembélé,be,MF,Tottenham,19
Dejan Kulusevski,se,FW,Tottenham,21
Richarlison,br,FW,Tottenham,9
Cristian Romero,ar,DF,Tottenham,17
Pedro Porro,es,DF,Tottenham,23
Kieran Trippier,en,DF,Newcastle,15
Alan Shearer,en,FW,Newcastle,9
Bruno Guimarães,br,MF,Newcastle,39
Emiliano Martínez,ar,GK,Aston Villa,23
Ollie Watkins,en,FW,Aston Villa,11
Ivan Toney,en,FW,Brentford,17
Wilfried Zaha,ci,FW,Crystal Palace,11
Gylfi Sigurðsson,is,MF,Everton,10
Tim Cahill,au,MF,Everton,17
Leighton Baines,en,DF,Everton,3
Jordan Pickford,en,GK,Everton,1
Jarrod Bowen,en,FW,West Ham,20
Guti,es,MF,Real Madrid,14,1
Fernando Hierro,es,DF,Real Madrid,4,1
Michel Salgado,es,DF,Real Madrid,2,1
Iván Helguera,es,DF,Real Madrid,6,1
Pepe,pt,DF,Real Madrid,3,1
Dani Carvajal,es,DF,Real Madrid,2,1
Nacho,es,DF,Real Madrid,6,1
Lucas Vázquez,es,FW,Real Madrid,17,1
Marco Asensio,es,FW,Real Madrid,20,1
Álvaro Morata,es,FW,Atlético,19,1
Éder Militão,br,DF,Real Madrid,3,1
Eduardo Camavinga,fr,MF,Real Madrid,12,1
Aurélien Tchouaméni,fr,MF,Real Madrid,18,1
Rodrygo,br,FW,Real Madrid,11,1
Álvaro Arbeloa,es,DF,Real Madrid,17,1
Dani Ceballos,es,MF,Real Madrid,19,1
Fernando Morientes,es,FW,Monaco,9,1
Víctor Valdés,es,GK,Barcelona,1,1
Marc-André ter Stegen,de,GK,Barcelona,1
Ousmane Dembélé,fr,FW,PSG,10,1
Javier Mascherano,ar,MF,Barcelona,14,1
Éric Abidal,fr,DF,Barcelona,22,1
Seydou Keita,ml,MF,Barcelona,15,1
Henrik Larsson,se,FW,Barcelona,7,1
Deco,pt,MF,Barcelona,20,1
Ivan Rakitić,hr,MF,Barcelona,4,1
Samuel Umtiti,fr,DF,Barcelona,23
Ronald Araújo,uy,DF,Barcelona,4
Sergi Roberto,es,DF,Barcelona,20,1
Philippe Coutinho,br,MF,Barcelona,14,1
Rafael Márquez,mx,DF,Barcelona,4,1
Fermín López,es,MF,Barcelona,16
Pau Cubarsí,es,DF,Barcelona,2
Jules Koundé,fr,DF,Barcelona,23
Dani Olmo,es,MF,Barcelona,20
Diego Forlán,uy,FW,Atlético,7
Gabi,es,MF,Atlético,14
Koke,es,MF,Atlético,6
Diego Godín,uy,DF,Atlético,2
Diego Costa,es,FW,Atlético,19
Juanfran,es,DF,Atlético,20
Saúl Ñíguez,es,MF,Atlético,8
Rodrigo De Paul,ar,MF,Atlético,5
Diego Simeone,ar,MF,Atlético,14
Joaquín,es,FW,Real Betis,17
Roberto Soldado,es,FW,Valencia,9
Santi Cazorla,es,MF,Villarreal,8
Jesús Navas,es,FW,Sevilla,16
Mikel Oyarzabal,es,FW,Real Sociedad,10
Nico Williams,es,FW,Athletic Club,10
Iñaki Williams,gh,FW,Athletic Club,9
Aritz Aduriz,es,FW,Athletic Club,20
Iago Aspas,es,FW,Celta Vigo,10
Dani Parejo,es,MF,Villarreal,10
Gerard Moreno,es,FW,Villarreal,7
Santiago Cañizares,es,GK,Valencia,1
Gianluca Zambrotta,it,DF,AC Milan,19,1
Massimo Ambrosini,it,MF,AC Milan,23,1
Andrea Barzagli,it,DF,Juventus,15
Claudio Marchisio,it,MF,Juventus,8
Arturo Vidal,cl,MF,Bayern,23,1
Paulo Dybala,ar,FW,Roma,21
Mario Mandžukić,hr,FW,Juventus,17,1
Miralem Pjanić,ba,MF,Juventus,5
Nicolò Barella,it,MF,Inter,23
Javier Zanetti,ar,DF,Inter,4,1
Walter Samuel,ar,DF,Inter,25,1
Maicon,br,DF,Inter,13,1
Júlio César,br,GK,Inter,12,1
Samir Handanović,si,GK,Inter,1
Ivan Perišić,hr,FW,Inter,14
Milan Škriniar,sk,DF,Inter,37
Christian Vieri,it,FW,Inter,32
Adriano,br,FW,Inter,10
Hernán Crespo,ar,FW,Inter,9
Rui Costa,pt,MF,AC Milan,10,1
Marco Materazzi,it,DF,Inter,23,1
Dejan Stanković,rs,MF,Inter,5,1
Esteban Cambiasso,ar,MF,Inter,19,1
Diego Milito,ar,FW,Inter,22,1
Mario Balotelli,it,FW,Inter,45,1
Daniele De Rossi,it,MF,Roma,16
Edin Džeko,ba,FW,Roma,9
Radja Nainggolan,be,MF,Roma,4
Dries Mertens,be,FW,Napoli,14
Marek Hamšík,sk,MF,Napoli,17
Lorenzo Insigne,it,FW,Napoli,24
Kalidou Koulibaly,sn,DF,Napoli,26
Ciro Immobile,it,FW,Lazio,17
Sergej Milinković-Savić,rs,MF,Lazio,21
Hernanes,br,MF,Lazio,8
Fabio Quagliarella,it,FW,Sampdoria,27
Luca Toni,it,FW,Bayern,9
Theo Hernández,fr,DF,AC Milan,19
Mike Maignan,fr,GK,AC Milan,16
Dušan Vlahović,rs,FW,Juventus,9
Alessandro Bastoni,it,DF,Inter,95
Hakan Çalhanoğlu,tr,MF,Inter,20
David Trezeguet,fr,FW,Juventus,17
Mauro Icardi,ar,FW,Inter,9
Stephan El Shaarawy,it,FW,Roma,92
Lorenzo Pellegrini,it,MF,Roma,7
Federico Dimarco,it,DF,Inter,32
Marcus Thuram,fr,FW,Inter,9
Scott McTominay,sc,MF,Napoli,8
Gleison Bremer,br,DF,Juventus,3
Davide Frattesi,it,MF,Inter,16
Antonio Di Natale,it,FW,Udinese,10
Marco Reus,de,FW,Dortmund,11
Mats Hummels,de,DF,Dortmund,15
Julian Brandt,de,MF,Dortmund,19
Serge Gnabry,de,FW,Bayern,7,1
Leon Goretzka,de,MF,Bayern,8,1
Dayot Upamecano,fr,DF,Bayern,2
Lucas Hernández,fr,DF,PSG,21,1
Benjamin Pavard,fr,DF,Inter,28,1
Jérôme Boateng,de,DF,Bayern,17,1
Javi Martínez,es,MF,Bayern,8,1
Mario Gómez,de,FW,Bayern,33
Claudio Pizarro,pe,FW,Bayern,14,1
Roy Makaay,nl,FW,Bayern,9
Sami Khedira,de,MF,Real Madrid,6,1
Lukas Podolski,de,FW,Bayern,10
Julian Draxler,de,MF,Schalke,10
Klaas-Jan Huntelaar,nl,FW,Schalke,25
Xavi Simons,nl,MF,RB Leipzig,10
Granit Xhaka,ch,MF,Leverkusen,34
Bernd Leno,de,GK,Arsenal,1
Emre Can,de,MF,Dortmund,23
Mario Götze,de,MF,Dortmund,10
Leroy Sané,de,FW,Bayern,10
Kingsley Coman,fr,FW,Bayern,11,1
Niklas Süle,de,DF,Dortmund,25,1
Donyell Malen,nl,FW,Dortmund,21
Sébastien Haller,ci,FW,Dortmund,9
Patrik Schick,cz,FW,Leverkusen,14
Moussa Diaby,fr,FW,Leverkusen,19
Alejandro Grimaldo,es,DF,Leverkusen,20
Victor Boniface,ng,FW,Leverkusen,22
Serhou Guirassy,gn,FW,Dortmund,9
Michael Olise,fr,FW,Bayern,17
Presnel Kimpembe,fr,DF,PSG,3,1
Vitinha,pt,MF,PSG,17,1
João Neves,pt,MF,PSG,87,1
Nuno Mendes,pt,DF,PSG,25,1
Warren Zaïre-Emery,fr,MF,PSG,33,1
Désiré Doué,fr,FW,PSG,14,1
Bradley Barcola,fr,FW,PSG,29,1
Gonçalo Ramos,pt,FW,PSG,9,1
Dimitri Payet,fr,MF,Marseille,10
Mathieu Valbuena,fr,MF,Marseille,28
André-Pierre Gignac,fr,FW,Marseille,10
Juninho Pernambucano,br,MF,Lyon,8
Nabil Fekir,fr,MF,Lyon,18
Thomas Lemar,fr,MF,Monaco,11
Anthony Martial,fr,FW,Monaco,9
Wissam Ben Yedder,fr,FW,Monaco,10
Jonathan David,ca,FW,Lille,9
Samir Nasri,fr,MF,Arsenal,8
Yoann Gourcuff,fr,MF,Bordeaux,8
Pauleta,pt,FW,PSG,9
Matthijs de Ligt,nl,DF,Ajax,4
Donny van de Beek,nl,MF,Ajax,6
Dušan Tadić,rs,FW,Ajax,10
Memphis Depay,nl,FW,Barcelona,9
Denzel Dumfries,nl,DF,Inter,2
Hulk,br,FW,Porto,12
Nicolás Otamendi,ar,DF,Benfica,30
Ricardo Quaresma,pt,FW,Porto,7
Ben Chilwell,en,DF,Chelsea,21
Ruben Loftus-Cheek,en,MF,Chelsea,12
Tammy Abraham,en,FW,Chelsea,9
Alexis Mac Allister,ar,MF,Liverpool,10
Ryan Gravenberch,nl,MF,Liverpool,38
Ibrahima Konaté,fr,DF,Liverpool,5
Joël Matip,cm,DF,Liverpool,32,1
Naby Keïta,gn,MF,Liverpool,8,1
Divock Origi,be,FW,Liverpool,27,1
Amad Diallo,ci,FW,Man United,16
Rasmus Højlund,dk,FW,Man United,11
Kobbie Mainoo,en,MF,Man United,37
Alejandro Garnacho,ar,FW,Man United,17
Mohammed Kudus,gh,FW,Tottenham,20
Antoine Semenyo,gh,FW,Man City,42
Savinho,br,FW,Man City,26
Rúben Neves,pt,MF,Wolves,8
Pedro Neto,pt,FW,Chelsea,7
Raúl Jiménez,mx,FW,Wolves,9
James Ward-Prowse,en,MF,Southampton,8
Adam Lallana,en,MF,Liverpool,20
Brahim Díaz,ma,MF,Real Madrid,21,1
Arda Güler,tr,MF,Real Madrid,15
Endrick,br,FW,Real Madrid,16
Takefusa Kubo,jp,FW,Real Sociedad,14
Alexander Sørloth,no,FW,Villarreal,9
Joselu,es,FW,Real Madrid,14,1
Ansu Fati,es,FW,Barcelona,10
Iñigo Martínez,es,DF,Barcelona,5
Nicolò Zaniolo,it,MF,Roma,22
Sandro Tonali,it,MF,Newcastle,8
Ademola Lookman,ng,FW,Atalanta,11
Marten de Roon,nl,MF,Atalanta,15
Alejandro Gómez,ar,MF,Atalanta,10
Duván Zapata,co,FW,Atalanta,91
Josip Iličić,si,MF,Atalanta,72
Joshua Zirkzee,nl,FW,Man United,11
Jonathan Tah,de,DF,Bayern,4
Yann Sommer,ch,GK,Inter,1
Gregor Kobel,ch,GK,Dortmund,1
Rayan Cherki,fr,MF,Lyon,18
Sylvain Wiltord,fr,FW,Arsenal,11
Gianfranco Zola,it,FW,Chelsea,25
Eiður Guðjohnsen,is,FW,Barcelona,9,1
Teddy Sheringham,en,FW,Man United,10,1
Andy Cole,en,FW,Man United,9,1
Dwight Yorke,tt,FW,Man United,19,1
Jaap Stam,nl,DF,Man United,6,1
Edgar Davids,nl,MF,Juventus,26,1
Patrick Kluivert,nl,FW,Barcelona,9,1
Fernando Redondo,ar,MF,AC Milan,16,1
Santiago Solari,ar,MF,Real Madrid,21,1
Steve McManaman,en,MF,Real Madrid,17,1
Samuel Kuffour,gh,DF,Bayern,3,1
Stefan Effenberg,de,MF,Bayern,11,1
Giovane Élber,br,FW,Bayern,9,1
Mehmet Scholl,de,MF,Bayern,7,1`.split('\n').map(l=>{const[n,c,pos,club,num,w]=l.split(',');const[c1,c2]=CL[club]||[`hsl(${hs(club)} 55% 38%)`,`hsl(${(hs(club)+30)%360} 60% 16%)`];return{n,f:FL[c]||iso(c),pos,club,num,c1,c2,ucl:w==='1'}}).filter(p=>!seen.has(p.n)&&seen.add(p.n)).slice(0,350));

const RETIRED_PLAYERS = new Set([
  'Zinedine Zidane','Ronaldinho','Xavi Hernández','Andrés Iniesta','Thierry Henry','Kaká','Wayne Rooney','Steven Gerrard','Frank Lampard','Andrea Pirlo','Gianluigi Buffon','Iker Casillas','Virgil van Dijk','Sergio Ramos','Luka Modrić','Karim Benzema','Zlatan Ibrahimović','Gianluigi Buffon','David Beckham','Ryan Giggs','Paul Scholes','Carlos Tevez','Ruud van Nistelrooy','Robin van Persie','Andrew Cole','Andy Cole','Michael Owen','Raúl','Luis Suárez','Didier Drogba','Samuel Eto\'o','David Villa','Fernando Torres','Andriy Shevchenko','Gabriel Batistuta','Francesco Totti','Alessandro Del Piero','Filippo Inzaghi','Miroslav Klose','Thomas Müller','Antoine Griezmann','Olivier Giroud','Edinson Cavani','Gonzalo Higuaín','Radamel Falcao','Rivaldo','Pedro','Paul Scholes','Clarence Seedorf','Gennaro Gattuso','Marco Verratti','Paolo Maldini','Fabio Cannavaro','Alessandro Nesta','Carles Puyol','Gerard Piqué','John Terry','Rio Ferdinand','Nemanja Vidić','Philipp Lahm','Dani Alves','Marcelo','Roberto Carlos','Cafu','Lúcio','Thiago Silva','Marquinhos','Giorgio Chiellini','Leonardo Bonucci','Raphaël Varane','Jude Bellingham','Kylian Mbappé','Erling Haaland','Harry Kane','Mohamed Salah','Sergio Ramos','Vinícius Jr','Cesc Fàbregas','Xabi Alonso','Bastian Schweinsteiger','Bastian Florian','Mesut Özil','Michael Ballack','N\'Golo Kanté','Paul Pogba','Jordi Alba','David Alaba','Ashley Cole','Antonio Rüdiger','Manuel Neuer','Petr Čech','Edwin van der Sar','Oliver Kahn','Thibaut Courtois','Ederson','Gianluigi Donnarumma','Luis García','Jamie Carragher','Andy Robertson','Jordan Henderson','Pepe Reina','Peter Schmeichel','Sami Hyypiä','César Azpilicueta','Nani','Patrice Evra','Michael Carrick','Jesse Lingard','Darren Fletcher','Ashley Young','Wayne Rooney','Dani Carvajal','Pepe','Fernando Hierro','Rui Costa','Hernán Crespo','Robin van Persie'
]);
const LAST_ACTIVITY = {
  'Ronaldinho': 2011,
  'Zinedine Zidane': 2006,
  'Xavi Hernández': 2015,
  'Andrés Iniesta': 2018,
  'Thierry Henry': 2012,
  'Kaká': 2014,
  'Wayne Rooney': 2021,
  'Steven Gerrard': 2015,
  'Frank Lampard': 2014,
  'Andrea Pirlo': 2015,
  'Roberto Carlos': 2007,
  'Paolo Maldini': 2009,
  'Gianluigi Buffon': 2023,
  'Iker Casillas': 2020,
  'Sergio Ramos': 2023,
  'David Beckham': 2013,
  'Ryan Giggs': 2014,
  'Paul Scholes': 2013,
  'Raúl': 2018,
  'Didier Drogba': 2013,
  'Samuel Eto\'o': 2018,
  'David Villa': 2019,
  'Fernando Torres': 2018,
  'Andriy Shevchenko': 2012,
  'Francesco Totti': 2017,
  'Alessandro Del Piero': 2014,
  'Filippo Inzaghi': 2012,
  'Miroslav Klose': 2016,
  'Thomas Müller': 2025,
  'Antoine Griezmann': 2025,
  'Olivier Giroud': 2025,
  'Gonzalo Higuaín': 2019,
  'Radamel Falcao': 2022,
  'Rivaldo': 2003,
  'Pedro': 2024,
  'John Terry': 2017,
  'Rio Ferdinand': 2015,
  'Nemanja Vidić': 2016,
  'Philipp Lahm': 2017,
  'Dani Alves': 2023,
  'Marcelo': 2022,
  'Cafu': 2003,
  'Lúcio': 2012,
  'Thiago Silva': 2025,
  'Marquinhos': 2025,
  'Giorgio Chiellini': 2022,
  'Leonardo Bonucci': 2024,
  'Raphaël Varane': 2024,
  'David Alaba': 2025,
  'Ashley Cole': 2014,
  'Antonio Rüdiger': 2025,
  'Petr Čech': 2019,
  'Edwin van der Sar': 2011,
  'Oliver Kahn': 2008,
  'Thibaut Courtois': 2025,
  'Gianluigi Donnarumma': 2025,
  'Paul Pogba': 2024,
  'Mesut Özil': 2022,
  'Michael Ballack': 2012,
  'N\'Golo Kanté': 2025,
  'Jordi Alba': 2025,
  'Jamie Carragher': 2013,
  'Andy Robertson': 2025,
  'Jordan Henderson': 2024,
  'Pepe Reina': 2023,
  'Sami Hyypiä': 2009,
  'Roberto Firmino': 2024,
  'Illkay Gündoğan': 2025,
  'Jude Bellingham': 2025,
  'Kylian Mbappé': 2025,
  'Erling Haaland': 2025,
  'Harry Kane': 2025,
  'Mohamed Salah': 2025,
  'Vinícius Jr': 2025,
  'Karim Benzema': 2025,
  'Zlatan Ibrahimović': 2023
};

function getPlayerStatus(player) {
  if (LAST_ACTIVITY[player.n] !== undefined) {
    return { active: false, lastYear: LAST_ACTIVITY[player.n] };
  }
  if (RETIRED_PLAYERS.has(player.n)) {
    return { active: false, lastYear: 2024 };
  }
  return { active: true, lastYear: null };
}

const PLAYER_IMAGE_CACHE = new Map();
async function fetchPlayerImage(name) {
  if (PLAYER_IMAGE_CACHE.has(name)) return PLAYER_IMAGE_CACHE.get(name);
  const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages|pageterms&piprop=original&redirects=1&titles=${encodeURIComponent(name)}`;
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    const data = await res.json();
    const pages = data?.query?.pages || {};
    const page = Object.values(pages)[0];
    const imageUrl = page?.original?.source || page?.thumbnail?.source;
    PLAYER_IMAGE_CACHE.set(name, imageUrl || null);
    return imageUrl || null;
  } catch {
    PLAYER_IMAGE_CACHE.set(name, null);
    return null;
  }
}

const $=id=>document.getElementById(id);
const stage=$('stage'),track=$('track');
let list=P,i=0,picked=null,drag=null;
const POS={All:'All',FW:'Forwards',MF:'Midfield',DF:'Defenders',GK:'Keepers'};
const ini=n=>n.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();

$('filters').innerHTML=Object.entries(POS).map(([k,v])=>`<button class="chip${k==='All'?' on':''}" data-k="${k}">${v}</button>`).join('');
$('filters').onclick=e=>{
  const b=e.target.closest('.chip');if(!b)return;
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===b));
  list=b.dataset.k==='All'?P:P.filter(p=>p.pos===b.dataset.k);i=0;render();
};

async function hydratePlayerImages() {
  const cards = track.querySelectorAll('.player-image');
  for (const img of cards) {
    const name = img.dataset.name;
    const src = await fetchPlayerImage(name);
    if (src) {
      img.src = src;
      img.style.opacity = '1';
    } else {
      img.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 420'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#0f172a'/><stop offset='1' stop-color='#1d4ed8'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><circle cx='150' cy='140' r='62' fill='rgba(255,255,255,.18)'/><path d='M100 285c15-55 52-78 100-78s85 23 100 78v75H100z' fill='rgba(255,255,255,.18)'/><text x='50%' y='92%' text-anchor='middle' fill='white' font-family='sans-serif' font-size='18'>${name}</text></svg>`)}`;
    }
  }
}

function render(){
  const markup = list.map((p,k)=>{
    const status = getPlayerStatus(p);
    const chipText = status.active ? 'Active' : `Inactive · ${status.lastYear}`;
    return `<div class="card${picked===p?' picked':''}${status.active?' active-player':' inactive-player'}" data-k="${k}" style="--c1:${p.c1};--c2:${p.c2};animation-delay:${Math.min(k*40,400)}ms">
      <img class="player-image" data-name="${p.n}" alt="${p.n}" loading="lazy" />
      <div class="card-overlay"></div>
      <div class="num">${p.num}</div>
      <div class="ini">${ini(p.n)}</div>
      <div class="flag">${p.f}</div>
      <div class="card-status ${status.active ? 'is-active' : 'is-inactive'}">${chipText}</div>
      <div class="content">
        <h3>${p.n}</h3>
        <p>${p.club}</p>
        <span class="tag">${POS[p.pos]}</span>
      </div>
    </div>`;
  }).join('');
  track.innerHTML = markup;
  update(true);
  hydratePlayerImages();
}

function offset(){
  const c=track.children[i];if(!c)return 0;
  return stage.clientWidth/2-(c.offsetLeft+c.offsetWidth/2);
}
function update(instant){
  [...track.children].forEach((c,k)=>c.classList.toggle('active',k===i));
  if(instant){track.style.transition='none'}
  track.style.transform=`translateX(${offset()}px)`;
  if(instant){track.offsetWidth;track.style.transition=''}
  const p=list[i];
  if(p)document.body.style.setProperty('--glow',`color-mix(in srgb,${p.c1} 27%,transparent)`);
  $('count').textContent=list.length?`${i+1} / ${list.length}`:'';
}
const go=d=>{if(busy)return;i=Math.max(0,Math.min(list.length-1,i+d));update()};
$('next').onclick=()=>go(1);$('prev').onclick=()=>go(-1);
addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1);if(e.key==='Enter')choose();if(e.key==='r'||e.key==='R')rand()});
addEventListener('resize',()=>update(true));

stage.addEventListener('pointerdown',e=>{if(busy)return;drag={x:e.clientX,dx:0,id:e.pointerId};});
stage.addEventListener('pointermove',e=>{
  if(!drag)return;drag.dx=e.clientX-drag.x;
  if(Math.abs(drag.dx)>6){stage.classList.add('drag');track.style.transform=`translateX(${offset()+drag.dx}px)`}
});
const end=()=>{
  if(!drag)return;const dx=drag.dx;drag=null;stage.classList.remove('drag');
  if(Math.abs(dx)>6){const step=Math.round(-dx/250);go(step||(dx<0?1:-1))}else update();
};
stage.addEventListener('pointerup',end);stage.addEventListener('pointerleave',end);stage.addEventListener('pointercancel',end);
track.addEventListener('click',e=>{
  const c=e.target.closest('.card');if(busy||!c||Math.abs(drag?.dx||0)>6)return;
  const k=+c.dataset.k;if(k!==i){i=k;update()}else choose();
});
stage.addEventListener('wheel',e=>{
  if(Math.abs(e.deltaX)>Math.abs(e.deltaY)&&Math.abs(e.deltaX)>20){e.preventDefault();go(e.deltaX>0?1:-1)}
},{passive:false});

function choose(){
  const p=list[i];if(!p)return;picked=p;
  document.querySelectorAll('.card').forEach((c,k)=>c.classList.toggle('picked',k===i));
  const pn=$('panel');pn.style.setProperty('--c1',p.c1);pn.style.setProperty('--c2',p.c2);
  const status=getPlayerStatus(p);
  $('pb').textContent=p.num;$('pn').textContent=p.n+' '+p.f;
  $('pd').textContent=`${POS[p.pos]} · ${p.club}`;
  const statusText = status.active ? 'Active now' : `Inactive • last activity ${status.lastYear}`;
  const u=$('pu');
  u.textContent = `${statusText} • ${p.ucl ? '🏆 Champions League winner' : 'No Champions League title'}`;
  u.style.color = status.active ? 'var(--accent)' : '#dce7ff';
  u.style.fontWeight = '600';
  pn.classList.remove('pop');pn.offsetWidth;pn.classList.add('show','pop');
}
let busy=false;
function rand(){
  if(busy||list.length<2)return;busy=true;
  ['pick','rand'].forEach(id=>$(id).disabled=true);
  let t;do t=Math.floor(Math.random()*list.length);while(Math.abs(t-i)<Math.min(8,Math.floor(list.length/2)));
  $('panel').classList.remove('show');
  document.querySelectorAll('.card.active').forEach(c=>c.classList.remove('active'));
  track.classList.add('spin');i=t;
  track.style.transform=`translateX(${offset()}px)`;
  setTimeout(()=>{track.classList.remove('spin');update();
    setTimeout(()=>{busy=false;['pick','rand'].forEach(id=>$(id).disabled=false);choose()},700)},3900);
}
$('rand').onclick=rand;
$('pick').onclick=choose;
render();
