import express, { response } from 'express'
import radionica from '../models/radionica';
import korisnik from '../models/korisnik';
import ucesnik from '../models/ucesnik'
import komentar from '../models/komentar';
import poruka from '../models/poruka';
import organizator from '../models/organizator';

export class UcesnikController{

    dohvatiUcesnika = (req: express.Request, res: express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        ucesnik.findOne({'korisnickoIme':korisnickoIme}, (err,ucesnik) =>{
            if(err) console.log(err);
            else res.json(ucesnik)
        })
    }

    izmeniUcesnika = (req: express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme;
        let korisnickoImeNovo = req.body.korisnickoImeNovo
        let ime = req.body.ime
        let prezime = req.body.prezime
        let telefon = req.body.telefon
        let email = req.body.email
        let slika = req.body.slika

        //IZMENI korisnika i ucesnika!!!
        
        ucesnik.collection.updateOne({'korisnickoIme': korisnickoIme} , {$set: {'ime': ime, 'prezime': prezime, 'telefon': telefon,'email': email, 
        'korisnickoIme': korisnickoImeNovo, 'slika':slika}}); 
        
        korisnik.collection.updateOne({'korisnickoIme':korisnickoIme}, {$set: {'korisnickoIme':korisnickoImeNovo}});

        
    }

    dohvatiRadionicuPoID = (req: express.Request, res: express.Response) =>{
        let id = req.body.id;

        radionica.findOne({'id': id}, (err, radionica) =>{
            if(err) console.log(err)
            else res.json(radionica)
        })
    }

    dohvatiKomentarPoID = (req: express.Request, res: express.Response) =>{
        let id = req.body.id;

        komentar.findOne({'id': id}, (err, k) =>{
            if(err) console.log(err)
            else res.json(k)
        })
    }

    dohvatiSveRadionice = (req: express.Request, res: express.Response)=>{
        radionica.find({}, (err,radionice) =>{
            if(err) console.log(err)
            else res.json(radionice)
        })
    }

    prijaviMeNaRadionicu = (req:express.Request, res:express.Response)=>{
        let korisnickoIme= req.body.korisnickoIme
        let idRadionice = req.body.idRadionice
        radionica.updateOne({'id':idRadionice}, {$push:{'listaCekanja': korisnickoIme}}, (err, resp)=>{
            if(err) console.log(err)
            else{
                res.json({'poruka': 'ok'})
            }
        })
    }

    lajk = (req:express.Request, res:express.Response)=>{
        let brLajkova= req.body.brLajkova
        let idRadionice = req.body.idRadionice
        radionica.collection.updateOne({'id':idRadionice}, {$set:{'lajkovi': brLajkova}}, (err, resp)=>{
            if(err) console.log(err)
            else{
                res.json({'poruka': 'ok'})
            }
        })
        
    }

    promeniLozinku = (req:express.Request, res: express.Response) =>{
        let korisnickoIme = req.body.korisnickoIme
        let lozinka = req.body.lozinka

        korisnik.findOneAndUpdate({'korisnickoIme': korisnickoIme}, {$set:{lozinka:lozinka}}, (err, resp) =>{
            if(err) console.log(err)
            else {
                ucesnik.findOneAndUpdate({'korisnickoIme': korisnickoIme}, {$set:{lozinka:lozinka}}, (err, resp)=>{
                    if(err) console.log(err)
                })
                res.json({'message':"Lozinka uspesno promenjena"})
            }
        })
        
    }

    azurirajKomentar = (req:express.Request, res: express.Response) =>{
        let id = req.body.id
        let tekst= req.body.tekst

        komentar.findOneAndUpdate({"id":id}, {$set:{tekst:tekst, datum: new Date()}}, (err, resp)=>{
            if(err) console.log(err)
            else res.json({"message" :"ok"})
        })
    }

    obrisiKomentar = (req:express.Request, res: express.Response) =>{
        let id = req.body.id
        let korisnickoIme = req.body.korisnickoIme
        let idString = req.body.idString

        ucesnik.updateOne({'korisnickoIme':korisnickoIme}, {$pull:{'komentari':idString}}, (err,resp)=>{
            if(err) console.log(err)
            else res.json({"message":"ok"})
        })

        /*komentar.findOneAndDelete({"id":id}, (err, resp)=>{
            if(err) console.log(err)
            else{
                ucesnik.findOneAndUpdate({'korisnickoIme':korisnickoIme}, {$pull:{'komentari':idString}}, (err,resp)=>{
                    if(err) console.log(err)
                    else res.json({"message":"ok"})
                })
                
            }
        })*/
    }

    odlajkuj = (req:express.Request, res: express.Response) =>{
        let id = req.body.id
        let korisnickoIme = req.body.korisnickoIme

        ucesnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {$pull:{'radioniceLajkovao':id.toString}}, (err,resp)=>{
            if(err) console.log(err)
            else res.json({"message":"ok"})
        })

        /*radionica.updateOne({"id":id}, {$inc:{lajkovi:-1}},(err,resp)=>{
            if(err) console.log(err)
            else {
                ucesnik.findOneAndUpdate({"korisnickoIme":korisnickoIme}, {$pull:{'radioniceLajkovao':id.toString}}, (err,resp)=>{
                    if(err) console.log(err)
                    else res.json({"message":"ok"})
                })
            }
        })*/

    }

    dodajRadionicu = (req:express.Request, res: express.Response) =>{
        let r = new radionica(req.body)
        r.save().then(r =>{
            res.status(200).json({"message":"Radionica predlozena!"})
        }).catch(err =>{
            res.status(400).json({ 'message': 'Neuspesno predlaganje' })
        })
    }

    posaljiPorukuOrganizatoru = (req:express.Request, res: express.Response) =>{
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

    dodajSliku = (req:express.Request, res: express.Response) =>{
        let slika = req.body.slika
        let u = req.body.korisnickoIme
        ucesnik.findOneAndUpdate({"korisnickoIme":u}, {$set:{slika:slika}}, (err,resp)=>{
            if(err) console.log(err)
            else res.json({"message":"ok"}) 
        })

    }
}