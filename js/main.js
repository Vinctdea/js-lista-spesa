// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// associo input
let input = document.getElementById("lista")


// creo array database
const shopList = [];

// al click sul pulsante add pusho i dati nell array
let addButton = document.getElementById("add")
addButton.addEventListener("click",
    function(){
        let valore = input.value
        shopList.push(valore);
        console.log(shopList);
    }
)