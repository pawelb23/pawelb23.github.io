'use strict';


console.log('AJAX - pobierz dane programisty');

$('#pobierz-dane').click(function () {



    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (dane) {
        //console.log(dane);

        $('#dane-programisty').append('<p><b>Imię:</b> ' + dane.imie + '</p>');
        $('#dane-programisty').append('<p><b>Nazwisko:</b> '  + dane.nazwisko + '</p>');
        $('#dane-programisty').append('<p><b>Zawód:</b> ' + dane.zawod + '</p>');
        $('#dane-programisty').append('<p><b>Firma:</b> ' + dane.firma + '</p>');
        $('#dane-programisty').append('<p><b>================</b></p>');//1.Jak w tym miejscu dodać klasę do 'p' czyli --- '<p(jak tu dodać klasę)><b>==========</b></p>',bo nie udało mi się tego zrobić.
    });

})

//2.Jak zbudować funkcję (JS lub JQuery), która pozwalałaby przeskoczyć 'height' (wysokość) 'diva="dane-programisty"' na wartość 'auto'. Chciałbym, aby mój div miał większą (niż obecnie) wysokość na początku (czyli oczywiście mogę to zrobić w css), ale chcę, aby kiedy pobierzemy drugi raz dane wysokość przeskoczyła na auto z ustalonej pierwotnie w css.