import { dessertsArray, drinksArray, foodsArray, Product } from './products.js';

class Promotion extends Product {
    constructor(promoId, product1, product2, product3, promoName, promoImage) {
        super();
        this._promoId = promoId;
        this._promoName = promoName;
        this._promoElements = `${product1.name} + ${product2.name} + ${product3.name}`;
        this._promoDescription = `${product1.description} + ${product2.description} + ${product3.description}`;
        this._promoImage = promoImage;
        //Calcular el precio del conjunto, que es "El total, menos el 10%"
        let totalPrice = product1.price + product2.price + product3.price;
        this._promoPrice = totalPrice - (totalPrice * 0.1);
    }

    get id() {
        return this._promoId;
    }

    get name() {
        return this._promoName;
    }
    get promoElements() {
        return this._promoElements;
    }
    get description() {
        return this._promoDescription;
    }
    get price() {
        return this._promoPrice;
    }
    get image(){
        return this._promoImage;
    }
    createPromotionElement() {
        let htmlElement = `
                <figure id="${this._promoId}" class="flex promo-figure product-item">
                    <img src="${this._promoImage}" alt="${this._promoName}" class="promo-image">
                    <figcaption class="flex figcaption-description">
                        <h4 class="full-width">${this._promoName}</h4>
                        <p class="full-width">${this._promoElements}</p>
                        <p class="full-width"><span class="bold-span">$${this._promoPrice.toFixed(2)}</span></p>
                    </figcaption>
                </figure>
                `;

        return htmlElement;
    }

    createShoppingCartElement(id) {
        let htmlElement = `
        <figure class="flex product-element">
            <img src="${this._promoImage}" alt="promocion" class="cart-image">
                <figcaption class="product-description">
                    <h4>${this._promoName}</h4>
                    <p><span class="bold-span">$${this._promoPrice.toFixed(2)}</span></p>
                </figcaption>
                <figcaption>
                    <i id="${id}" class="fas fa-times-circle"></i>
                </figcaption>
        </figure>
        `;
        return htmlElement;
    }

}

let promo01 = new Promotion("promo01", foodsArray[0], drinksArray[0], dessertsArray[0], "Poder Olímpico", "img/combo01.jpg");
let promo02 = new Promotion("promo02", foodsArray[0], foodsArray[2], drinksArray[1], "Combo Casual", "img/combo02.jpg");
let promo03 = new Promotion("promo03", foodsArray[1], drinksArray[0], dessertsArray[0], "Tradicional Combo", "img/combo03.jpg");
let promo04 = new Promotion("promo04", foodsArray[2], drinksArray[1], dessertsArray[0], "Golpeador Combo", "img/combo04.jpg");
let promo05 = new Promotion("promo05", foodsArray[3], drinksArray[0], dessertsArray[0], "Combo Fresco", "img/combo05.jpg");
let promo06 = new Promotion("promo06", foodsArray[3], drinksArray[1], dessertsArray[3], "Combo Jr", "img/combo06.jpg");

let promoArray = [promo01, promo02, promo03, promo04, promo05, promo06];

export { promoArray, Promotion };