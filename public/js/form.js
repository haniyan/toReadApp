//formularz
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
console.log(author)
//wysylanie formularza
const add = document.getElementById("add");



function handleClick(){
    const newRow = document.createElement("a" );
    newRow.innerHTML = `${author.value} ${title.value} ${pages.value}`

    toRead.appendChild(newRow)
    changePosition(newRow);
    //teraz tworze a, ale musze jeszcze dodac mu hrefa i klase, zeby sie stylowal w css
}

add.addEventListener("click",handleClick);

