"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Radionica = new Schema({
    id: {
        type: Number
    },
    naziv: {
        type: String
    },
    datum: {
        type: Date
    },
    mestoOdrzavanja: {
        type: String
    },
    kratakOpis: {
        type: String
    },
    dugacakOpis: {
        type: String
    },
    ukupnoMesta: {
        type: Number
    },
    rezervisanaMesta: {
        type: Number
    },
    listaCekanja: {
        type: (Array)
    },
    listaPrijavljenih: {
        type: (Array)
    },
    listaOdobrenih: {
        type: (Array)
    },
    organizator: {
        type: String
    },
    lajkovi: {
        type: Number
    },
    status: {
        type: Number
    },
    slika: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Radionica', Radionica, 'radionice');
//# sourceMappingURL=radionica.js.map