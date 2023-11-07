import express from 'express'
import ucesnik from '../models/ucesnik'
import radionica from '../models/radionica'
import korisnik from '../models/korisnik'
import organizator from '../models/organizator'
import poruka from '../models/poruka'

export class organizatorController{

    dohvatiMojeRadionice = (req: express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        radionica.find({'organizator': korisnickoIme}, (err,radionice)=>{
            if(err) console.log(err)
            else res.json(radionice)
        })
    }

    dohvatiRadionicuPoID = (req: express.Request, res: express.Response) =>{
        let id = req.body.id;

        radionica.findOne({'id': id}, (err, radionica) =>{
            if(err) console.log(err)
            else res.json(radionica)
        })
    }

    izmeniRadionicu = (req:express.Request, res: express.Response) =>{
        let id = req.body.id
        let naziv = req.body.naziv;
        let mesto = req.body.mesto;
        let datum = req.body.datum;
        let kratakOpis = req.body.kratakOpis;
        let dugacakOpis = req.body.dugacakOpis;
        let brojMesta = req.body.brojMesta
        let slika = req.body.slika

        radionica.collection.updateOne({'id' : id}, {$set:{
            'naziv': naziv,
            'mestoOdrzavanja' : mesto,
            'datum' : datum,
            'kratakOpis' : kratakOpis,
            'dugacakOpis' : dugacakOpis,
            'ukupnoMesta' : brojMesta,
            'slika':slika
        }},(err, resp)=>{
            if(err) console.log(err)
            else res.json({"message":"OK"})
        });
    }

    odbiKorisnika = (req:express.Request, res:express.Response) =>{
        let id = req.body.id
        let korisnickoIme = req.body.korisnickoIme

        radionica.collection.updateOne({'id' : id}, {$pull:{listaCekanja: korisnickoIme}},(err, resp)=>{
            if(err) console.log(err);
            else res.json({'message': 'ok'})
        })

    }

    odobriKorisnika = (req:express.Request, res:express.Response) =>{
        let id = req.body.id
        let korisnickoIme = req.body.korisnickoIme
        let strId = req.body.strId

        
        ucesnik.updateOne({'korisnickoIme': korisnickoIme}, {$push:{'trenutnoPrijavljen': strId}},(err, resp)=>{
            if(err) console.log(err);
            else res.json({'message': 'ok'})
        })
    }

    otkazi = (req:express.Request, res: express.Response) =>{
        let id = req.body.id
        radionica.deleteOne({'id':id}, (err, resp)=>{
            if(err) console.log(err);
            else res.json({'message': 'ok'})
        })
    }

    promeniLozinku = (req:express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        let lozinka = req.body.lozinka

        korisnik.findOneAndUpdate({'korisnickoIme': korisnickoIme}, {$set:{lozinka:lozinka}}, (err, resp) =>{
            if(err) console.log(err)
            else {
                organizator.findOneAndUpdate({'korisnickoIme': korisnickoIme}, {$set:{lozinka:lozinka}}, (err, resp)=>{
                    if(err) console.log(err)
                })
                res.json({'message':"Lozinka uspesno promenjena"})
            }
        })
        
    }
    dodajRadionicu = (req:express.Request, res: express.Response) =>{
        let r = new radionica(req.body)
        r.save().then(r =>{
            res.status(200).json({"message":"Radionica dodata!"})
        }).catch(err =>{
            res.status(400).json({ 'message': 'Neuspesno dodavanje' })
        })
    }

    dohvatiSveRadionice = (req: express.Request, res: express.Response) =>{
        radionica.find({},(err,r)=>{
            if(err) console.log(err)
            else res.json(r)
        })
    }

    dohvatiOrganizatora = (req: express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme

        organizator.findOne({"korisnickoIme":korisnickoIme}, (err, o)=>{
            if(err) console.log(err)
            else res.json(o)
        })
    }

    posaljiPorukuUcesniku = (req: express.Request, res: express.Response) =>{
        let u = req.body.ucesnik
        let o = req.body.organizator

        let p = new poruka(req.body)

        ucesnik.findOneAndUpdate({"korisnickoIme":u}, {$push:{poruke:p}}, (err,resp)=>{
            if(err) console.log(err)
        })

        organizator.findOneAndUpdate({"korisnickoIme":o}, {$push:{poruke:p}}, (err,resp)=>{
            if(err) console.log(err)
            else res.json({"message":"ok"}) 
        })
    }

}