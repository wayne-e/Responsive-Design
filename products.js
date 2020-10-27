class Product {
    constructor(productId, productName, productDescription, productDetails, productPrice, productImage) {
        this._productId = productId;
        this._productName = productName;
        this._productDescription = productDescription;
        this._productDetails = productDetails;
        this._productPrice = productPrice;
        this._productImage = productImage;
    }

    get productName() {
        return this._productName
    }

    get productDescription() {
        return this._productDescription
    }

    get productDetails() {
        return this._productDetails
    }

    get productPrice() {
        return this._productPrice
    }

    get productImage() {
        return this._productImage
    }

    createCatalogElement() {
        let htmlElement = `
        <figure id="${this._productId}" class="flex product-element product-item">
            <img src="${this._productImage}" alt="Producto" class="promo-image">
                <figcaption class="product-description">
                    <h4>${this._productName}</h4>
                    <p>${this._productDescription}</p>
                    <p><span class="bold-span">${this._productPrice}</span></p>
                </figcaption>
        </figure>
        `;
    }

    createShoppingCartElement() {
        let htmlElement = `
        <figure class="flex product-element">
            <img src="${this._productImage}" alt="promocion" class="cart-image">
                <figcaption class="product-description">
                    <h4>${this._productName}</h4>
                    <p><span class="bold-span">${this._productPrice}</span></p>
                </figcaption>
                <figcaption>
                    <i class="fas fa-times-circle"></i>
                </figcaption>
        </figure>
        `;
    }

}

//Comidas

const food1 = new Product("food01", "Hamburguesa Olímpica", "La especialidad de la Casa, hamburguesa con 3 majestuosas capas de todos sus ingrediientes", "Pan tradicional, Carne, Queso, Aderesos, Vegetales", 5, "img/promo.jpg");
const food2 = new Product("food02", "Adorador Hamburguesa", "Tradicional hamburguesa prepara para satisfacer el hambre de un solo golpe", "Pan tradicional, Carne, Queso, Aderesos", 2, "img/promo.jpg");
const food3 = new Product("food03", "Papas Legendarias", "Ordena nuestras papas fritas al fuego de los dioses preparadas al instante", "Papa tradicional frita en aceites, sazonadas con sal y pimienta", 1.5, "img/promo.jpg");
const food4 = new Product("food04", "Inmortal HotDog", "Delicioso HotDog cargado de sabor hasta el último bocado", "Pan tradicional, Pasta vegetal, salchicha especial y aderesos", 1.5, "img/promo.jpg");

const foodsArray = [food1, food2, food3, food4];

export {Product, foodsArray};
//Bebidas
/*
const drink1 = new Product("drink01", "Café Minotauro", "Delicioso café disponible a toda hora del día para los amantes de esta poderosa bebida", "Cafe negro tradicional", 1, "img/promo.jpg");
const drink2 = new Product("drink02", "Cítrico Mitológico", "Bebida mezcla de cítricos para saciar tu sed desde el primer sorbo", "Bebida Natural en base a naranja, limón, mandarina y azúcares", 1, "img/promo.jpg");
const drink3 = new Product("drink03", "");
*/