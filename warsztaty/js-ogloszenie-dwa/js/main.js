'use strict';

//console.log('czy działa');

class Ogloszenie {
    constructor(id, tytul, cena, aktywne) {
        this.id = id;
        this.tytul = tytul;
        this.cena = cena;
        this.aktywne = aktywne;
    }

    czyAktywne() {
        if (this.aktywne) {
            console.log('jest aktywne');
        } else {
            console.log('nieaktywne');
        }
    }
}

var ogloszenie2 = new Ogloszenie(2, 'motor', 2000, false);

var ogloszenie3 = new Ogloszenie(3, 'krzeslo', 100, true);

var ogloszenia = [new Ogloszenie(1, 'samochod', 1000, true), ogloszenie2];

var ogloszenia2 = [ogloszenie2, ogloszenie3];

ogloszenia.push(ogloszenie3);

console.log(ogloszenia);

ogloszenie2.czyAktywne();

console.log('powyższe nieaktywne odnosi się do lini 35 w JavaScript czyli [ogloszenie2.czyAktywne();] --- poniższe trzy zaś do funkcji');

function wyswietlCzyAktywne(tabOgloszenia) {
    for (var i = 0; i < tabOgloszenia.length; i++) {

        console.log(tabOgloszenia.length); //ilość ogłoszeń - w sumie są trzy

        tabOgloszenia[i].czyAktywne();
        
    }
}

wyswietlCzyAktywne(ogloszenia);
//wyswietlCzyAktywne(ogloszenia2);

function iloscOgloszen(tablicaOgl) {
    var licznikAktywnych = 0;
    for (var i = 0; i < tablicaOgl.length; i++) {

        console.log(tablicaOgl.length); //ilość pojawi się dopiero kiedy określimy o którą tablicę nam chodzi poniżej (czyli np. ogloszenia, albo ogloszenia2).


        if (tablicaOgl[i].aktywne == true) {
            licznikAktywnych++;
        }

        //        console.log(tablicaOgl[i].aktywny);
    }
    //    console.log(tablicaOgl.length);
    //    console.log(licznikAktywnych);
    return [licznikAktywnych, tablicaOgl.length - licznikAktywnych];
    //tablicaOgl.length - licznikAktywnych] z tej drugiej części wynika ilość nieaktywnych, gdyż 'tablicaOgl.length' to wszystkie ogłoszenia czyli 3 i od tego odejmujęmy 'licznikAktywnych' czyli aktywne ogłoszenia,ich ilość wynosi 2. Z powyższego zapisu wynika, że nieaktywne ogłoszenia to 3 - 2 = 1.
}

//iloscOgloszen(ogloszenia);
var wynikIloscOgloszen = iloscOgloszen(ogloszenia);
//console.log(iloscOgloszen(ogloszenia));

console.log(wynikIloscOgloszen);

console.log('Ilość ogłoszeń aktywnych: ' + wynikIloscOgloszen[0]);
console.log('Ilość ogłoszeń nieaktywnych: ' + wynikIloscOgloszen[1]);