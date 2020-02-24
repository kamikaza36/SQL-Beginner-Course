//PRVA LINIJA KODA

//konzolu u google chromu otvaramo: desni klik na bilo koji dio stranice, zatim lijevi klik na inspect, 
//zatim lijevim klikom stisnemo na treci po redu tab (console) u novo otvorenom prozoru
//ili samo pritisnemo kombinaciju tipki CTRL+SHIFT+J

//konzolu u firefoxu otvaramo: desni klik na bilo koji dio stranice, zatim lijevi klik na inspect element, 
//zatim lijevim klikom stisnemo na drugi po redu tab (console) u novom otvorenom prozoru
//ili samo pritisnemo kombinaciju tipki CTRL+SHIFT+K

//u konzolu upisujemo nas JavaScript

//pomoću console loga u konzoli web preglednika ispisujemo Hello World!!!
console.log("Hello World!!!");

//pomoću alerta izbacujemo notifikaciju u web browseru Hello World!!!
alert("Hello World!!!");

//varijable mozemo zamisliti kao kontenjere u koje spremamo vrijednosti
//u JavaScriptu imamo tri tipa varijabli: var, const, let
//kod pisanja varijabli ne moramo reci koji ce tip podatka sadrzavat ta varijabla
//zbog toga kazemo da je JavaScript dinamicki jezik

//varijabla var se moze mjenjati i ona je definirana kroz cijeli program
var ime = "Stjepan";

//varijabla let se moze mjenjati i ona je definirana samo lokalno
let prezime = "Horvat";
console.log(prezime);

prezime = "Duvnjak";
console.log(prezime);

//varijabla const se ne moze mjenjati i ona je definirana samo lokalno
const OIB = 34891023481;

//takoder mozemo definirati varijablu i nakon toga dodati joj vrijednost
var boraviste;
boraviste = "Zagreb";

console.log(ime);
console.log(prezime);
console.log(OIB);
console.log(boraviste);


//osnovni tipovi podataka u JavaScriptu su: Boolean, Number, Undefined, Null, String 

//Boolean ima samo dvije vrijednosti a to su istinita i neistinita (true or false)

var istina = true;

var neistinita = false;

console.log(istina);
console.log(neistina);

//Number ili broj na Hrvatskom moze sadrzavati vrijednosti od -(2**53 − 1) do 2**53 − 1
//za vece brojeve koristimo BigInt

var x = 3;

var y = -8.32;

console.log(x);
console.log(y);

//Undefined je primitivna vrijednost koja se dodjeljuje tek deklariranim varijablama ili
//argumentima koji nemaju vrijednost
let nedefinirano;
console.log(nedefinirano);

//Null ili nepostojece je nepostojeca vrijednost. Ona nije 0, 0 je broj
var nista = null;
console.log(nista);

//podatke spremljene u varijable mozemo mjenjati
var nadimak = "Štef";
console.log(nadimak);
nadimak = "Števa";
console.log(nadimak);

let godine = 20;
console.log(godine);
godine = godine + 1;
console.log(godine);

//podatke spremljene u const ne mozemo mjenjati
const danRodenja = 13;
console.log(danRodenja);
danRodenja = 14;
console.log(danRodenja);

//osnovne matematicke operacije izvodimo i pisemo isto kao sto smo ucili u skoli
var x = 3;
var y = 5; 
var zbroj = x + y;
var rezultat = x - y;
var umnozak = x * y;
var kolicnik = x / y;
console.log(zbroj,rezultat,umnozak,kolicnik);

//takoder mozemo definirati varijablu tako da radimo matematicku operaciju
var c = x + y;
console.log(c);

//redoslijed matematickih operacija je isti ko i u matematici
//vise o tome mozete pogledati na: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log(2 + 3 * 5); //2 + 15
console.log((2 + 3) * 5); //5 * 5

//domaca zadaca
/*
1. Spremi težinu (u kg) i visinu (u cm) od petero ljudi u varijable
2. Izračunajte,za svakog posebno, BMI (indeks tjelesne mase) 
3. Izračunajte im prosječnu visinu, težinu i BMI
*/

//bilo kakve upite slobodno posaljite na mail: petar.klenovic@gmail.com uz naslov tecaja kao subject
