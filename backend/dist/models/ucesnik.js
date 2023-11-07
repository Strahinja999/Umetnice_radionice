"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Ucesnik = new Schema({
    korisnickoIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
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
    radionicePrisustovovao: {
        type: (Array)
    },
    komentari: {
        type: (Array)
    },
    radioniceLajkovao: {
        type: (Array)
    },
    trenutnoPrijavljen: {
        type: (Array)
    },
    poruke: {
        type: (Array)
    },
    slika: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Ucesnik', Ucesnik, 'ucesnici');
//# sourceMappingURL=ucesnik.js.map