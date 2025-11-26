const name ="zirawan Salim";
const erfahrung = 5;
const jobsuche = true;
const gehalt = null;
console.log(name, erfahrung, jobsuche, gehalt)


const temperatur = 5;

if (temperatur >= 25) {
    console.log("wetter ist warm");
}else if(temperatur == 20){
  console.log("wetter ist schön");  
}else{
  console.log("wetter ist Kalt");   
}


const temperaturen = [10, 25, 5, 30, -2];

temperaturen.forEach(temperatur => {
    let meldung = "";
    
    if (temperatur >= 25) {
        meldung = "Es ist heiß";
    } else if (temperatur >= 10 && temperatur< 25) {
        meldung = "Es ist warm";
    } else if (temperatur >= 0 && temperatur < 10) {
        meldung = "Es ist kühl";
    } else if (temperatur < 4) {
        meldung = "Es ist sehr kalt";
    }
    console.log(meldung);
});