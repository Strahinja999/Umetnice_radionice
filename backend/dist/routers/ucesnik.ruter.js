"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ucesnik_controller_1 = require("../controllers/ucesnik.controller");
const ucesnikRuter = express_1.default.Router();
ucesnikRuter.route('/dohvatiUcesnika').post((req, res) => new ucesnik_controller_1.UcesnikController().dohvatiUcesnika(req, res));
ucesnikRuter.route('/izmeniUcesnika').post((req, res) => new ucesnik_controller_1.UcesnikController().izmeniUcesnika(req, res));
ucesnikRuter.route('/dohvatiRadionicuPoID').post((req, res) => new ucesnik_controller_1.UcesnikController().dohvatiRadionicuPoID(req, res));
ucesnikRuter.route('/dohvatiKomentarPoID').post((req, res) => new ucesnik_controller_1.UcesnikController().dohvatiKomentarPoID(req, res));
ucesnikRuter.route('/dohvatiSveRadionice').get((req, res) => new ucesnik_controller_1.UcesnikController().dohvatiSveRadionice(req, res));
ucesnikRuter.route('/prijaviMeNaRadionicu').post((req, res) => new ucesnik_controller_1.UcesnikController().prijaviMeNaRadionicu(req, res));
ucesnikRuter.route('/lajk').post((req, res) => new ucesnik_controller_1.UcesnikController().lajk(req, res));
ucesnikRuter.route('/promeniLozinku').post((req, res) => new ucesnik_controller_1.UcesnikController().promeniLozinku(req, res));
ucesnikRuter.route('/azurirajKomentar').post((req, res) => new ucesnik_controller_1.UcesnikController().azurirajKomentar(req, res));
ucesnikRuter.route('/obrisiKomentar').post((req, res) => new ucesnik_controller_1.UcesnikController().obrisiKomentar(req, res));
ucesnikRuter.route('/odlajkuj').post((req, res) => new ucesnik_controller_1.UcesnikController().odlajkuj(req, res));
ucesnikRuter.route('/dodajRadionicu').post((req, res) => new ucesnik_controller_1.UcesnikController().dodajRadionicu(req, res));
ucesnikRuter.route('/posaljiPorukuOrganizatoru').post((req, res) => new ucesnik_controller_1.UcesnikController().posaljiPorukuOrganizatoru(req, res));
ucesnikRuter.route('/dodajSliku').post((req, res) => new ucesnik_controller_1.UcesnikController().dodajSliku(req, res));
exports.default = ucesnikRuter;
//# sourceMappingURL=ucesnik.ruter.js.map