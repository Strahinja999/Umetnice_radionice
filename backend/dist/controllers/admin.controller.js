"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const radionica_1 = __importDefault(require("../models/radionica"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
const organizator_1 = __importDefault(require("../models/organizator"));
const ucesnik_1 = __importDefault(require("../models/ucesnik"));
class AdminController {
    constructor() {
        this.dohvatiSveUcesnike = (req, res) => {
            ucesnik_1.default.find({}, (err, ucesnici) => {
                if (err)
                    console.log(err);
                else
                    res.json(ucesnici);
            });
        };
        this.dohvatiUcesnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            ucesnik_1.default.findOne({ "korisnickoIme": korisnickoIme }, (err, u) => {
                if (err)
                    console.log(err);
                else
                    res.json(u);
            });
        };
        this.dodajUcesnika = (req, res) => {
            let data = {
                korisnickoIme: req.body.korisnickoIme,
                lozinka: req.body.lozinka,
                tip: 1
            };
            let k = new korisnik_1.default(data);
            k.save();
            let u = new ucesnik_1.default(req.body);
            u.save().then(r => {
                res.status(200).json({ "message": "Ucesnik dodat!" });
            }).catch(err => {
                res.status(400).json({ 'message': 'Neuspesno dodavanje' });
            });
        };
        this.izmeniUcesnika = (req, res) => {
            let korisnickoImeStaro = req.body.korisnickoImeStaro;
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let telefon = req.body.telefon;
            let email = req.body.email;
            ucesnik_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoImeStaro }, { $set: {
                    lozinka: lozinka,
                    ime: ime,
                    prezime: prezime,
                    telefon: telefon,
                    email: email,
                    korisnickoIme: korisnickoIme
                } }, (err, resp) => {
                if (err)
                    console.log(err);
            });
            korisnik_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoImeStaro }, { $set: {
                    lozinka: lozinka,
                    korisnickoIme: korisnickoIme
                } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "OK" });
            });
        };
        this.izmeniOrganizatora = (req, res) => {
            let korisnickoImeStaro = req.body.korisnickoImeStaro;
            let koriscnikoIme = req.body.koriscnikoIme;
            let lozinka = req.body.lozinka;
            let naziv = req.body.naziv;
            let drzava = req.body.drzava;
            let grad = req.body.grad;
            let postanskiBroj = req.body.postanskiBroj;
            let ulica = req.body.ulica;
            let broj = req.body.broj;
            let telefon = req.body.telefon;
            let email = req.body.email;
            let maticniBroj = req.body.maticniBroj;
            organizator_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoImeStaro }, { $set: {
                    lozinka: lozinka,
                    naziv: naziv,
                    drzava: drzava,
                    grad: grad,
                    postanskiBroj: postanskiBroj,
                    ulica: ulica,
                    broj: broj,
                    telefon: telefon,
                    email: email,
                    maticniBroj: maticniBroj,
                    koriscnikoIme: koriscnikoIme
                } }, (err, resp) => {
                if (err)
                    console.log(err);
            });
            korisnik_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoImeStaro }, { $set: {
                    lozinka: lozinka,
                    koriscnikoIme: koriscnikoIme
                } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "OK" });
            });
        };
        this.obrisiUcesnika = (req, res) => {
            let koriscnikoIme = req.body.koriscnikoIme;
            korisnik_1.default.deleteOne({ "korisnickoIme": koriscnikoIme }, (err, resp) => {
                if (err)
                    console.log(err);
            });
            ucesnik_1.default.deleteOne({ 'koriscnikoIme': koriscnikoIme }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "Ok" });
            });
        };
        this.dohvatiSveOrganizatore = (req, res) => {
            organizator_1.default.find({}, (err, organizatori) => {
                if (err)
                    console.log(err);
                else
                    res.json(organizatori);
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
        this.dodajOrganizatora = (req, res) => {
            let data = {
                korisnickoIme: req.body.korisnickoIme,
                lozinka: req.body.lozinka,
                tip: 2
            };
            let k = new korisnik_1.default(data);
            k.save();
            let o = new organizator_1.default(req.body);
            o.save().then(r => {
                res.status(200).json({ "message": "Organizator dodat!" });
            }).catch(err => {
                res.status(400).json({ 'message': 'Neuspesno dodavanje' });
            });
        };
        this.obrisiOrganizatora = (req, res) => {
            let koriscnikoIme = req.body.koriscnikoIme;
            korisnik_1.default.deleteOne({ "korisnickoIme": koriscnikoIme }, (err, resp) => {
                if (err)
                    console.log(err);
            });
            organizator_1.default.deleteOne({ 'koriscnikoIme': koriscnikoIme }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "Ok" });
            });
        };
        this.dohvatiKorisnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            korisnik_1.default.findOne({ 'korisnickoIme': korisnickoIme }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.prihvatiUcesnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            ucesnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 1 } });
            korisnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 1 } });
        };
        this.odbiUcesnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            ucesnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 0 } });
            korisnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 0 } });
        };
        this.prihvatiOrganizatora = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            organizator_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 1 } });
            korisnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 1 } });
        };
        this.odbiOrganizatora = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            organizator_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 0 } });
            korisnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'odobreno': 0 } });
        };
        this.dohvatiSveRadionice = (req, res) => {
            radionica_1.default.find({}, (err, r) => {
                if (err)
                    console.log(err);
                else
                    res.json(r);
            });
        };
        this.obrisiRadionicu = (req, res) => {
            let id = req.body.id;
            radionica_1.default.deleteOne({ "id": id }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "Ok" });
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
        this.izmeniRadionicu = (req, res) => {
            let id = req.body.id;
            let organizator = req.body.organizator;
            let naziv = req.body.naziv;
            let kratakOpis = req.body.kratakOpis;
            let dugacakOpis = req.body.dugacakOpis;
            let mestoOdrzavanja = req.body.mestoOdrzavanja;
            let datum = req.body.datum;
            let ukupnoMesta = req.body.ukupnoMesta;
            radionica_1.default.collection.updateOne({ 'id': id }, { $set: {
                    'organizator': organizator,
                    'naziv': naziv,
                    'kratakOpis': kratakOpis,
                    'dugacakOpis': dugacakOpis,
                    'mestoOdrzavanja': mestoOdrzavanja,
                    'datum': datum,
                    'ukupnoMesta': ukupnoMesta
                } });
        };
        this.odobriRadionicuUcesnik = (req, res) => {
            let id = req.body.id;
            let organizator = req.body.organizator;
            radionica_1.default.collection.updateOne({ 'id': id }, { $set: { 'status': 1 } }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    //azuriraj ucesnika u organizatora
                    korisnik_1.default.collection.updateOne({ 'korisnickoIme': organizator }, { $set: { 'tip': 2 } }, (err, resp) => {
                        if (err)
                            console.log(err);
                        else
                            res.json({ "message": "Radionica odobrena!" });
                    });
                    //azuriraj korisnika u organizatora
                }
            });
        };
        this.odobriRadionicuOrganizator = (req, res) => {
            let id = req.body.id;
            radionica_1.default.collection.updateOne({ 'id': id }, { $set: { 'status': 1 } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "Radionica odobrena!" });
            });
        };
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map