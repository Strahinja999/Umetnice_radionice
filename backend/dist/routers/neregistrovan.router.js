"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const neregistrovan_controller_1 = require("../controllers/neregistrovan.controller");
const neregistrovanRuter = express_1.default.Router();
neregistrovanRuter.route('/dohvatiSveRadionice').get((req, res) => new neregistrovan_controller_1.NeregistrovanController().dohvatiSveRadionice(req, res));
neregistrovanRuter.route('/dohvatiPoNazivu').post((req, res) => new neregistrovan_controller_1.NeregistrovanController().dohvatiPoNazivu(req, res));
neregistrovanRuter.route('/dohvatiPoGradu').post((req, res) => new neregistrovan_controller_1.NeregistrovanController().dohvatiPoGradu(req, res));
neregistrovanRuter.route('/dohvatiPoNazivuIGradu').post((req, res) => new neregistrovan_controller_1.NeregistrovanController().dohvatiPoNazivuIGradu(req, res));
exports.default = neregistrovanRuter;
//# sourceMappingURL=neregistrovan.router.js.map