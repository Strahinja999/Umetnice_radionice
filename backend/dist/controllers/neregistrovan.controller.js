"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeregistrovanController = void 0;
const radionica_1 = __importDefault(require("../models/radionica"));
class NeregistrovanController {
    constructor() {
        this.dohvatiSveRadionice = (req, res) => {
            radionica_1.default.find({}, (err, radionice) => {
                if (err)
                    console.log(err);
                else
                    res.json(radionice);
            });
        };
        this.dohvatiPoNazivu = (req, res) => {
            let naziv = req.body.naziv;
            radionica_1.default.find({ 'naziv': naziv }, (err, radionice) => {
                if (err)
                    console.log(err);
                else
                    res.json(radionice);
            });
        };
        this.dohvatiPoGradu = (req, res) => {
            let grad = req.body.grad;
            radionica_1.default.find({ 'mestoOdrzavanja': grad }, (err, radionice) => {
                if (err)
                    console.log(err);
                else
                    res.json(radionice);
            });
        };
        this.dohvatiPoNazivuIGradu = (req, res) => {
            let naziv = req.body.naziv;
            let grad = req.body.grad;
            radionica_1.default.find({ 'naziv': naziv, 'mestoOdrzavanja': grad }, (err, radionice) => {
                if (err)
                    console.log(err);
                else
                    res.json(radionice);
            });
        };
    }
}
exports.NeregistrovanController = NeregistrovanController;
//# sourceMappingURL=neregistrovan.controller.js.map