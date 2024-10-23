let addtodoButton = document.getElementById('addButton');
let toDoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

addtodoButton.addEventListener('click',()=>{
    var prargraph = document.createElement('p');
    prargraph.innerHTML=inputField.value;
    toDoContainer.appendChild(prargraph)
    inputField.value ="";

    // |-------------------------- completed -----------------|
    prargraph.addEventListener('click',()=>{
        prargraph.style.textDecoration ="line-through";
    });

     // |-------------------------- remove -----------------|
     prargraph.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(prargraph);
    });

})