import express from 'express'
import radionica from '../models/radionica';
import korisnik from '../models/korisnik';


export class NeregistrovanController{

     dohvatiSveRadionice = (req: express.Request, res: express.Response)=>{
        radionica.find({}, (err,radionice) =>{
            if(err) console.log(err)
            else res.json(radionice)
        })
     }

     dohvatiPoNazivu = (req: express.Request, res: express.Response) =>{
        let naziv = req.body.naziv
        radionica.find({'naziv':naziv}, (err, radionice)=>{
            if(err) console.log(err)
            else res.json(radionice)
        })
     }
     dohvatiPoGradu = (req: express.Request, res: express.Response) =>{
        let grad = req.body.grad
        radionica.find({'mestoOdrzavanja':grad}, (err, radionice)=>{
            if(err) console.log(err)
            else res.json(radionice)
        })
     }

     dohvatiPoNazivuIGradu = (req: express.Request, res: express.Response) =>{
        let naziv = req.body.naziv
        let grad = req.body.grad
        radionica.find({'naziv':naziv,'mestoOdrzavanja':grad }, (err, radionice)=>{
            if(err) console.log(err)
            else res.json(radionice)
        })
     }
}