"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistracijaController = void 0;
const ucesnik_1 = __importDefault(require("../models/ucesnik"));
const korisnik_1 = __importDefault(require("../models/korisnik"));
const organizator_1 = __importDefault(require("../models/organizator"));
class RegistracijaController {
    constructor() {
        this.registrujUcesnika = (req, res) => {
            //ucesnik se ne dodaje odmah u tabelu KORISNICI nego se dodaje samo u tabelu UCESNICI sa flegom odobreno = 0;
            let k = new korisnik_1.default({ korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka, tip: req.body.tip, odobreno: 0 });
            k.save();
            let u = new ucesnik_1.default({ korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka,
                ime: req.body.ime, prezime: req.body.prezime, telefon: req.body.telefon, email: req.body.email, odobreno: 0, slika: req.body.slika });
            u.save().then(u => {
                res.status(200).json({ 'poruka': 'Uspesno ste izvrsili registraciju!' });
            }).catch(err => {
                res.status(400).json({ 'poruka': 'Registracija neuspesna!' });
            });
        };
        this.registrujOrganizatora = (req, res) => {
            let k = new korisnik_1.default({ korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka, tip: req.body.tip, odobreno: 0 });
            k.save();
            let o = new organizator_1.default({ korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka,
                naziv: req.body.naziv, maticniBroj: req.body.maticniBroj, drzava: req.body.drzava, grad: req.body.grad,
                postanskiBroj: req.body.postanskiBroj, ulica: req.body.ulica, broj: req.body.broj, telefon: req.body.telefon,
                email: req.body.email, odobreno: 0, slika: req.body.slika });
            o.save().then(o => {
                res.status(200).json({ 'poruka': 'Uspesno ste izvrsili registraciju!' });
            }).catch(err => {
                res.status(400).json({ 'poruka': 'Registracija neuspesna!' });
            });
        };
        this.pronadjiKorisnika = (req, res) => {
            let korisnickoIme = req.body.korisnickoIme;
            korisnik_1.default.findOne({ 'korisnickoIme': korisnickoIme }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.pronadjiUcesnikaEmail = (req, res) => {
            let email = req.body.email;
            ucesnik_1.default.findOne({ 'email': email }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        this.pronadjiOrganizatoraEmail = (req, res) => {
            let email = req.body.email;
            organizator_1.default.findOne({ 'email': email }, (err, korisnik) => {
                if (err)
                    console.log(err);
                else
                    res.json(korisnik);
            });
        };
        /*dodajSlikuUcesnk = (req: express.Request, res: express.Response)=>{
            let slika = req.body.slika
            let korisnickoIme = req.body.korisnickoIme
    
            ucesnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {$set:{slika:slika}}, (err,resp)=>{
                if(err) console.log(err)
                else res.json({"message":"ok"})
            })
    
        }
    
        dodajSlikuOrganizator= (req: express.Request, res: express.Response)=>{
            let slika = req.body.slika
            let korisnickoIme = req.body.korisnickoIme
    
            organizator.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {$set:{slika:slika}}, (err,resp)=>{
                if(err) console.log(err)
                else res.json({"message":"ok"})
            })
        }*/
    }
}
exports.RegistracijaController = RegistracijaController;
//# sourceMappingURL=registracija.controller.js.map