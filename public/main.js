"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
let usuario = new User_1.default(0, "joaco", "joaco@gmail.com", "credit card");
console.log(usuario);
usuario.setSubscription = "basic";
console.log(usuario);
console.log(usuario.checkAccess())
