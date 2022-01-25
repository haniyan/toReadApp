//formularz
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
// wysylanie formularza
const addButton = document.querySelector(".add");
const error = document.querySelector(".error")

//lista
const toRead = document.getElementById("toRead");
const alreadyRead = document.getElementById("alreadyRead");
const items = document.querySelectorAll("span.list-group-item")

//walidacja formularza
const errorMessage = document.getElementById("error-message");


    author.addEventListener("keyup",function (e){
        if(e.target.value.length <=5) {
            error.innerHTML="Imię autora jest za krótkie";
        }
    })

    title.addEventListener("keyup",function (e){
        if(e.target.value.length <=5) {
            error.innerHTML="Tytuł jest za krótki";
        }
    })

//nie działa jeszcze
    pages.addEventListener("keyup",function (e){
        if(typeof(e.target.value) !== "number") {
            error.innerHTML="Wprowadź liczbę!";
        }
    })


function handleClick() {
    const newRow = document.createElement("span");
    toRead.appendChild(newRow);
    newRow.classList.add("list-group-item");

    let newAuthor = author.value;
    let newTitle = title.value;
    let pagesQty = pages.value;

    newRow.innerHTML = `${newAuthor} <b>${newTitle}</b> ${pagesQty} stron`

}

addButton.addEventListener("click", handleClick)


items.forEach(item => {
    item.addEventListener("click", changePosition)
})

function changePosition() {
    const parent = this.parentElement;
    if (parent.id === toRead.id) {
        alreadyRead.appendChild(this);
    } else if (parent.id === alreadyRead.id) {
        toRead.appendChild(this);
    }
}




