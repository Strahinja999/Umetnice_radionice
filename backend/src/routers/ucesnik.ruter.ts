import express from "express";
import { UcesnikController } from "../controllers/ucesnik.controller";

const ucesnikRuter = express.Router();

ucesnikRuter.route('/dohvatiUcesnika').post(
    (req, res) => new UcesnikController().dohvatiUcesnika(req, res)
)

ucesnikRuter.route('/izmeniUcesnika').post(
    (req, res) => new UcesnikController().izmeniUcesnika(req, res)
)

ucesnikRuter.route('/dohvatiRadionicuPoID').post(
    (req, res) => new UcesnikController().dohvatiRadionicuPoID(req,res)
)

ucesnikRuter.route('/dohvatiKomentarPoID').post(
    (req, res) => new UcesnikController().dohvatiKomentarPoID(req,res)
)

ucesnikRuter.route('/dohvatiSveRadionice').get(
    (req, res) => new UcesnikController().dohvatiSveRadionice(req,res)
)

ucesnikRuter.route('/prijaviMeNaRadionicu').post(
    (req, res) => new UcesnikController().prijaviMeNaRadionicu(req,res)
)

ucesnikRuter.route('/lajk').post(
    (req, res) => new UcesnikController().lajk(req,res)
)

ucesnikRuter.route('/promeniLozinku').post(
    (req, res) => new UcesnikController().promeniLozinku(req,res)
)

ucesnikRuter.route('/azurirajKomentar').post(
    (req, res) => new UcesnikController().azurirajKomentar(req,res)
)

ucesnikRuter.route('/obrisiKomentar').post(
    (req, res) => new UcesnikController().obrisiKomentar(req,res)
)

ucesnikRuter.route('/odlajkuj').post(
    (req, res) => new UcesnikController().odlajkuj(req,res)
)
ucesnikRuter.route('/dodajRadionicu').post(
    (req, res) => new UcesnikController().dodajRadionicu(req,res)
)

ucesnikRuter.route('/posaljiPorukuOrganizatoru').post(
    (req, res) => new UcesnikController().posaljiPorukuOrganizatoru(req,res)
)

ucesnikRuter.route('/dodajSliku').post(
    (req, res) => new UcesnikController().dodajSliku(req,res)
)

export default ucesnikRuter