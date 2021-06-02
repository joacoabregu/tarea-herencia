"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subscription_1 = __importDefault(require("./Subscription"));
class BasicSubscription extends Subscription_1.default {
    constructor() {
        let date = new Date();
        date.setMonth(date.getMonth() + 1);
        let expiration = date;
        super("Basic", 3, expiration, true);
    }
}
exports.default = BasicSubscription;
