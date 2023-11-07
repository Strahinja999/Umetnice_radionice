import express from 'express'
import { prependOnceListener } from 'process';
import { RegistracijaController } from '../controllers/registracija.controller';

const registracijaRuter = express.Router();

registracijaRuter.route('/registracijaUcesnik').post(
    (req, res) => new RegistracijaController().registrujUcesnika(req,res)
)

registracijaRuter.route('/registracijaOrganizator').post(
    (req, res) => new RegistracijaController().registrujOrganizatora(req,res)
)

registracijaRuter.route('/pronadjiKorisnika').post(
    (req, res) => new RegistracijaController().pronadjiKorisnika(req, res)
)

registracijaRuter.route('/pronadjiUcesnikaEmail').post(
    (req, res) => new RegistracijaController().pronadjiUcesnikaEmail(req, res)
)

registracijaRuter.route('/pronadjiOrganizatoraEmail').post(
    (req, res) => new RegistracijaController().pronadjiOrganizatoraEmail(req, res)
)


/*registracijaRuter.route('/dodajSlikuUcesnk').post(
    (req, res) => new RegistracijaController().dodajSlikuUcesnk(req, res)
)

registracijaRuter.route('/dodajSlikuOrganizator').post(
    (req, res) => new RegistracijaController().dodajSlikuOrganizator(req, res)
)*/

export default registracijaRuter