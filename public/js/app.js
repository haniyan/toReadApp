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
const items = document.querySelectorAll("span.list-group-item");
const doneItems = document.querySelectorAll("#toRead span.list-group-item")

//walidacja formularza
const errorMessage = document.getElementById("error-message");

//ranking box
const ranking = document.getElementById("ranking-box");
const rankingTable = document.getElementById("ranking-table");

// wydarzenia formularza

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

    newRow.innerHTML = `${newAuthor} <strong>${newTitle}</strong> ${pagesQty} stron`

}

addButton.addEventListener("click", handleClick)


items.forEach(item => {
    item.addEventListener("click", changePosition)
})

doneItems.forEach(item =>{
    item.addEventListener("click", addToRanking)
})


function changePosition() {
    const parent = this.parentElement;
    if (parent.id === toRead.id) {
        alreadyRead.appendChild(this);
    } else if (parent.id === alreadyRead.id) {
        toRead.appendChild(this);
    }

}

function addToRanking(){
    const newTd = document.createElement("td");
    rankingTable.appendChild(newTd);
    newTd.classList.add("book-title");
//jak dostac sie do tytulu tego, ktory wlasnie klikam???
    let title = document.querySelector("#toRead span.list-group-item strong").innerHTML;
    console.log(title)
    newTd.innerHTML = `<b>${title}</b>`;

}


// initial rating

const ratings = {
    book: 4.7,
}

const starsTotal = 5;

//Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings)

//form elements grab

const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

//init product

let product;

//product select change
productSelect.addEventListener("change", (e) => {
    product = e.target.value;
//   enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];

})

//rating control change
ratingControl.addEventListener("blur", (e) => {
    const rating = e.target.value;

    // make sure 5 or under
    if (rating > 5) {
        alert("Please rate 1-5")
        return;

    }
    // change rating
    rating[product] = rating;
    getRatings()

})

//Get ratings

function getRatings() {
    for (let rating in ratings) {
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        const ratingElement = document.querySelector(`.${rating} .stars-inner`);
        console.log(ratingElement)
        ratingElement.style.width = starPercentageRounded;

        const numberRating = document.querySelector(`.${rating} .number-rating`);
        numberRating.innerHTML = ratings[rating];

    }
}





