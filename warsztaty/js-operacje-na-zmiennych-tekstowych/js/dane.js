'use strict';
var tekst = 'jakiś tekst';

//tworzerzenie znaczników

var paragraf = document.createElement('p');// zmienna, która później pozwoli stworzyć paragraf

document.getElementById('kontener').appendChild(paragraf);// wstawia stworzony wyżej paragraf

//paragraf.appendChild(tekst);//nood czyli węzły --- nie zadziała bo nie ma nooda (czyli wszystko co po elemencie np. class, id, itp.)


paragraf.innerHTML = tekst;

console.log(document.getElementById('string').innerHTML);
// pobiera wszystko co w elemencie stringa

console.log(document.getElementById('string').innerText);
//pobiera tylko tekst z elementu

var paragraf2 = document.createElement('p'); //zmienna, która tw

document.body.appendChild(paragraf2);

paragraf2.innerHTML = document.getElementById ('string').innerHTML;