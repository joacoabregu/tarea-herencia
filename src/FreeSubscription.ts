import Subscription from './Subscription';

export default class FreeSubscription extends Subscription {
    

    constructor() {
        let date: Date = new Date();
        date.setDate(date.getDate() + 15);
        let expiration: Date = date; 
        super("Free", 0, expiration, true);
        
    }
}