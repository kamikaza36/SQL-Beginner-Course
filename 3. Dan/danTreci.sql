--Rjesavanje zadace
DROP TABLE studenti;

CREATE TABLE studenti (
    oib NUMBER (11) PRIMARY KEY,
    ime VARCHAR (20),
    prezime VARCHAR (20) NOT NULL,
    predmet VARCHAR (20)
);

INSERT INTO studenti VALUES (27385516822, 'Marina', 'Anic', 'Matematika');
INSERT INTO studenti VALUES (27167771763, 'Natalia', 'Dragin', 'Matematika');
INSERT INTO studenti VALUES (71679977581, 'Marin', 'Janes', 'Fizika');
INSERT INTO studenti VALUES (50614043124, 'Ivan', 'Mizerak', 'Kemija');
INSERT INTO studenti VALUES (19639758834, 'Ante', 'Mamic', 'Matematika');

ALTER TABLE studenti ADD(
    datum_rodenja DATE,
    prosjek_ocjena NUMBER (3,2)
);

INSERT INTO studenti VALUES (67293839941, 'Ivan', 'Anic', 'Matematika', DATE '1997-09-17', 3.27);
INSERT INTO studenti VALUES (67295654427, 'Stjepan', 'Kozic', 'Matematika', DATE '1995-09-19', 2.59);

SELECT * FROM studenti
WHERE predmet = 'Matematika'
AND prosjek_ocjena > 3;


SELECT * FROM studenti
WHERE prezime LIKE '%ic';
--Nedovrsena zadaca
INSERT INTO studenti VALUES (67293839941, 'Ivan', 'Anic', 'Matematika', DATE '1997-09-17', 3.27);
INSERT INTO studenti VALUES (67295654427, 'Stjepan', 'Kozic', 'Matematika', DATE '1991-09-19', 2.59);

ALTER TABLE studenti ADD(
    godine NUMBER (3)
);
--Ovdje svima studentima kojima datum rodenja nije prazan racunamo godine tako da
--sadasnju godinu oduzimamo od izvucene godine iz datuma rodenja.
UPDATE studenti 
SET 
    godine = 2020 - (EXTRACT(YEAR FROM datum_rodenja)) 
WHERE 
    datum_rodenja IS NOT NULL;
--Ovdje stavljamo vrijednost predmeta Apsolventi svim studentima starijim od 25 godina.
--U našem slucaju je samo jedan
UPDATE studenti SET predmet = 'Apsolventi' WHERE godine > 25;

SELECT * FROM studenti;
--Kraj zadace
CREATE TABLE profesori (
    profesor_id NUMBER (2) PRIMARY KEY,
    ime VARCHAR (20),
    prezime VARCHAR (20),
    predmet VARCHAR (20)
);

INSERT INTO profesori VALUES (1, 'Miro', 'Mamic', 'Matematika');
INSERT INTO profesori VALUES (2, 'Ana', 'Anic', 'Matematika');
INSERT INTO profesori VALUES (3, 'Matej', 'Pokos', 'Fizika');

--Union nam omogućuje da spojimo poglede dvije tablice
/*
SELECT tablica1.kolona1, tablica1.kolona2, tablica1.kolona3,,
FROM tablica1
WHERE uvjet
UNION
SELECT tablica2.kolona1, tablica2.kolona2, tablica2.kolona3,,
FROM tablica2
WHERE uvjet;
*/

SELECT oib AS id, prezime, predmet FROM studenti
UNION
SELECT profesor_id, prezime, predmet FROM profesori;


--JOIN!!! Omogućuje nam da spajamo dvije ili više tablica skupa
/*
SELECT ime_kolona
FROM ime_tablice1
INNER JOIN ime_tablice2
ON ime_tablice1.ime_kolone = ime_tablice2.ime_kolone;
*/

--Los primjer dizajna baze i dizajna primarnog i stranog kljuca
--U ovom slucaju vise profesora predaje jedan predmet te ispada da svaki ucenik slusa vise profesora
SELECT 
    studenti.oib,
    studenti.ime AS studenti_ime,
    studenti.prezime AS studenti_prezime,
    profesori.ime AS profesori_ime,
    profesori.prezime AS profesori_prezime
FROM profesori
INNER JOIN studenti
ON studenti.predmet = profesori.predmet;


--Dobar primjer Joina
DROP TABLE dobavljaci;

CREATE TABLE dobavljaci (
    id_dobavljaca NUMBER (2) PRIMARY KEY,
    ime_dobavljaca VARCHAR (20)
);

INSERT INTO dobavljaci VALUES (1, 'HP');
INSERT INTO dobavljaci VALUES (2, 'IBM');
INSERT INTO dobavljaci VALUES (3, 'Apple');

CREATE TABLE laptopi (
    id_laptopa NUMBER (2) PRIMARY KEY,
    ime_laptopa VARCHAR (20),
    id_dobavljaca NUMBER (2)
);

INSERT INTO laptopi VALUES (1, 'Mac Book Pro', 3);
INSERT INTO laptopi VALUES (2, 'Mac Book ProX', 3);
INSERT INTO laptopi VALUES (3, 'Elite Book 1', 1);


SELECT id_laptopa, ime_laptopa, ime_dobavljaca, laptopi.id_dobavljaca FROM laptopi
INNER JOIN dobavljaci
ON dobavljaci.id_dobavljaca = laptopi.id_dobavljaca;

 INTO laptopi VALUES (4, 'Elite Book 21', 4);

--Left outer join nam omogucuje da spojimo sve iz lijeve tablice sa zajednickim iz desne
SELECT id_laptopa, ime_laptopa, ime_dobavljaca, laptopi.id_dobavljaca FROM laptopi
LEFT OUTER JOIN dobavljaci
ON dobavljaci.id_dobavljaca = laptopi.id_dobavljaca;

ALTER TABLE studenti ADD (godine NUMBER (3));
--Za kraj nedovrsena zadaca
