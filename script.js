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
const selectedProductImage = document.getElementById("selected-product-image");
const selectedProductName = document.getElementById("selected-product-name");
const selectedProductDescription = document.getElementById("selected-product-description");
const selectedProductPrice = document.getElementById("selected-product-price");
const productsInCar = document.getElementById("products-in-cart");
const finalAmountHeader = document.getElementById("final-amount");
const userName = document.getElementById("user-name");
const userPhone = document.getElementById("user-phone");
const userEmail = document.getElementById("user-email");
const userAdress = document.getElementById("user-adress");
const userCard = document.getElementById("user-card");
const currentTimeSpan = document.getElementById("current-time");
const errorMessage = document.getElementById("error-message");
const errorDiv = document.getElementById("error-div");
let amount = 1, i = 0, foodElements = "", drinkElements = "", dessertElement = "", promoElements = "";
let productAmount = 4, selectedProduct, productPrice = 0, finalAmount = 0, currentTime, currentDate;
let shoppingCartArray = [], element;

///VERIFICAR SI HAY ELEMENTOS EN LOCAL STORAGE AL INICIAR SESIÓN
/*
if(localStorage.getItem("shoppingCartContent")){
    shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartContent"));
    finalAmount = localStorage.getItem("finalAmount");
    alert(shoppingCartArray);
}
*/
/*CONSTRUCCION DE ELEMENTOS HTML - >>Asumimos que solo habrán Cuatro productos por Categoría, Seis Promociones<<*/

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

///////
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

//Agregar Al Carrito
addtoCar.addEventListener("click", function () {
    payButton.removeAttribute("disabled");
    for (i = 0; i < amount; i++) {
        shoppingCartArray.push(selectedProduct);
    }
    updateShoppingCart();
    productDiv.classList.add("display-none");
    amount = 1;
    amountText.innerText = amount;
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
    
    let user = userName.value, phone = userPhone.value, email = userEmail.value, adress = userAdress.value, card = userCard.value;
    if (user === "" || phone === "" || email === "" || adress === "" || card === "") {
        displayError("Favor Llenar Todos los Campos");
        return;
    }
    if (phone.length !== 8) {
        displayError("Ingrese un número de Teléfono Válido");
        return;
    }
    if (Number.isInteger(parseInt(card))) {
        let arrayCard = [], j = 0, number = "", newNumber, counter = 0;
        for (i = card.length; i > 0; i--) {
            arrayCard.push(parseInt(card[i - 1]));
            if (j % 2 !== 0) {
                arrayCard[j] *= 2;
                if (arrayCard[j] >= 10) {
                    number = "" + arrayCard[j];
                    newNumber = parseInt(number[0]) + parseInt(number[1]);
                    arrayCard[j] = newNumber;
                }
            }
            counter += arrayCard[j];
            j++;
        }
        if (counter % 10 !== 0) {
            displayError("Ingrese una Tarjeta Válida");
            return;
        }

    }
    else {
        displayError("Ingrese una Tarjeta Válida");
        return;
    }

    currentTime = getCurrentTime();
    currentTimeSpan.innerText = currentTime;
    confirmatonDiv.classList.remove("display-none");
    shoppingCartDiv.classList.add("display-none");
    finalModal.classList.add("display-none");
    finalForm.reset();
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
    productElement[i].addEventListener("click", function (event) {
        assignElement(event.target);
        productPrice = selectedProduct.price;
        selectedProductImage.setAttribute("src", selectedProduct.image);
        selectedProductName.innerText = selectedProduct.name;
        selectedProductDescription.innerText = selectedProduct.description;
        selectedProductPrice.innerText = `$${selectedProduct.price.toFixed(2)}`;
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
    let buttonValue = event.target.innerText;
    if (buttonValue === "+") {
        amount++;
    } else {
        if (amount !== 1) {
            amount--;
        }
    }
    productPrice = selectedProduct.price * amount;
    amountText.innerText = amount;
    selectedProductPrice.innerText = `$${productPrice.toFixed(2)}`;

}

function assignElement(selectedElement) {
    let selectedItemId = selectedElement.getAttribute("id");
    for (i = 0; i < promoArray.length; i++) {
        if (selectedItemId === promoArray[i].id) {
            selectedProduct = promoArray[i];
            return;
        }
    }

    for (i = 0; i < productAmount; i++) {
        if (selectedItemId === foodsArray[i].id) {
            selectedProduct = foodsArray[i];
            return;
        }
        else if (selectedItemId === drinksArray[i].id) {
            selectedProduct = drinksArray[i];
            return;
        }
        else if (selectedItemId === dessertsArray[i].id) {
            selectedProduct = dessertsArray[i];
            return;
        }
    }
}

function updateShoppingCart() {
    let template = "";
    finalAmount = 0;
    for (i = shoppingCartArray.length; i > 0; i--) {
        template += `${shoppingCartArray[i - 1].createShoppingCartElement(i - 1)}`;
        finalAmount += shoppingCartArray[i - 1].price;
    }
    if (shoppingCartArray.length === 0) {
        payButton.setAttribute("disabled", "");
    }
    productsInCar.innerHTML = template;
    finalAmountHeader.innerText = `$${finalAmount.toFixed(2)}`;
    for (i = shoppingCartArray.length; i > 0; i--) {
        element = document.getElementById(`${i - 1}`);
        element.addEventListener("click", function (event) {
            closeElement(event.target);
        });
    }
    localStorage.setItem("shoppingCartContent", JSON.stringify(shoppingCartArray));
    localStorage.setItem("finalAmount", finalAmount);
}

function closeElement(toCloseElement) {
    let elementId = parseInt(toCloseElement.getAttribute("id"));
    shoppingCartArray.splice(elementId, 1);
    updateShoppingCart();
}

function displayError(message) {
    errorMessage.innerText = message;
    errorDiv.classList.remove("display-none");
    setTimeout(function () {
        errorDiv.classList.add("display-none");
    }, 2000);
}

function getCurrentTime() {
    let hour, minutes, seconds;
    currentDate = new Date();
    hour = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return `${hour} : ${minutes} : ${seconds}`;
}