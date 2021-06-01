import Subscription from './Subscription';

export default class BasicSubscription extends Subscription {
    constructor() {
        let date: Date = new Date();
        date.setMonth(date.getMonth() + 1);
        let expiration: Date = date;
        super("Basic", 3, expiration, true);
        
    }
}