'use strict'

function ustawTlo() {
    //console.log('test');
    var allParagraphs = document.getElementsByTagName('p');
    //console.log(allParagraphs[0]);
    allParagraphs[0].style.backgroundColor = 'red';
    allParagraphs[1].style.backgroundColor = 'yellow';
}

//var input = document.getElementById('input-id');
//input.addEventListener('click', ustawTlo);       //drugi sposób trzeba zmienić także w html