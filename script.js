import { foodsArray, Product, drinksArray, dessertsArray } from './products.js';
import { promoArray, Promotion } from './promo.js';


const sections = [...document.querySelectorAll('section')];
const getLinkById = id => document.querySelector(`a[href='#${id}']`);
const barsIcon = document.getElementById("bars-icon")
const mainNavbar = document.getElementById("navbar");
const navLinks = document.getElementsByClassName("nav-link");
const productDiv = document.getElementById("product-div");
const productElement = document.getElementsByClassName("product-item");
const foodCatalog = document.getElementById("food-catalog");
const drinkCatalog = document.getElementById("drink-catalog");
const dessertCatalog = document.getElementById("dessert-catalog");
const allProductsCatalog = document.getElementById("all-products-catalog");
const foodDiv = document.getElementById("food-div");
const drinkDiv = document.getElementById("drink-div");
const dessertDiv = document.getElementById("dessert-div");
const addtoCar = document.getElementById("add-to-cart");
const successDiv = document.getElementById("success-div");
const shoppingCartDiv = document.getElementById("shopping-cart-div");
const shoppingCartIcon = document.getElementById("shopping-cart");
const payButton = document.getElementById("pay-button");
const finalModal = document.getElementById("final-modal");
const confirmationButton = document.getElementById("confirmation-button");
const confirmatonDiv = document.getElementById("confirmation-div");
const finalForm = document.getElementById("final-form");
const closeModal = document.getElementsByClassName("close-modal-button");
const amountButtons = document.getElementsByClassName("value-button");
const amountText = document.getElementById("amount-text");
const foodElementsDiv = document.getElementById("food-elements-div");
const drinkElementsDiv = document.getElementById("drink-elements-div");
const dessertElementsDiv = document.getElementById("dessert-elements-div");
const promotionsDiv = document.getElementById("promo-div");
let amount = 1, i = 0, foodElements = "", drinkElements = "", dessertElement = "", promoElements = "", productAmount = 4;

/*CONSTRUCCION DE ELEMENTOS HTML - >>Asumimos que solo habrán cuatro productos por Categoría<<*/

for (i = 0; i < promoArray.length; i++) {
    promoElements += promoArray[i].createPromotionElement();
}
promotionsDiv.innerHTML = promoElements;


for (i = 0; i < productAmount; i++) {
    foodElements += foodsArray[i].createCatalogElement();
    drinkElements += drinksArray[i].createCatalogElement();
    dessertElement += dessertsArray[i].createCatalogElement();
}
foodElementsDiv.innerHTML = foodElements;
drinkElementsDiv.innerHTML = drinkElements;
dessertElementsDiv.innerHTML = dessertElement;
















const inView = section => {
    let top = section.offsetTop;
    let height = section.offsetHeight;
    while (section.offsetParent) {
        section = section.offsetParent;
        top += section.offsetTop;
    }
    return (
        top < (window.pageYOffset + window.innerHeight) &&
        (top + height) > window.pageYOffset
    );
};
window.onscroll = () => {
    let next = false;
    sections.forEach(section => {
        const a = getLinkById(section.id);
        if (inView(section) && !next) {
            a.classList.add('main-navbar--current');
            next = true;
        } else {
            a.classList.remove('main-navbar--current');
        }
    });
};

barsIcon.addEventListener("click", function () {
    mainNavbar.classList.toggle("display-bar");
});
foodCatalog.addEventListener("click", function () {
    allProductsCatalog.classList.remove("display-none");
    foodDiv.classList.remove("display-none");
});
drinkCatalog.addEventListener("click", function () {
    allProductsCatalog.classList.remove("display-none");
    drinkDiv.classList.remove("display-none");
});
dessertCatalog.addEventListener("click", function () {
    allProductsCatalog.classList.remove("display-none");
    dessertDiv.classList.remove("display-none");
});
addtoCar.addEventListener("click", function () {
    successDiv.classList.remove("display-none");
    setTimeout(function () {
        successDiv.classList.add("display-none");
    }, 1000);
});
shoppingCartIcon.addEventListener("click", function () {
    shoppingCartDiv.classList.remove("display-none");
});
payButton.addEventListener("click", function () {
    finalModal.classList.remove("display-none");
});
confirmationButton.addEventListener("click", function () {
    confirmatonDiv.classList.remove("display-none");
    finalForm.reset();
    finalModal.classList.add("display-none");
    setTimeout(function () {
        confirmatonDiv.classList.add("display-none");
    }, 2500);
});


for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        mainNavbar.classList.remove("display-bar");
    });
}

for (i = 0; i < productElement.length; i++) {
    productElement[i].addEventListener("click", function () {
        productDiv.classList.remove("display-none");
    });
}

for (i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener("click", function (event) {
        closeParent(event.target);
    });
}

for (i = 0; i < amountButtons.length; i++) {
    amountButtons[i].addEventListener("click", function (event) {
        editAmount(event);
    });
}

function closeParent(element) {
    let parent = element.parentNode.parentNode.parentNode;
    parent.classList.add("display-none");
    if (parent.getAttribute("id") === "all-products-catalog") {
        foodDiv.classList.add("display-none");
        drinkDiv.classList.add("display-none");
        dessertDiv.classList.add("display-none");
    }
    else if (parent.getAttribute("id") === "product-div") {
        amount = 1;
        amountText.innerText = amount;
    }
}

function editAmount(event) {
    amount = parseInt(amountText.innerText);
    let buttonValue = event.target.innerText;
    if (buttonValue === "+") {
        amount++;
    } else {
        if (amount !== 1) {
            amount--;
        }
    }
    amountText.innerText = amount;
}