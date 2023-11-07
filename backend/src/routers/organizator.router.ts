import express from "express";
import { organizatorController } from "../controllers/organizator.controller";

const organizatorRuter = express.Router();

organizatorRuter.route('/dohvatiMojeRadionice').post(
    (req, res) => new organizatorController().dohvatiMojeRadionice(req,res)
)

organizatorRuter.route('/dohvatiSveRadionice').get(
    (req, res) => new organizatorController().dohvatiSveRadionice(req,res)
)

organizatorRuter.route('/dohvatiRadionicuPoID').post(
    (req, res) => new organizatorController().dohvatiRadionicuPoID(req,res)
)

organizatorRuter.route('/izmeniRadionicu').post(
    (req, res) => new organizatorController().izmeniRadionicu(req,res)
)

organizatorRuter.route('/odbiKorisnika').post(
    (req, res) => new organizatorController().odbiKorisnika(req,res)
)

organizatorRuter.route('/odobriKorisnika').post(
    (req, res) => new organizatorController().odobriKorisnika(req,res)
)

organizatorRuter.route('/otkazi').post(
    (req, res) => new organizatorController().otkazi(req,res)
)

organizatorRuter.route('/promeniLozinku').post(
    (req, res) => new organizatorController().promeniLozinku(req, res)
)

organizatorRuter.route('/dodajRadionicu').post(
    (req, res) => new organizatorController().dodajRadionicu(req, res)
)

organizatorRuter.route('/dohvatiOrganizatora').post(
    (req, res) => new organizatorController().dohvatiOrganizatora(req, res)
)

organizatorRuter.route('/posaljiPorukuUcesniku').post(
    (req, res) => new organizatorController().posaljiPorukuUcesniku(req, res)
)



export default organizatorRuter