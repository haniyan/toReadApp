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
