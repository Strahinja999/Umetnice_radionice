"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Komentar = new Schema({
    id: {
        type: Number
    },
    idRadionice: {
        type: Number
    },
    idUcesnika: {
        type: String
    },
    datum: {
        type: Date
    },
    tekst: {
        type: String
    },
    nazivRadionice: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Komentar', Komentar, 'komentari');
//# sourceMappingURL=komentar.js.map