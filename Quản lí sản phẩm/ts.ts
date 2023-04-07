export class Product {
     private name :string;
     private price : number

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getName(name :string){
         return this.name
    }
    getPrice(price : number){
         return this.price
    }
    setName(name : string){
         this.name = name;
    }
    setPrice(price : number){
         this.price = price;
    }
}
export class ProductManager {
    private  products =[];
    constructor() {
    }
    get getAll(){
        return this.products
    }
    set add(product){
        this.products.push(product);
    }
}
