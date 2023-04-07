"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function (name) {
        return this.name;
    };
    Product.prototype.getPrice = function (price) {
        return this.price;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
exports.Product = Product;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this.products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
exports.ProductManager = ProductManager;
