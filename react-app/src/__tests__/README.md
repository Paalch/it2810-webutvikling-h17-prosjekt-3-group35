##Testing for gruppe 35

#Vi har brukt Jest med Enzyme.
#Jest er et rammeverk som er utviklet av facebook for testing av react. Jest inneholder standard funksjoner for testing i tillegg til funksjoner som snapshot. Jest har ingen god måte å sjekke componenter på(med unntak av snapshot) , så det er derfor vi har importert Enzyme, enyzme lar oss sjekke mer spesifikke deler av komponentene en snapshot gjør. Fek sjekke at en onClick fungere.
#Vi har fokusert på å teste de ulike delene av appen, todo, schedule og notes. Men i tillegg har vi også laget tester for å sjekke at alle delene av appen renderer.

##Vi sjekker at følgene fungerer:
-onClick
-Opprettelse av nye elementer
-At de nye elementene ikke kan være tomme, med unntak av notes
-At propsene blir sent inn dit de skal
-Navbaren inndeholder alle delene av appen

#Vi har fokusert på å teste todo og note, men vi har også skrevet tester for schedul. Felles for alt er at vi sjekker om filen lar seg rendre.
#Vi har hatt noe problemer med å rendre main.js og schedule.js, uten at vi vet hva det kommer av.

##Testene kjøres på følgene måte:
npm run yest

#for å resette snapshots kan dere bruke:
npm run yest -- -u
