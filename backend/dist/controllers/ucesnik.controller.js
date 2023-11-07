"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UcesnikController = void 0;
const radionica_1 = __importDefault(require("../models/radionica"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
const ucesnik_1 = __importDefault(require("../models/ucesnik"));
const komentar_1 = __importDefault(require("../models/komentar"));
const poruka_1 = __importDefault(require("../models/poruka"));
const organizator_1 = __importDefault(require("../models/organizator"));
class UcesnikController {
    constructor() {
        this.dohvatiUcesnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            ucesnik_1.default.findOne({ 'korisnickoIme': korisnickoIme }, (err, ucesnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(ucesnik);
            });
        };
        this.izmeniUcesnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let korisnickoImeNovo = req.body.korisnickoImeNovo;
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let telefon = req.body.telefon;
            let email = req.body.email;
            let slika = req.body.slika;
            //IZMENI korisnika i ucesnika!!!
            ucesnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'ime': ime, 'prezime': prezime, 'telefon': telefon, 'email': email,
                    'korisnickoIme': korisnickoImeNovo, 'slika': slika } });
            korisnik_1.default.collection.updateOne({ 'korisnickoIme': korisnickoIme }, { $set: { 'korisnickoIme': korisnickoImeNovo } });
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
        this.dohvatiKomentarPoID = (req, res) => {
            let id = req.body.id;
            komentar_1.default.findOne({ 'id': id }, (err, k) => {
                if (err)
                    console.log(err);
                else
                    res.json(k);
            });
        };
        this.dohvatiSveRadionice = (req, res) => {
            radionica_1.default.find({}, (err, radionice) => {
                if (err)
                    console.log(err);
                else
                    res.json(radionice);
            });
        };
        this.prijaviMeNaRadionicu = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let idRadionice = req.body.idRadionice;
            radionica_1.default.updateOne({ 'id': idRadionice }, { $push: { 'listaCekanja': korisnickoIme } }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    res.json({ 'poruka': 'ok' });
                }
            });
        };
        this.lajk = (req, res) => {
            let brLajkova = req.body.brLajkova;
            let idRadionice = req.body.idRadionice;
            radionica_1.default.collection.updateOne({ 'id': idRadionice }, { $set: { 'lajkovi': brLajkova } }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    res.json({ 'poruka': 'ok' });
                }
            });
        };
        this.promeniLozinku = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            let lozinka = req.body.lozinka;
            korisnik_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoIme }, { $set: { lozinka: lozinka } }, (err, resp) => {
                if (err)
                    console.log(err);
                else {
                    ucesnik_1.default.findOneAndUpdate({ 'korisnickoIme': korisnickoIme }, { $set: { lozinka: lozinka } }, (err, resp) => {
                        if (err)
                            console.log(err);
                    });
                    res.json({ 'message': "Lozinka uspesno promenjena" });
                }
            });
        };
        this.azurirajKomentar = (req, res) => {
            let id = req.body.id;
            let tekst = req.body.tekst;
            komentar_1.default.findOneAndUpdate({ "id": id }, { $set: { tekst: tekst, datum: new Date() } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "ok" });
            });
        };
        this.obrisiKomentar = (req, res) => {
            let id = req.body.id;
            let korisnickoIme = req.body.korisnickoIme;
            let idString = req.body.idString;
            ucesnik_1.default.updateOne({ 'korisnickoIme': korisnickoIme }, { $pull: { 'komentari': idString } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "ok" });
            });
            /*komentar.findOneAndDelete({"id":id}, (err, resp)=>{
                if(err) console.log(err)
                else{
                    ucesnik.findOneAndUpdate({'korisnickoIme':korisnickoIme}, {$pull:{'komentari':idString}}, (err,resp)=>{
                        if(err) console.log(err)
                        else res.json({"message":"ok"})
                    })
                    
                }
            })*/
        };
        this.odlajkuj = (req, res) => {
            let id = req.body.id;
            let korisnickoIme = req.body.korisnickoIme;
            ucesnik_1.default.findOneAndUpdate({ "korisnickoIme": korisnickoIme }, { $pull: { 'radioniceLajkovao': id.toString } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "ok" });
            });
            /*radionica.updateOne({"id":id}, {$inc:{lajkovi:-1}},(err,resp)=>{
                if(err) console.log(err)
                else {
                    ucesnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {$pull:{'radioniceLajkovao':id.toString}}, (err,resp)=>{
                        if(err) console.log(err)
                        else res.json({"message":"ok"})
                    })
                }
            })*/
        };
        this.dodajRadionicu = (req, res) => {
            let r = new radionica_1.default(req.body);
            r.save().then(r => {
                res.status(200).json({ "message": "Radionica predlozena!" });
            }).catch(err => {
                res.status(400).json({ 'message': 'Neuspesno predlaganje' });
            });
        };
        this.posaljiPorukuOrganizatoru = (req, res) => {
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
        this.dodajSliku = (req, res) => {
            let slika = req.body.slika;
            let u = req.body.korisnickoIme;
            ucesnik_1.default.findOneAndUpdate({ "korisnickoIme": u }, { $set: { slika: slika } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ "message": "ok" });
            });
        };
    }
}
exports.UcesnikController = UcesnikController;
//# sourceMappingURL=ucesnik.controller.js.map