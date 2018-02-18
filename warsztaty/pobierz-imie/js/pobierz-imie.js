'use strict';

//function pobierzImie(event) {
//    event.preventDefault();
////    console.log('działa :)');
//    var form = document.getElementById('formularz');
//    var fname = document.getElementsByTagName('input')[0];
//    var lname = document.getElementsByTagName('input')[1];
////    console.log(form);
//    
//console.log(fname.value);
//console.log(lname.value);
//}

//=========================

//--- drugi sposób ---

function pobierzImie(event) {
    event.preventDefault();
//    console.log('działa :)');
    var form = document.getElementById('formularz');
//    console.log(form);
    for (var i = 0; i < form.length; i++) {
//        console.log(form.elements[i]);
        if (form.elements[i].value != 'Submit') {       //elements --- odnosi się do stałego szukania w funckji
            console.log(form.elements[i].value);
        } else {
           console.log(form.elements[i]); 
        }
    }
}
