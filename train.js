class ShoppingCart {
    constructor () {
        this.items = [];
    }
    getItems() {
        return  this.items;
    }
    addItem(itemName, quantity, price) {
        const item = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        this.items.push(item)
    }
    total() {
        return this.items.reduce((totalSum, currentItem) => {
            const itemPrice = currentItem.quantity * currentItem.pricePerUnit;
            return totalSum + itemPrice;
        }, 0)
    }
}

const cart = new ShoppingCart()
cart.addItem("item 1", 1, 15.5)
cart.addItem("item 2", 2, 3)
cart.addItem("item 3", 10, 2)
cart.addItem("item 4", 0, 2)
cart.addItem("item 5", 2, 0)
console.log(cart.total());


 