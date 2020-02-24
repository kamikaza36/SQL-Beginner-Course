/*
    Dario je dobio 3 racuna 3 razlicita restorana. Racunu si iznosli: 224kn, 40kn, 720kn
    Napraviti kalkulator koji ce pomoci Dariju izracunati koliku ce napojnicu ostaviti
    na slijedeci nacin:
    Kada je racun manji od 60 kn napojnica od 20%
    Kada je racun izmedu 60 kn 300 kn napojnica od 15%
    Kada je racun veci od 300 kn napojnica od 10%
    Na kraju Dario želi imati niz koji sadrži sve tri napojnice i želi imati ukupni iznos
    svakog racuna sa napojnicom u drugom nizu
*/

function kalkulatorNapojnica(racun) {
    var postotak;
    if (racun < 60) {
        postotak = .2;
    } else if (racun >= 60 && racun < 300) {
        postotak = .15;
    } else {
        postotak = .1;
    }
    return postotak * racun;
};

var racun = [224, 40, 720];
var napojnice = [
    kalkulatorNapojnica(racun[0]),
    kalkulatorNapojnica(racun[1]),
    kalkulatorNapojnica(racun[2])
];

var ukupniTrosak = [
    racun[0] + napojnice[0],
    racun[1] + napojnice[1],
    racun[2] + napojnice[2],
];
//OBJEKTI
/* 
objekte mozemo zamisliti kao neke kontenjere u koje spremamo vrijednosti
te vrijednosti u objektima mozemo imenovati, u nizu ne mozemo imenovati
objekti mogu sadrzavata svojstva i metode
*/
//deklaracija objekta
var imeVarijable = {
    //sadrzaj objekta
};

var auto = {
    marka : "Skoda",
    boja : "Plava",
    godinaProizvodnje : 2016,
    kilometraza : 45000
};

//kada deklariramo objekt : nam zamjenjuje =
//vrijednosti pozivamo na slijedeći način
console.log(auto.marka);
console.log(auto.kilometraza);

//metode
/*
metode su akcije koje provodimo nad objektima
metode spremamo u objekt kao funkcije
*/

var osoba = {
    ime : "Ivan",
    prezime : "Horvat",
    godine : 32,
    punoIme : function () {
        return this.ime + " " + this.prezime;
    }
};

console.log(osoba.punoIme());

/*
this nam sluzi kako bi se referirali na vrijednost vlasnika funkcije
u ovom slucaju referiramo se na nas objekt
*/

//PETLJE I ITERACIJE
/* 
petlje nam sluze kako bi smanjili ponavljanje koda
problem je kod petlji ako se vrte beskonacno mnogo, rusi nam server
*/
//primjer
for ([pocetnoStanje]; [uvjet]; [akcijaNakonKrugaPetlje]){
   izjava
};


let str = "";

//u ovom slucaju prolazimo kroz petlju i svaki put kad prodemo dodamo broj u string
for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

//ZADATAK


/*Racunjanje napojnica nastavak
Ovaj put Dario je išo u 5 različitih restorana racuni su bili: 124, 48, 468, 340, 42.
Kada je racun manji od 60 kn napojnica od 20%
Kada je racun izmedu 60 kn 300 kn napojnica od 15%
Kada je racun veci od 300 kn napojnica od 10%
1.Kreiraj kalkulator napojnica koristeći objekte i petlje
2. Dodaj metodu koja izracunava napojnicu
3. Ta metoda treba ukljucivati petlju koja ce proci po svim racunima i izracunati napojnicu
4. Kao output trebamo vratiti, 1) kreirati novi niz koji sadrži sve napojnice i 2) niz koji sadrzi ukupni trosak. 

U drugom  slucaju imamo kuma Ivan i on ima drugacija pravila davanja napojnica. Racuni su bili: 77, 375, 110, 45.
Ivan voli davati napojnice na sljedeći nacin:
Kada je racun manji od 100 kn napojnica od 20%
Kada je racun izmedu 100 kn 300 kn napojnica od 10%
Kada je racun veci od 300 kn napojnica od 25%

5. Implementiraj iste funkcionalnosti kao prije ali koristeci Ivanova pravila
6. Kreiraj funkciju (ne metodu) koja izracunava prosjecnu napojnicu iz niza napojnica.
7. Kalkuliraj prosjecnu napojnicu za Daria i Ivana
8. U konzolu ispisi ko je dao vecu napojnicu
*/


var dario = {
    ime : "Dario",
    racuni : [124, 48, 468, 340, 42],
    kalkulatorNapojnica: function () {
        this.napojnice = [];
        this.ukupniTrosak = [];

        for (var i = 0; i < this.racuni.length; i++) {
            var postotak;
            var racun = this.racuni[i];

            if (racun < 60) {
                postotak = .2;
            } else if (racun >= 60 && racun < 300) {
                 postotak = .15;
            } else {
                 postotak = .1;
            }
                
            this.napojnice[i] = racun * postotak;
            this.ukupniTrosak[i] = racun + racun * postotak;
            
        
        }
    }
};

dario.kalkulatorNapojnica();
console.log(dario);

var ivan = {
    ime: "Ivan",
    racuni : [77, 375, 110, 45],
    kalkulatorNapojnica: function () {
        this.napojnice = [];
        this.ukupniTrosak = [];

        for (var i = 0; i < this.racuni.length; i++) {
            var postotak;
            var racun = this.racuni[i];

            if (racun < 100) {
                postotak = .2;
            } else if (racun >= 100 && racun < 300) {
                postotak = .1;
            } else {
                postotak = .25;
            }
            this.napojnice[i] = racun * postotak;
            this.ukupniTrosak[i] = racun + racun * postotak;
        }
    }
};

ivan.kalkulatorNapojnica();
console.log(ivan);

function kalkulatorProsjek(napojnice) {
    var zbroj = 0;
    for (var i = 0; i < napojnice.length; i++) {
        zbroj = zbroj + napojnice[i];
    }
    return zbroj / napojnice.length;
}

ivan.prosjek = kalkulatorProsjek(ivan.napojnice);
dario.prosjek = kalkulatorProsjek(dario.napojnice);


function vecaPotrosnja (potrosnjaJedan, potrosnjaDva) {
    if (potrosnjaJedan.ukupniTrosak > potrosnjaDva.ukupniTrosak) {
        console.log("Vecu trosak je imao " + potrosnjaJedan.ime);
    } else if (potrosnjaJedan.ukupniTrosak < potrosnjaDva.ukupniTrosak) {
        console.log("Vecu trosak je imao " + potrosnjaDva.ime);
    } else {
        console.log("Potrosnja " + potrosnjaJedan.ime + " i " + potrosnjaDva.ime + " je jednaka.");
    }
}; 