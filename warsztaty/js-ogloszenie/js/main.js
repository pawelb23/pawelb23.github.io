'use strict';

//console.log('czy działa');

class Ogloszenie {
    constructor(id, tytul, cena, aktywny) {
        this.id = id;
        this.tytul = tytul;
        this.cena = cena;
        this.aktywny = aktywny;
    }
    
    czyAktywny() {
        if(this.aktywny) {
            console.log('jest aktywny');
        }
        else {
            console.log('nieaktywny');
        }
    }
}

var ogloszenie2 = new Ogloszenie(2, 'motor', 2000, false);

var ogloszenie3 = new Ogloszenie(3, 'krzeslo', 100, true);

var ogloszenia = [ new Ogloszenie(1, 'samochod', 1000, true),ogloszenie2];

var ogloszenia2 = [ogloszenie2, ogloszenie3];

ogloszenia.push(ogloszenie3);

console.log(ogloszenia);

ogloszenie2.czyAktywny();

function wyswietlCzyAktywne(tabOgloszenia) { 
    for(var i = 0; i < tabOgloszenia.length; i++) {
        
        console.log(tabOgloszenia.length);   
      
        tabOgloszenia[i].czyAktywny();
    }
   
}

wyswietlCzyAktywne(ogloszenia);
wyswietlCzyAktywne(ogloszenia2);
