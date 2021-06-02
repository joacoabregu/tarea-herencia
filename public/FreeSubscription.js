"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subscription_1 = __importDefault(require("./Subscription"));
class FreeSubscription extends Subscription_1.default {
    constructor() {
        let date = new Date();
        date.setDate(date.getDate() + 15);
        let expiration = date;
        super("Free", 0, expiration, true);
    }
}
exports.default = FreeSubscription;
