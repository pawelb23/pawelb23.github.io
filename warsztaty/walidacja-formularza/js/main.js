'use strict';

//zmienne do checkboxów
var wszystkieZgody = document.getElementById('wszystkie-zgody');
var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');
var wszystkieCheckboxy = document.querySelectorAll('input[type=checkbox]');

//zmienne do inputów
var inputImie = document.getElementById('name');
var inputEmail = document.getElementById('email');

//zmienna do komunikatorów
var wiadomosc = document.getElementById('wiadomosc');
var wyslijBtn = document.getElementById('wyslij');

//funckja zaznaczania wszystkich checkboxów
function stanCheckboxa() {
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_checked2
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;

    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
}

wszystkieZgody.onchange = stanCheckboxa; //funkcja zaznaczania wszystkich chceckboxów
//kod piszemy zawsze na submit nie na wyślij 

//funkcja walidująca inputy

function walidujFormularz(event) {
    wiadomosc.innerHTML = '';
    if (inputImie.value == '') {
        var msgImie = document.createElement('li');
        msgImie.innerHTML = 'Wpisz imię!';
        wiadomosc.appendChild(msgImie);
        event.preventDefault();
        //        console.log('Działa!!!')
    }
    if (inputEmail.value == '') {
        var msgEmail = document.createElement('li');
        msgEmail.innerHTML = 'Wpisz Email!';
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();
    }
    if (!zgodaMarketingowa1.checked) {
        var msgZgoda = document.createElement('li');
        msgZgoda.innerHTML = 'Musisz wyrazić zgodę';
        wiadomosc.appendChild(msgZgoda);
        event.preventDefault(); //blokuje
        //       
    }
}
wyslijBtn.addEventListener('click', walidujFormularz); //to jest ta sama komenda co poniżej z tym, że dzięki addEventListner możemy dodać więcej możliwości. Poniżej to samo robi onclick, z tym że jest tylko jedna możliwość onclick
//wyslijBtn.onclick = walidujFormularz;