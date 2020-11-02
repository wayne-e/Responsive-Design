class Product {
    constructor(productId, productName, productDescription, productPrice, productImage) {
        this._id = productId;
        this._productName = productName;
        this._productDescription = productDescription;
        this._productPrice = productPrice;
        this._productImage = productImage;
    }

    get id(){
        return this._id;
    }

    get name() {
        return this._productName
    }

    get description() {
        return this._productDescription
    }

    get price() {
        return this._productPrice
    }

    get image() {
        return this._productImage
    }

    createCatalogElement() {
        let htmlElement = `
        <figure id="${this._id}" class="flex product-element product-item">
            <img src="${this._productImage}" alt="Producto" class="promo-image">
                <figcaption class="product-description">
                    <h4>${this._productName}</h4>
                    <p>${this._productDescription}</p>
                    <p><span class="bold-span">$${this._productPrice.toFixed(2)}</span></p>
                </figcaption>
        </figure>
        `;
        return htmlElement;
    }

    createShoppingCartElement(id) {
        let htmlElement = `
        <figure class="flex product-element">
            <img src="${this._productImage}" alt="promocion" class="cart-image">
                <figcaption class="product-description">
                    <h4>${this._productName}</h4>
                    <p><span class="bold-span">$${this._productPrice.toFixed(2)}</span></p>
                </figcaption>
                <figcaption>
                    <i id="${id}" class="fas fa-times-circle"></i>
                </figcaption>
        </figure>
        `;
        return htmlElement;
    }

}

//Comidas

const food1 = new Product("food01", "Hamburguesa Olímpica", "Hamburguesa con 3 capas de todos sus Ingredientes", 5, "img/hamburguesa-olimpica.jpg");
const food2 = new Product("food02", "Adorador Hamburguesa", "Hamburguesa tradicional con una capa de Ingredientes", 2, "img/adorador.jpg");
const food3 = new Product("food03", "Papas Legendarias", "Papas fritas salteadas", 1.5, "img/papas.jpg");
const food4 = new Product("food04", "Inmortal HotDog", "Hotdog con doble Queso", 1.5, "img/hotdog.jpg");

const foodsArray = [food1, food2, food3, food4];


//Bebidas

const drink1 = new Product("drink01", "Café Minotauro", "Cafe negro doble", 1, "img/cafe.jpg");
const drink2 = new Product("drink02", "Cítrico Mitológico", "Bebida de cítricos", 1, "img/limonada.jpg");
const drink3 = new Product("drink03", "Té de los dioses", "Té caliente de Manzana y Canela", 1, "img/te.jpg");
const drink4 = new Product("drink04", "Malteada Especial", "Malteada de Chocolate", 1.5, "img/malteada.jpg");

const drinksArray = [drink1, drink2, drink3, drink4];

//Postres

const dessert1 = new Product("dessert01", "Muffin Encantado", "Muffin de Vainilla con Pasas", 1, "img/muffin.jpg");
const dessert2 = new Product("dessert02", "Tres Leches Celestial", "Tres Leches tradicional", 1.5, "img/tresleches.jpg");
const dessert3 = new Product("dessert03", "Flan de Nubes", "Flan suave de Vainilla", 1, "img/flan.jpg");
const dessert4 = new Product("dessert04", "CheeseCake Electrizante", "Cheesecake con Fresa", 2, "img/cheesecake.jpg");

const dessertsArray = [dessert1, dessert2, dessert3, dessert4];



export { Product, foodsArray, drinksArray, dessertsArray };