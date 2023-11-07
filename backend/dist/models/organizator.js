"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Organizator = new Schema({
    korisnickoIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    naziv: {
        type: String
    },
    maticniBroj: {
        type: String
    },
    drzava: {
        type: String
    },
    grad: {
        type: String
    },
    postanskiBroj: {
        type: String
    },
    ulica: {
        type: String
    },
    broj: {
        type: Number
    },
    telefon: {
        type: String
    },
    email: {
        type: String
    },
    odobreno: {
        type: Number
    },
    radionice: {
        type: (Array)
    },
    poruke: {
        type: (Array)
    },
    slika: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Organizator', Organizator, 'organizatori');
//# sourceMappingURL=organizator.js.map