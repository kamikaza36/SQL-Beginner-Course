/*Drugi dan skripta
RJEŠAVANJE ZADAĆE

1. Spremi težinu (u kg) i visinu (u cm) od petero ljudi u varijable
2. Izračunajte,za svakog posebno, BMI (indeks tjelesne mase) 
3. Izračunajte prosječnu težinu, visinu i BMI
*/
var tezinaJedan = 65;
var tezinaDva = 80;
var tezinaTri = 45;
var tezinaCetiri = 63;
var tezinaPet = 47;

var visinaJedan = 1.81;
var visinaDva = 1.75;
var visinaTri = 1.51;
var visinaCetiri = 1.68;
var visinaPet = 1.44;

var BMIJedan = tezinaJedan / visinaJedan**2;
var BMIDva = tezinaDva / visinaDva**2;
var BMITri = tezinaTri / visinaTri**2;
var BMICetiri = tezinaCetiri / visinaCetiri**2;
var BMIPet = tezinaPet / visinaPet**2;

var prosjekTezina = (tezinaJedan + tezinaDva + tezinaTri + tezinaCetiri + tezinaPet) / 5;
var prosjekVisina = (visinaJedan + visinaDva + visinaTri + visinaCetiri + visinaPet) / 5;
var prosjekBMI = (BMIJedan + BMIDva + BMITri + BMICetiri + BMIPet) / 5;

console.log(prosjekTezina, prosjekVisina, prosjekBMI);
/*
KRAJ ZADACE

IF/ELSE

if izjavama specificiramo koji dio koda će izvršit ako je uvjet istinit
else izjavom specificiramo dio koda ako je uvjet neistinit
else if izjavom specificiramo dio koda ako je neki drugi uvjet istinit
if/else
*/
if (uvjet) {
  //  blok koda koji će se izvršiti ako je uvjet istinit
}
else if (uvjet) {
  //izvršavamo dio koda ako je neki drugi uvjet istinit
}
else {
    // blok koda koji će se izvršiti ako je uvjet neistinit
  }
//Primjer
var ime = "Stjepan";

if (ime) {
    console.log("Stjepan");
} else {
    console.log("Nema imena");
};

/*
BOOLEANOVA ALGEBRA

AND && istina je ako je sve istina
OR || istina je ako je jedan istina
NOT ! obratno od booleanove vrijednosti
*/

if (godine < 13) {
    console.log(ime + " je decko. ");
} else if (age  >= 13 && age < 20) {
    console.log(ime + " je tinejdzer");
} else if (age >= 20 && age < 30) {
    console.log(ime + " je mladi muskarac");
} else {
    console.log(ime + " je musko"); 
}
/*
FUNKCIJE
funkcija je blok koda koji se izvodi kada je se pozove, ona nam pomaže da ne ponavljamo svoj kod
*/

function kalkulatorGodina(godinaRodenja) {
return 2020 - godinaRodenja;
};
kalkulatorGodina(1993);
var godineJosip = kalkulatorGodina(1992);

/*
FUNKCIJSKE IZJAVE I EKSPRESIJE
funkcijske izjave(statement) i ekspresije (expression)
ekspresije uvijek rezultiraju nekim rezultatom koliko god su duge
izjave su programske instrukcije koje izvodi računalo
*/

var zanimanje = function(posao, ime) {
switch(posao) {
    case "ucitelj":
        return ime + " uci djecu u skoli";
    case "taksist": 
        return ime + " vozi taksi";
    case "programer":
        return ime + " programira web aplikacije u JavaScriptu";
    default :
        return ime + " radi nesto drugo";
}}
console.log(zanimanje("taksist", "Ivan"));

/*
NIZOVI

Vise vrijednosti spremamo u jednu varijablu
*/

var osoba = ["Josip", "Josipović",1994 ];
var ime = osoba[0];

/*DOMAĆA ZADAĆA
Dario je dobio 3 računa u 3 različita restorana. Računi su bili:  224kn, 40kn i 720kn
Napraviti kalkulator koji će pomoći Dariju izračunati koliku će napojnicu ostaviti na slijedeći način:
Kada je račun manji od 6o kuna daj napojnicu od 20%
Kada je račun između 6o kuna i 300 kuna daj napojnicu od 15%
Kada je račun veći od 300 kuna daj napojnicu od 10%
Na kraju Dario želi imati niz koji sadrži sve tri napojnice i želi imati ukupni iznos svakog računa sa napojnicom spremljenog u niz
*/