import express from 'express'
import ucesnik from '../models/ucesnik';
import korisnik from '../models/korisnik';
import organizator from '../models/organizator';


export class RegistracijaController{

    registrujUcesnika = (req: express.Request, res:express.Response)=>{

        //ucesnik se ne dodaje odmah u tabelu KORISNICI nego se dodaje samo u tabelu UCESNICI sa flegom odobreno = 0;

        let k = new korisnik({korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka, tip: req.body.tip, odobreno: 0})

        k.save()
        
        let u = new ucesnik({korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka,
            ime: req.body.ime, prezime:req.body.prezime, telefon:req.body.telefon, email:req.body.email, odobreno: 0, slika: req.body.slika})

        u.save().then(u=>{
            res.status(200).json({'poruka': 'Uspesno ste izvrsili registraciju!'});
        }).catch(err=>{
            res.status(400).json({'poruka': 'Registracija neuspesna!'})
        })

    }

     registrujOrganizatora = (req: express.Request, res: express.Response)=>{
        let k = new korisnik({korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka, tip: req.body.tip,odobreno: 0})

        k.save()
        
        let o = new organizator({korisnickoIme: req.body.korisnickoIme, lozinka: req.body.lozinka,
            naziv:req.body.naziv, maticniBroj: req.body.maticniBroj, drzava: req.body.drzava, grad:req.body.grad,
            postanskiBroj: req.body.postanskiBroj, ulica:req.body.ulica, broj: req.body.broj, telefon:req.body.telefon,
             email:req.body.email, odobreno: 0, slika: req.body.slika})

        o.save().then(o=>{
            res.status(200).json({'poruka': 'Uspesno ste izvrsili registraciju!'});
        }).catch(err=>{
            res.status(400).json({'poruka': 'Registracija neuspesna!'})
        })
        
    }

    pronadjiKorisnika = (req: express.Request, res: express.Response)=>{

        let korisnickoIme = req.body.korisnickoIme

        korisnik.findOne({'korisnickoIme': korisnickoIme}, (err,korisnik) =>{
            if(err) console.log(err);
            else res.json(korisnik)
        });

    }

    pronadjiUcesnikaEmail = (req: express.Request, res: express.Response)=>{
        let email = req.body.email
        ucesnik.findOne({'email': email}, (err,korisnik) =>{
            if(err) console.log(err);
            else res.json(korisnik)
        });
    }

    pronadjiOrganizatoraEmail = (req: express.Request, res: express.Response)=>{
        let email = req.body.email
        organizator.findOne({'email': email}, (err,korisnik) =>{
            if(err) console.log(err);
            else res.json(korisnik)
        });
    }

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