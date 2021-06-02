"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FreeSubscription_1 = __importDefault(require("./FreeSubscription"));
const BasicSubscription_1 = __importDefault(require("./BasicSubscription"));
const PremiumSubscription_1 = __importDefault(require("./PremiumSubscription"));
class User {
    constructor(id, name, email, payment, subscription = new FreeSubscription_1.default, access = true) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.payment = payment;
        this.subscription = subscription;
        this.access = access;
    }
    set setName(value) {
        this.name = value;
    }
    get getName() {
        return this.name;
    }
    set setEmail(value) {
        this.email = value;
    }
    get getEmail() {
        return this.email;
    }
    set setPayment(value) {
        this.payment = value;
    }
    get getPayment() {
        return this.payment;
    }
    set setSubscription(value) {
        switch (value) {
            case 'free':
                this.subscription = new FreeSubscription_1.default;
            case 'basic':
                this.subscription = new BasicSubscription_1.default;
            case 'premium':
                this.subscription = new PremiumSubscription_1.default;
        }
    }
    get getSubscription() {
        return this.subscription;
    }
    checkAccess() {
        let date = new Date();
        let expiration = this.subscription.getExpiration;
        if (expiration < date) {
            this.access = false;
            return "Access denied";
        }
        else {
            return "Access granted";
        }
    }
}
exports.default = User;
