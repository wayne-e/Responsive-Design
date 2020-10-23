const sections = [...document.querySelectorAll('section')];
const getLinkById = id => document.querySelector(`a[href='#${id}']`);
const barsIcon = document.getElementById("bars-icon")
const mainNavbar = document.getElementById("navbar");
const navLinks = document.getElementsByClassName("nav-link");
const productDiv = document.getElementById("product-div");
const productElement = document.getElementsByClassName("product-item");
const backProductButton = document.getElementById("back-product-btn");
const foodCatalog = document.getElementById("food-catalog");
const drinkCatalog = document.getElementById("drink-catalog");
const dessertCatalog = document.getElementById("dessert-catalog");
const allProductsCatalog = document.getElementById("all-products-catalog");
const foodDiv = document.getElementById("food-div");
const drinkDiv = document.getElementById("drink-div");
const dessertDiv = document.getElementById("dessert-div");
const closeCatalogButton = document.getElementById("close-catalog-button");
const addtoCar = document.getElementById("add-to-cart");
const successDiv = document.getElementById("success-div");
const closeCartButton = document.getElementById("close-cart-button");
const shoppingCartDiv = document.getElementById("shopping-cart-div");
const shoppingCartIcon = document.getElementById("shopping-cart");
const payButton = document.getElementById("pay-button");
const finalModal = document.getElementById("final-modal");
const finalModalCloseBtn = document.getElementById("final-close-button");
const confirmationButton = document.getElementById("confirmation-button");
const confirmatonDiv = document.getElementById("confirmation-div");
const finalForm = document.getElementById("final-form");

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

backProductButton.addEventListener("click", function () {
    productDiv.classList.add("display-none");
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
closeCatalogButton.addEventListener("click", function () {
    foodDiv.classList.add("display-none");
    drinkDiv.classList.add("display-none");
    dessertDiv.classList.add("display-none");
    allProductsCatalog.classList.add("display-none");
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
closeCartButton.addEventListener("click", function () {
    shoppingCartDiv.classList.add("display-none");
});
payButton.addEventListener("click", function () {
    finalModal.classList.remove("display-none");
});
finalModalCloseBtn.addEventListener("click", function () {
    finalModal.classList.add("display-none");
});
confirmationButton.addEventListener("click", function () {
    confirmatonDiv.classList.remove("display-none");
    finalForm.reset();
    finalModal.classList.add("display-none");
    setTimeout(function () {
        confirmatonDiv.classList.add("display-none");
    }, 1000);
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
