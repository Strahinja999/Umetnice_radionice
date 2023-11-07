"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizator_controller_1 = require("../controllers/organizator.controller");
const organizatorRuter = express_1.default.Router();
organizatorRuter.route('/dohvatiMojeRadionice').post((req, res) => new organizator_controller_1.organizatorController().dohvatiMojeRadionice(req, res));
organizatorRuter.route('/dohvatiSveRadionice').get((req, res) => new organizator_controller_1.organizatorController().dohvatiSveRadionice(req, res));
organizatorRuter.route('/dohvatiRadionicuPoID').post((req, res) => new organizator_controller_1.organizatorController().dohvatiRadionicuPoID(req, res));
organizatorRuter.route('/izmeniRadionicu').post((req, res) => new organizator_controller_1.organizatorController().izmeniRadionicu(req, res));
organizatorRuter.route('/odbiKorisnika').post((req, res) => new organizator_controller_1.organizatorController().odbiKorisnika(req, res));
organizatorRuter.route('/odobriKorisnika').post((req, res) => new organizator_controller_1.organizatorController().odobriKorisnika(req, res));
organizatorRuter.route('/otkazi').post((req, res) => new organizator_controller_1.organizatorController().otkazi(req, res));
organizatorRuter.route('/promeniLozinku').post((req, res) => new organizator_controller_1.organizatorController().promeniLozinku(req, res));
organizatorRuter.route('/dodajRadionicu').post((req, res) => new organizator_controller_1.organizatorController().dodajRadionicu(req, res));
organizatorRuter.route('/dohvatiOrganizatora').post((req, res) => new organizator_controller_1.organizatorController().dohvatiOrganizatora(req, res));
organizatorRuter.route('/posaljiPorukuUcesniku').post((req, res) => new organizator_controller_1.organizatorController().posaljiPorukuUcesniku(req, res));
exports.default = organizatorRuter;
//# sourceMappingURL=organizator.router.js.map