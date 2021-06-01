export default abstract class Subscription {
    
    constructor(
        protected name: string,
        protected price: number,
        protected expiration: Date,
        protected advertisements: boolean       
    ){
        
    }
    get getName() {
        return this.name;
    }
    get getExpiration() {
        return this.expiration;
    }
    get getPrice() {
        return this.price;
    }
    get getAdvertisements() {
        return this.advertisements;
    }

}