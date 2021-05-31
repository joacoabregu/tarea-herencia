abstract class Subscription {
    
    constructor(
        protected name: string,
        protected price: number,
        protected expiration: Date,
        protected advertisements: boolean       
    ){

    }
}