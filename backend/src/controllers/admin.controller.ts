import express, { Response } from 'express'
import radionica from '../models/radionica';
import korisnik from '../models/korisnik';
import organizator from '../models/organizator';
import ucesnik from '../models/ucesnik'

export class AdminController{

    dohvatiSveUcesnike = (req: express.Request, res: express.Response)=>{
        ucesnik.find({}, (err,ucesnici) =>{
            if(err) console.log(err);
            else res.json(ucesnici)
        })
    }

    dohvatiUcesnika = (req: express.Request, res: express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme

        ucesnik.findOne({"korisnickoIme": korisnickoIme}, (err, u)=>{
            if(err) console.log(err)
            else res.json(u)
        })
    }

    dodajUcesnika = (req: express.Request, res: express.Response)=>{
        let data = {
            korisnickoIme:req.body.korisnickoIme,
            lozinka:req.body.lozinka,
            tip:1
        }
        let k = new korisnik(data)
        k.save()

        let u = new ucesnik(req.body)
        u.save().then(r =>{
            res.status(200).json({"message":"Ucesnik dodat!"})
        }).catch(err =>{
            res.status(400).json({ 'message': 'Neuspesno dodavanje' })
        })
    }

    izmeniUcesnika = (req: express.Request, res: express.Response)=>{
        let korisnickoImeStaro = req.body.korisnickoImeStaro
        let korisnickoIme = req.body.korisnickoIme
        let lozinka = req.body.lozinka
        let ime = req.body.ime
        let prezime = req.body.prezime
        let telefon = req.body.telefon
        let email = req.body.email

         ucesnik.findOneAndUpdate({'korisnickoIme':korisnickoImeStaro}, {$set:{
            lozinka:lozinka,
            ime:ime,
            prezime:prezime,
            telefon:telefon,
            email:email,
            korisnickoIme:korisnickoIme
        }}, (err,resp)=>{
            if(err) console.log(err)
        });

        korisnik.findOneAndUpdate({'korisnickoIme': korisnickoImeStaro}, {$set:{
            lozinka:lozinka,
            korisnickoIme: korisnickoIme
        }}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"message":"OK"})
        });
       
    }

    izmeniOrganizatora = (req: express.Request, res: express.Response)=>{
        let korisnickoImeStaro = req.body.korisnickoImeStaro
        let koriscnikoIme = req.body.koriscnikoIme
        let lozinka = req.body.lozinka
        let naziv = req.body.naziv
        let drzava = req.body.drzava
        let grad = req.body.grad
        let postanskiBroj = req.body.postanskiBroj
        let ulica = req.body.ulica
        let broj = req.body.broj
        let telefon = req.body.telefon
        let email = req.body.email
        let maticniBroj = req.body.maticniBroj

        organizator.findOneAndUpdate({'korisnickoIme':korisnickoImeStaro}, {$set:{
            lozinka:lozinka,
            naziv:naziv,
            drzava:drzava,
            grad:grad,
            postanskiBroj:postanskiBroj,
            ulica:ulica,
            broj:broj,
            telefon:telefon,
            email:email,
            maticniBroj:maticniBroj,
            koriscnikoIme:koriscnikoIme
        }}, (err, resp)=>{
            if(err) console.log(err)
        });

        korisnik.findOneAndUpdate({'korisnickoIme':korisnickoImeStaro}, {$set:{
            lozinka:lozinka,
            koriscnikoIme:koriscnikoIme
        }}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"message":"OK"})
        });
    }

    obrisiUcesnika = (req: express.Request, res: express.Response)=>{
        let koriscnikoIme = req.body.koriscnikoIme

        korisnik.deleteOne({"korisnickoIme":koriscnikoIme}, (err,resp)=>{
            if(err) console.log(err)
        })
        ucesnik.deleteOne({'koriscnikoIme':koriscnikoIme},(err,resp)=>{
            if(err) console.log(err)
            else res.json({"message":"Ok"})
        })
    }


    dohvatiSveOrganizatore = (req: express.Request, res: express.Response) =>{
        organizator.find({}, (err,organizatori) =>{
            if(err) console.log(err)
            else res.json(organizatori)
        })
    }

     
    dohvatiOrganizatora = (req: express.Request, res: express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme

        organizator.findOne({"korisnickoIme": korisnickoIme}, (err, o)=>{
            if(err) console.log(err)
            else res.json(o)
        })
    }

    dodajOrganizatora = (req: express.Request, res: express.Response)=>{
        let data = {
            korisnickoIme:req.body.korisnickoIme,
            lozinka:req.body.lozinka,
            tip:2
        }
        let k = new korisnik(data)
        k.save()
        let o = new organizator(req.body)
        o.save().then(r =>{
            res.status(200).json({"message":"Organizator dodat!"})
        }).catch(err =>{
            res.status(400).json({ 'message': 'Neuspesno dodavanje' })
        })
    }

    obrisiOrganizatora = (req: express.Request, res: express.Response)=>{
        let koriscnikoIme = req.body.koriscnikoIme

        korisnik.deleteOne({"korisnickoIme":koriscnikoIme}, (err,resp)=>{
            if(err) console.log(err)
        })
        organizator.deleteOne({'koriscnikoIme':koriscnikoIme},(err,resp)=>{
            if(err) console.log(err)
            else res.json({"message":"Ok"})
        })
    }

    dohvatiKorisnika = (req:express.Request, res:express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        korisnik.findOne({'korisnickoIme':korisnickoIme}, (err,korisnik) =>{
            if(err) console.log(err)
            else res.json(korisnik)
        })
    }

    prihvatiUcesnika = (req: express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        ucesnik.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 1}})
        korisnik.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 1}})
    }

    odbiUcesnika = (req: express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        ucesnik.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 0}})
        korisnik.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 0}})
    }

    prihvatiOrganizatora = (req: express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        organizator.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 1}})
        korisnik.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 1}})
    }

    odbiOrganizatora = (req: express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        organizator.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 0}})
        korisnik.collection.updateOne({'korisnickoIme': korisnickoIme}, {$set: {'odobreno': 0}})
    }

    dohvatiSveRadionice = (req: express.Request, res: express.Response) =>{
        radionica.find({},(err,r)=>{
            if(err) console.log(err)
            else res.json(r)
        })
    }


    obrisiRadionicu = (req: express.Request, res: express.Response) =>{
        let id = req.body.id

        radionica.deleteOne({"id":id}, (err, resp)=>{
            if(err) console.log(err)
        else res.json({"message":"Ok"})
        })
    }

    dodajRadionicu = (req: express.Request, res: express.Response) =>{
        let r = new radionica(req.body)
        r.save().then(r =>{
            res.status(200).json({"message":"Radionica dodata!"})
        }).catch(err =>{
            res.status(400).json({ 'message': 'Neuspesno dodavanje' })
        })
    }

    izmeniRadionicu = (req: express.Request, res: express.Response) =>{
        let id = req.body.id
        let organizator = req.body.organizator
        let naziv = req.body.naziv
        let kratakOpis = req.body.kratakOpis
        let dugacakOpis = req.body.dugacakOpis
        let mestoOdrzavanja = req.body.mestoOdrzavanja
        let datum = req.body.datum
        let ukupnoMesta = req.body.ukupnoMesta

        radionica.collection.updateOne({'id':id}, {$set:{
            'organizator':organizator,
            'naziv':naziv,
            'kratakOpis':kratakOpis,
            'dugacakOpis':dugacakOpis,
            'mestoOdrzavanja':mestoOdrzavanja,
            'datum':datum,
            'ukupnoMesta':ukupnoMesta
        }})
    }
    
    odobriRadionicuUcesnik = (req: express.Request, res: express.Response) =>{
        let id = req.body.id
        let organizator = req.body.organizator

        radionica.collection.updateOne({'id':id}, {$set:{'status':1}}, (err,resp)=>{
            if(err) console.log(err)
            else {
                //azuriraj ucesnika u organizatora
                korisnik.collection.updateOne({'korisnickoIme':organizator}, {$set:{'tip':2}}, (err,resp)=>{
                    if(err) console.log(err)
                    else res.json({"message": "Radionica odobrena!"})
                })
                //azuriraj korisnika u organizatora
            }
        })
    }

    odobriRadionicuOrganizator= (req: express.Request, res: express.Response) =>{
        let id = req.body.id

        radionica.collection.updateOne({'id':id}, {$set:{'status':1}},(err,resp)=>{
            if(err) console.log(err)
            else res.json({"message": "Radionica odobrena!"})
        })
    }

}