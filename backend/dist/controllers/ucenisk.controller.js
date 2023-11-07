"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UcesnikController = void 0;
const ucesnik_1 = __importDefault(require("../models/ucesnik"));
class UcesnikController {
    constructor() {
        this.dohvatiUcesnika = (req, res) => {
            let korinickoIme = req.body.korinickoIme;
            ucesnik_1.default.findOne({ 'korisnickoIme': korinickoIme }, (err, ucesnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(ucesnik);
            });
        };
    }
}
exports.UcesnikController = UcesnikController;
//# sourceMappingURL=ucenisk.controller.js.map