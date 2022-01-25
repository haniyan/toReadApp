//nie usuwac a apendowac, skad wiadomo? bo parent ma odpowiednie id

const toRead = document.getElementById("toRead");
const alreadyRead = document.getElementById("alreadyRead");

const items = document.querySelectorAll("a.list-group-item")

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


