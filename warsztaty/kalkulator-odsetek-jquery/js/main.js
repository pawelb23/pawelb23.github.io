'use strict';
//console.log('czy działa');

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    if (podatek === true) {
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    var kapital = wplata * Math.pow(1 + oprocentowanieOpodatkowane / okresKapitalizacji, iloscLat * okresKapitalizacji);

    return parseFloat(kapital).toFixed(2); // taki zapis podaje dwa miejsca po przecinku
}


function oblicz(event) {
    event.preventDefault();
    var wplata = parseInt(document.getElementById('wplata').value, 10);
    //    console.log(wplata);

    var iloscLat = parseInt(document.getElementById('ilosc-lat').value, 10);

    var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value, 10);

    var oprocentowanie = document.getElementById('oprocentowanie').value / 100; //nie ma tu nawiasu bo nie mają to być liczby całkowite
    //    console.log(oprocentowanie);

    var podatek = document.getElementById('podatek').checked;
    //    console.log(podatek);

    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);

    document.getElementById('wynik').innerText = wynik;
}