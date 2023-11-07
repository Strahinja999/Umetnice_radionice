"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registracija_controller_1 = require("../controllers/registracija.controller");
const registracijaRuter = express_1.default.Router();
registracijaRuter.route('/registracijaUcesnik').post((req, res) => new registracija_controller_1.RegistracijaController().registrujUcesnika(req, res));
registracijaRuter.route('/registracijaOrganizator').post((req, res) => new registracija_controller_1.RegistracijaController().registrujOrganizatora(req, res));
registracijaRuter.route('/pronadjiKorisnika').post((req, res) => new registracija_controller_1.RegistracijaController().pronadjiKorisnika(req, res));
registracijaRuter.route('/pronadjiUcesnikaEmail').post((req, res) => new registracija_controller_1.RegistracijaController().pronadjiUcesnikaEmail(req, res));
registracijaRuter.route('/pronadjiOrganizatoraEmail').post((req, res) => new registracija_controller_1.RegistracijaController().pronadjiOrganizatoraEmail(req, res));
/*registracijaRuter.route('/dodajSlikuUcesnk').post(
    (req, res) => new RegistracijaController().dodajSlikuUcesnk(req, res)
)

registracijaRuter.route('/dodajSlikuOrganizator').post(
    (req, res) => new RegistracijaController().dodajSlikuOrganizator(req, res)
)*/
exports.default = registracijaRuter;
//# sourceMappingURL=registracija.router.js.map