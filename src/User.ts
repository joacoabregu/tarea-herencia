import Subscription from './Subscription';
import FreeSubscription from './FreeSubscription';
import BasicSubscription from './BasicSubscription';
import PremiumSubscription from './PremiumSubscription';

class User {
    
    constructor(
        private id: number,
        private name: string, 
        private email: string, 
        private payment: string,
        private subscription: FreeSubscription,
        private access: boolean = true,
        ) {
        /* this.id = id;
        this.name = name;
        this.email = email;
        this.payment = payment;
        this.subscription = subscription; */

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
        }
    }

}