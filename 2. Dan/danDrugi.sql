--Kreiranje tablice zaposlenici

CREATE TABLE zaposlenici (
    zaposlenik_id NUMBER (2) NOT NULL PRIMARY KEY,
    ime VARCHAR (20),
    prezime VARCHAR (20) NOT NULL,
    placa NUMBER (10, 2),
    ime_odjela VARCHAR (20)
);
--Umetanje podataka u tablicu zaposlenici
INSERT INTO zaposlenici VALUES (1, 'Ivan', 'Ivanovic', 7800, 'Razvoj');
INSERT INTO zaposlenici VALUES (2, 'Ana', 'Ivanovic', 8800, 'Razvoj');
INSERT INTO zaposlenici (zaposlenik_id, ime, prezime, placa) VALUES (3, 'Marin', 'Marinovic', 5500);
INSERT INTO zaposlenici (zaposlenik_id, prezime, placa, ime_odjela) VALUES (4, 'Horvat', 9000, 'Racunovodstvo');
INSERT INTO zaposlenici VALUES (5, 'Ivan', 'Ivanovic', 6800, 'Odrazavanje');

--Brisanje zaposlenika

DELETE FROM zaposlenici WHERE zaposlenik_id = 2;

SELECT * FROM zaposlenici;

CREATE TABLE ucenici (
    ucenik_id NUMBER (2) PRIMARY KEY,
    ime VARCHAR (20) NOT NULL,
    prezime VARCHAR (20) UNIQUE
);

INSERT INTO ucenici VALUES (1, 'Stjepan', 'Stjepanovic');
INSERT INTO ucenici VALUES (2, 'Ivan', 'Ivanovic');
INSERT INTO ucenici VALUES (3, 'Ana', 'Anic');
INSERT INTO ucenici VALUES (5, 'Ana', 'Stipic');

--Mjenjanje vrijednosti u tablici
/*
UPDATE ime_tablice 
SET kolona_koju_mjenjamo = vrijednost_koju_postavljamo
WHERE (uvjet);
*/
--Primjer mjenjanje vrijednosti u tablici

UPDATE ucenici 
SET ime = 'Ancica'
WHERE ucenik_id = 3;

--Dodavanje polja u tablici
/*
ALTER TABLE ime_tablice ADD (
    ime_kolumne_koju_dodajemo1 TIP_PODATKA,
    ime_kolumne_koju_dodajemo2 TIP_PODATKA,
    ime_kolumne_koju_dodajemo3 TIP_PODATKA
);
*/
--Primjer dodavanje polja u tablici

ALTER TABLE zaposlenici ADD (
    datum_rodenja DATE,
    boraviste VARCHAR (30),
    prebivaliste VARCHAR (30)
);

INSERT INTO zaposlenici VALUES (6, 'Stjepan', 'Stipic', 6000, 'Razvoj', DATE '1999-02-26', 'Slavnoski Brod', 'Zagreb');

UPDATE zaposlenici SET 
    datum_rodenja = DATE '1989-03-30',
    prebivaliste = 'Zagreb',
    boraviste ='Sisak'
    WHERE zaposlenik_id = 1;


UPDATE zaposlenici SET
    ime = 'Marijana',
    prezime = 'Marijanovic',
    placa = 6800,
    ime_odjela = 'razvoj',
    datum_rodenja = DATE '1992-02-02',
    boraviste = 'Split',
    prebivaliste = 'Split'
    WHERE zaposlenik_id = 2;

DELETE FROM zaposlenici WHERE zaposlenik_id in (3, 4);

SELECT * FROM zaposlenici
WHERE placa >= 6800
AND UPPER(ime_odjela) = 'RAZVOJ'
AND ime LIKE 'I%'
ORDER BY placa DESC;

SELECT * FROM zaposlenici
WHERE ime LIKE 'I%'
ORDER BY placa DESC;

SELECT * FROM zaposlenici
WHERE prezime like '%n%'
ORDER BY placa DESC;

--INSERT INTO zaposlenici VALUES (7, 'Stjepan', 'Stip', 6000, 'Razvoj', DATE '1999-02-26', 'Slavnoski Brod', 'Zagreb');

SELECT * FROM zaposlenici
WHERE LOWER(prezime) LIKE '____ic';

/*
Kreiraj tablicu studenti sa sljedecim kolonama: oib pk, ime, prezime nesmije bit null, predmet.
Unesi 5 proizvoljnih vrijednosti
Dodaj kolonu datum_rodenja, prosjek ocjena (zaokruzi na dvije decimale)
Unesi jos 2 proizvoljne vrijednosti.
Napravi select koji pohadaju matematiku.
Napravi select studenata koji pohadaju matematiku i imaju veci prosjek od 3.
Napravi select svih studenata cije prezime zavrsava na ic.
DODATNI ZADATAK
Dodajte kolonu godine
I pomocu datuma izracunajte godine
Select svih studenata koji su stariji od 25 godine i tim studentima stavite predmet APSOLVENTI
*/