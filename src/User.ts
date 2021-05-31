class User {
    
    constructor(
        private id: number,
        private name: string, 
        private email: string, 
        private payment: string,
        //private subscription: Subscription
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


}