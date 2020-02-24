/*
KREIRANJE TABLICE 

CREATE TABLE ime_tablice (
    primarni_kljuc NUMBER (10) NOT NULL PRIMARY KEY,
    ime_kolumna_1 VARCHAR (20) NOT NULL,
    ime_kolumna_2 VARCHAR2 (20)
);
*/
/*
BRISANJE TABLICE

DROP TABLE ime_tablice;
*/

/*
Kreiranje tablice primjer

CREATE TABLE studenti (
    student_id NUMBER (1) NOT NULL PRIMARY KEY,
    ime VARCHAR (20) NOT NULL,
    prezime VARCHAR (20) NOT NULL,
    kolegij VARCHAR (20)
);
*/
/*
STAVLJANJE PODATAKA U BAZU

INSERT INTO ime_tablice (
    primarni_kljuc,
    ime_kolumna_1,
    ime_kolumna_2
) VALUES (
    1,
    'ime1',
    'ime2'
);
*/
/*
Stavljanje podataka u bazu primjer

INSERT INTO studenti (
    student_id,
    ime,
    prezime,
    kolegij
) VALUES (
    1,
    'Ivan',
    'Ivic',
    'Matematika'
);
*/
/*
INSERT INTO studenti (student_id, ime, prezime, kolegij) VALUES (3, 'Ana', 'Josipovic', 'Fizika');
INSERT INTO studenti (student_id, ime, prezime, kolegij) VALUES (4, 'Valentina', 'Valenic', '');
INSERT INTO studenti (student_id, ime, prezime, kolegij) VALUES (5, 'Josip', 'Josipovic', 'Fizika');
*/
/*
INSERT INTO studenti (student_id, ime, prezime, kolegij) VALUES (1, 'Janko', 'Boric', 'Kemija');
*/
/*
BRISANJE PODATAKA IZ BAZE

DELETE FROM ime_tablice
WHERE (uvjet);
*/
/*
Brisanje podataka iz baze primjer

DELETE FROM studenti
WHERE student_id = 3;
*/
/*
DELETE FROM studenti
WHERE ime = 'Josip' AND prezime = 'Josipovic';
*/
/*
SELECT naredbom prikazujemo vrijednosti u bazi

SELECT * FROM studenti;
*/
/*
Kreiraj tablicu zaposlenici sa slijedecim kolonama: zaposlenik_id (primarni kljuc, nesmije bit nula), ime, prezime(nesmije bit nula), placa, ime_odjela.
Stavi u nju vrijednosti 5 zaposlenika proizvoljnih vrijednosti
Zaposlenik je dao otkaz. Izbiriste ga iz tablice.
DODATNI ZADATAK:
Dodaj kolumnu datum rodenja, boraviste, prebivaliste
Stavi u nju vrijednosti 5 zaposlenika proizvoljnih vrijednosti
2 zaposlenik su dala otkaz. Izbiriste ih iz tablice.
*/