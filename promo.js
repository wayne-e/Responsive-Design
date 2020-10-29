import { dessertsArray, drinksArray, foodsArray, Product } from './products.js';

class Promotion extends Product {
    constructor(product1, product2, product3, promoName, promoImage) {
        super();
        this._promoName = promoName;
        this._promoElements = `${product1.productName} + ${product2.productName} + ${product3.productName}`;
        this._promoDescription = `${product1.productDescription} + ${product2.productDescription} + ${product3.productDescription}`;;
        this._promoImage = promoImage;
        //Calcular el precio del conjunto, que es "El total, menos el 5%"
        let totalPrice = product1.productPrice + product2.productPrice + product3.productPrice;
        this._promoPrice = totalPrice - (totalPrice * 0.05);
    }

    get promoName() {
        return this._promoName;
    }
    get promoElements() {
        return this._promoElements;
    }
    get promoDescription() {
        return this._promoDescription;
    }
    get promoPrice() {
        return this._promoPrice;
    }

    createPromotionElement() {
        let htmlElement = `
                <figure class="flex promo-figure product-item">
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

}

let promo01 = new Promotion(foodsArray[0], drinksArray[0], dessertsArray[0], "Poder Olímpico", "img/promo.jpg");
let promo02 = new Promotion(foodsArray[0], foodsArray[2], drinksArray[1], "Alto Sabor Combo", "img/promo.jpg");
let promo03 = new Promotion(foodsArray[1], drinksArray[0], dessertsArray[0], "Poder Olímpico", "img/promo.jpg");
let promo04 = new Promotion(foodsArray[2], drinksArray[1], dessertsArray[0], "Poder Olímpico", "img/promo.jpg");
let promo05 = new Promotion(foodsArray[3], drinksArray[0], dessertsArray[0], "Poder Olímpico", "img/promo.jpg");
let promo06 = new Promotion(foodsArray[3], drinksArray[0], dessertsArray[0], "Poder Olímpico", "img/promo.jpg");

let promoArray = [promo01, promo02, promo03, promo04, promo05, promo06];

export { promoArray, Promotion };