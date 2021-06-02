"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscription {
    constructor(name, price, expiration, advertisements) {
        this.name = name;
        this.price = price;
        this.expiration = expiration;
        this.advertisements = advertisements;
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
exports.default = Subscription;
