

class Order {
    constructor(orderId, productsArray, totalAmount, customerName, customerPhone, customerEmail, customerAdress, customerCard, orderTime) {
        this._orderId = orderId;
        this._productsArray = productsArray;
        this._totalAmount = totalAmount;
        this._customerName = customerName;
        this._customerPhone = customerPhone;
        this._customerEmail = customerEmail;
        this._customerAdress = customerAdress;
        this._customerCard = customerCard;
        this._orderTime = orderTime;
    }

    get orderId() {
        return this._orderId;
    }
    get productsArray() {
        return this._productsArray;
    }
    get totalAmount() {
        return this._totalAmount;
    }
    get customerName() {
        return this._customerName;
    }
    get customerPhone() {
        return this._customerPhone;
    }
    get customerEmail() {
        return this._customerEmail;
    }
    get customerAdress() {
        return this._customerAdress;
    }
    get customerCard() {
        return this._customerCard;
    }
    get orderTime(){
        return this._orderTime;
    }
}

export { Order }