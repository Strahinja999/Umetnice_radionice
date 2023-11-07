import express from 'express'
import { NeregistrovanController } from '../controllers/neregistrovan.controller';

const neregistrovanRuter = express.Router();

neregistrovanRuter.route('/dohvatiSveRadionice').get(
    (req, res) => new NeregistrovanController().dohvatiSveRadionice(req,res)
)

neregistrovanRuter.route('/dohvatiPoNazivu').post(
    (req, res) => new NeregistrovanController().dohvatiPoNazivu(req, res)
)

neregistrovanRuter.route('/dohvatiPoGradu').post(
    (req, res) => new NeregistrovanController().dohvatiPoGradu(req, res)
)

neregistrovanRuter.route('/dohvatiPoNazivuIGradu').post(
    (req, res) => new NeregistrovanController().dohvatiPoNazivuIGradu(req, res)
)

export default neregistrovanRuter