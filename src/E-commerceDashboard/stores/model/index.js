class Product {
    constructor(productObject) {
        this.productId = productObject.id
        this.avaliableSizes = productObject.availableSizes;
        this.currencyFormat = productObject.currencyFormat
        this.currencyId = productObject.currencyId
        this.description = productObject.description
        this.installmentsCount = productObject.installments
        this.isFreeShipping = productObject.isFreeShipping
        this.price = productObject.price
        this.printStyle = productObject.style
        this.title = productObject.title
        this.imageURL = productObject.image

    }

}
export default Product
