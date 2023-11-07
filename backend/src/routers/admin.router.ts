import express from 'express'
import { AdminController } from '../controllers/admin.controller';

const adminRuter = express.Router();

adminRuter.route('/dohvatiSveUcesnike').get(
    (req, res) => new AdminController().dohvatiSveUcesnike(req,res)
)

adminRuter.route('/dohvatiUcesnika').post(
    (req, res) => new AdminController().dohvatiUcesnika(req,res)
)

adminRuter.route('/dodajUcesnika').post(
    (req, res) => new AdminController().dodajUcesnika(req,res)
)

adminRuter.route('/izmeniUcesnika').post(
    (req, res) => new AdminController().izmeniUcesnika(req,res)
)

adminRuter.route('/obrisiUcesnika').post(
    (req, res) => new AdminController().obrisiUcesnika(req,res)
)

adminRuter.route('/dohvatiSveOrganizatore').get(
    (req, res)=> new AdminController().dohvatiSveOrganizatore(req, res)
)

adminRuter.route('/dohvatiOrganizatora').post(
    (req, res) => new AdminController().dohvatiOrganizatora(req,res)
)

adminRuter.route('/dodajOrganizatora').post(
    (req, res) => new AdminController().dodajOrganizatora(req,res)
)

adminRuter.route('/izmeniUcesnika').post(
    (req, res) => new AdminController().izmeniUcesnika(req,res)
)

adminRuter.route('/izmeniOrganizatora').post(
    (req, res) => new AdminController().izmeniOrganizatora(req,res)
)

adminRuter.route('/dohvatiKorisnika').post(
    (req, res) => new AdminController().dohvatiKorisnika(req,res)
)

adminRuter.route('/prihvatiUcesnika').post(
    (req, res) => new AdminController().prihvatiUcesnika(req,res)
)

adminRuter.route('/odbiUcesnika').post(
    (req, res) => new AdminController().odbiUcesnika(req,res)
)

adminRuter.route('/prihvatiOrganizatora').post(
    (req, res) => new AdminController().prihvatiOrganizatora(req,res)
)

adminRuter.route('/odbiOrganizatora').post(
    (req, res) => new AdminController().odbiOrganizatora(req,res)
)

adminRuter.route('/dohvatiSveRadionice').get(
    (req, res)=> new AdminController().dohvatiSveRadionice(req, res)
)

adminRuter.route('/obrisiRadionicu').post(
    (req, res)=> new AdminController().obrisiRadionicu(req, res)
)

adminRuter.route('/dodajRadionicu').post(
    (req, res)=> new AdminController().dodajRadionicu(req, res)
)

adminRuter.route('/izmeniRadionicu').post(
    (req, res)=> new AdminController().izmeniRadionicu(req, res)
)

adminRuter.route('/odobriRadionicuUcesnik').post(
    (req, res)=> new AdminController().odobriRadionicuUcesnik(req, res)
)

adminRuter.route('/odobriRadionicuOrganizator').post(
    (req, res)=> new AdminController().odobriRadionicuOrganizator(req, res)
)

export default adminRuter
