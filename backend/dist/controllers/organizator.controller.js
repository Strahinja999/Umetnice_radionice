"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizatorController = void 0;
const ucesnik_1 = __importDefault(require("../models/ucesnik"));
const radionica_1 = __importDefault(require("../models/radionica"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
const organizator_1 = __importDefault(require("../models/organizator"));
const poruka_1 = __importDefault(require("../models/poruka"));
class organizatorController {
    constructor() {
        this.dohvatiMojeRadionice = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            radionica_1.default.find({ 'organizator': korisnickoIme }, (err, radionice) => {
                if (err)
                    console.log(err);
                else
                    res.json(radionice);
            });
        };
        this.dohvatiRadionicuPoID = (req, res) => {
            let id = req.body.id;
            radionica_1.default.findOne({ 'id': id }, (err, radionica) => {
                if (err)
                    console.log(err);
                else
                    res.json(radionica);
            });
        };
        this.izmeniRadionicu = (req, res) => {
            let id = req.body.id;
            let naziv = req.body.naziv;
            let mesto = req.body.mesto;
            let datum = req.body.datum;
            let kratakOpis = req.body.kratakOpis;
            let dugacakOpis = req.body.dugacakOpis;
            let brojMesta = req.body.brojMesta;
            let slika = req.body.slika;
            radionica_1.default.collection.updateOne({ 'id': id }, { $set: {
                    'naziv': naziv,
                    'mestoOdrzavanja': mesto,
                    'datum': datum,
                    'kratakOpis': kratakOpis,
                    'dugacakOpis': dugacakOpis,
                    'ukupnoMesta': brojMesta,
                    'slika': slika
                } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "OK" });
            });
        };
        this.odbiKorisnika = (req, res) => {
            let id = req.body.id;
            let korisnickoIme = req.body.korisnickoIme;
            radionica_1.default.collection.updateOne({ 'id': id }, { $pull: { listaCekanja: korisnickoIme } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.odobriKorisnika = (req, res) => {
            let id = req.body.id;
            let korisnickoIme = req.body.korisnickoIme;
            let strId = req.body.strId;
            ucesnik_1.default.updateOne({ 'korisnickoIme': korisnickoIme }, { $push: { 'trenutnoPrijavljen': strId } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.otkazi = (req, res) => {
            let id = req.body.id;
            radionica_1.default.deleteOne({ 'id': id }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.promeniLozinku = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoIme }, { $set: { lozinka: lozinka } }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    organizator_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoIme }, { $set: { lozinka: lozinka } }, (err, resp) => {
                        if (err)
                            console.log(err);
                    });
                    res.json({ 'message': "Lozinka uspesno promenjena" });
                }
            });
        };
        this.dodajRadionicu = (req, res) => {
            let r = new radionica_1.default(req.body);
            r.save().then(r => {
                res.status(200).json({ "message": "Radionica dodata!" });
            }).catch(err => {
                res.status(400).json({ 'message': 'Neuspesno dodavanje' });
            });
        };
        this.dohvatiSveRadionice = (req, res) => {
            radionica_1.default.find({}, (err, r) => {
                if (err)
                    console.log(err);
                else
                    res.json(r);
            });
        };
        this.dohvatiOrganizatora = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            organizator_1.default.findOne({ "korisnickoIme": korisnickoIme }, (err, o) => {
                if (err)
                    console.log(err);
                else
                    res.json(o);
            });
        };
        this.posaljiPorukuUcesniku = (req, res) => {
            let u = req.body.ucesnik;
            let o = req.body.organizator;
            let p = new poruka_1.default(req.body);
            ucesnik_1.default.findOneAndUpdate({ "korisnickoIme": u }, { $push: { poruke: p } }, (err, resp) => {
                if (err)
                    console.log(err);
            });
            organizator_1.default.findOneAndUpdate({ "korisnickoIme": o }, { $push: { poruke: p } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "ok" });
            });
        };
    }
}
exports.organizatorController = organizatorController;
//# sourceMappingURL=organizator.controller.js.map