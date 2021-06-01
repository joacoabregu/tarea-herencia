import Subscription from './Subscription';

export default class PremiumSubscription extends Subscription {
    constructor() {
        let date: Date = new Date();
        date.setMonth(date.getMonth() + 1);
        let expiration: Date = date;
        super("Premium", 9, expiration, false);
        
    }
}