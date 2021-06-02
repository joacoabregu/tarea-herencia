import Subscription from './Subscription';
import FreeSubscription from './FreeSubscription';
import BasicSubscription from './BasicSubscription';
import PremiumSubscription from './PremiumSubscription';

export default class User {
    
    constructor(
        private id: number,
        private name: string, 
        private email: string, 
        private payment: string,
        private subscription: Subscription = new FreeSubscription,
        private access: boolean = true,
        ) {
        

    }
    set setName(value: string) {
        this.name = value;
    }
    get getName() {
        return this.name;
    }

    set setEmail(value: string) {
        this.email = value;
    }
    get getEmail() {
        return this.email;
    }

    set setPayment(value: string) {
        this.payment = value;
    }
    get getPayment() {
        return this.payment;
    }

    set setSubscription(value: "free" | "basic" | "premium") {
        switch (value) {
            case 'free': 
                this.subscription = new FreeSubscription;
            case 'basic':
                this.subscription = new BasicSubscription;
            case 'premium':
                this.subscription = new PremiumSubscription;   
        }
    }
    get getSubscription() {
        return this.subscription;
    }

    checkAccess() {
        let date: Date = new Date();
        let expiration: Date = this.subscription.getExpiration;
        if(expiration < date){
            this.access = false;
            return "Access denied"
        } else {
            return "Access granted"
        }
    }

}