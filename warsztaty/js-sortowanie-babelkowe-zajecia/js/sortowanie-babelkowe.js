'use strict';

//Robione na zajęciach

function sortowanieBabelkowe(tab) {

    var licznikPrzestawieniaMiejscami = 0;

    for (var i = 0; i < tab.length; i++) {

        for (var a = 0; a < tab.length - i; a++) { //a<tab.length-1; bo za każdą pętlą sortowania ostatnia (największa) liczba ustawia się na końcu tablicy 
            //console.log('i = ' + i + ' a= ' + a);
            if (tab[a] > tab[a + 1]) {
                var przestawianie = tab[a];
                tab[a] = tab[a + 1];
                tab[a + 1] = przestawianie;
                licznikPrzestawieniaMiejscami++;

                //                console.log(tab);// po odkomentowaniu widać co na bieżąco dzieje się z liczbą
            }
        }
    }
    var zwracanaTablicaZWynikami = [tab, licznikPrzestawieniaMiejscami]; //zwróci tablicę posortowaną oraz ilość przestawienia miejsc

    return zwracanaTablicaZWynikami;
    //    return licznikPrzestawieniaMiejscami; --- błąd nie można dać dwóch returnów
}

//zamiast 'tab' możemy napisać 'tablica', zamiast 'tablica' też możemy napisać 'tab' --- ale nie wiem czy to dobrze

var tablica = [5, 6, 8, 5, 34, 56, 89, 1];

var tablicaWynikow = sortowanieBabelkowe(tablica);
console.log(tablicaWynikow[0]);
console.log(tablicaWynikow[1]);
