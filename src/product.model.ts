
// We dont need to delcare the properties outside it is the shorthand;
export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number
    ) {

    }
}
