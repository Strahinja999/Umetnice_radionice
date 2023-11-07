"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Poruka = new Schema({
    ucesnik: {
        type: String
    },
    organizator: {
        type: String
    },
    tekst: {
        type: String
    },
    datum: {
        type: Date
    },
    fleg: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Poruka', Poruka);
//# sourceMappingURL=poruka.js.map