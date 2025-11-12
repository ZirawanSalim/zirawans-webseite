const tier =["schwein","hund","katze","maus"];

const getTiere = (tier) => {
    return tier.toUpperCase();

}
const tiere = tier.map(getTiere);

console.log(tiere);

   const preis=[100.1,200.2,300.3,400.4];
   
   const rundPreis = (preis) => {
    
    const gerundet = Math.ceil(preis);
    return `${gerundet} $`;

   }

console.log(preis.map(rundPreis));