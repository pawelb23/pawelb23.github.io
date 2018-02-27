'use strict';

// definicja funkcji ajax
function ajax( method, url ) {
    
    
    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if ( httpReq.status == 200 ) {
            
                var returnData = httpReq.responseText; //to 1
                
                console.log(returnData);     //to 1
                httpReq.onsuccess(returnData);
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            }
            
        }
    
    }

httpReq.onsuccess = function(response)//funkcja anonimowa
    {
    var jsonObjArray = JSON.parse(response); //to 1
    console.log(jsonObjArray);

    var beginOfData = document.createElement('p');
    var endOfData = document.createElement('p');
    
    beginOfData.innerHTML = '<br>-----Begin of data-----<br>';
    endOfData.innerHTML = '<br>-----End of data-----<br><br><br><br>';
    
    document.body.appendChild(beginOfData);
    
    jsonObjArray.forEach(function(element, index) {
        var userID = document.createElement('p');
        userID.innerHTML = '<b>userID:</b> ' + element.id;
        document.body.appendChild(userID);
        
        var name = document.createElement('p');
        name.innerHTML = '<b>Name:</b> ' + element.name;
        document.body.appendChild(name);
    })
    
    document.body.appendChild(endOfData);
}

    // wysłanie danych do serwera
    httpReq.send();
}



window.addEventListener('scroll', function() {
    var docHeight = document.documentElement.offsetHeight;//wysokość całego dokumentu
//console.log(docHeight);
    var offsetY = parseInt(this.innerHeight + this.pageYOffset, 10); ; //ilosc przeskrolowanych pikseli + wysokość okna
    if (docHeight === offsetY) {
        ajax('GET','https:jsonplaceholder.typicode.com/users');
    }
});