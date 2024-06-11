// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// associo input
let input = document.getElementById("lista");
const ul = document.querySelector("ul");
const listaOut = document.querySelector(".lista_out")

// creo array database
const shopList = [];

// al click sul pulsante add pusho i dati nell array
let addButton = document.getElementById("add");
addButton.addEventListener("click",
    function(){
        let valore = input.value
        ul.innerHTML += `<li>${valore}</li>`;
        shopList.push(valore);
        console.log(shopList);
    }
);


// creo ciclo while per stampare la lista al click di print
let print = document.getElementById("print");
print.addEventListener("click",
    function(){
        let i=0;
        while (i < shopList.length-1) {
            listaOut.classList.add("display"); 
            i++;            
        }
    }
)

    