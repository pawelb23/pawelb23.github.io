'use strict';
//
//Sortowanie bąbelkowe [Pierwszy sposób]

var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log('przed sortowaniem --- [ ' + tablica + ' ]');

function sortowanieBabelkowe(tablica) {
    for (var i = 0; i < tablica.length; i++) { //indeks, który pozwala przeskakiwać w pętli po kolejnych wartościach (I pętla)

        for (var n = 0; n < tablica.length; n++) { //n - odnosi się do kolejnych wartości w tablicy (czyli 12,67,34 itp.) (II pętla)

            if (tablica[n] > tablica[n + 1]) { //porównanie kolejnych liczb czyli np. 24 > 2 jeżeli tak to
                var zmiennaCzasowa; //wprowadzenie zmiennej aby było jak przyrównać liczby
                zmiennaCzasowa = tablica[n]; //ZC jest równa np. 24 
                tablica[n] = tablica[n + 1]; //nasze 24 musi wynieść 2 gdyż pierwsza liczba musi być mniejsza
                tablica[n + 1] = zmiennaCzasowa; //nasze 2 musi być równe ZC czyli 24 gdyż ta liczba musi być większa jako kolejna w ciągu
            }
        }
    }
    console.log('po sortowaniu --- [ ' + tablica + ' ]');
}
sortowanieBabelkowe(tablica);

//==============================================

//Sortowanie bąbelkowe [Drugi sposób]

var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log('przed sortowaniem --- [ ' + tablica + ' ]');

function sortowanieBabelkowe(tablica) {
    for (var i = 0; i < tablica.length; i++) { //indeks, który pozwala przeskakiwać w pętli po kolejnych wartościach

        for (var n = 0; n < tablica.length; n++) { //n - odnosi się do kolejnych wartości w tablicy (czyli 12,67,34 itp.)

            if (tablica[n] > tablica[n + 1]) { //porównanie kolejnych liczb czyli np. 24 > 2 jeżeli tak to
                var zmiennaCzasowa; //wprowadzenie zmiennej aby było jak przyrównać liczby
                zmiennaCzasowa = tablica[n]; //ZC jest równa np. 24 
                tablica[n] = tablica[n + 1]; //nasze 24 musi wynieść 2 gdyż pierwsza liczba musi być mniejsza
                tablica[n + 1] = zmiennaCzasowa; //nasze 2 musi być równe ZC czyli 24 gdyż ta liczba musi być większa jako kolejna w ciągu
            }
        }
    }
    return 'po sortowaniu --- [ ' + tablica + ' ]';
}

console.log(sortowanieBabelkowe(tablica));

//===========================

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
