import express from 'express'
import korisnik from '../models/korisnik';


export class PrijavaController{

     prijava = (req: express.Request, res: express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let lozinka = req.body.lozinka;
    
        korisnik.findOne({'korisnickoIme': korisnickoIme, 'lozinka':lozinka}, (err,korisnik) =>{
            if(err) console.log(err);
            else res.json(korisnik)
        });
     }

     prijavaAdmin = (req: express.Request, res: express.Response)=>{
        let korisnickoIme = req.body.korisnickoIme;
        let lozinka = req.body.lozinka;
    
        korisnik.findOne({'korisnickoIme': korisnickoIme, 'lozinka':lozinka}, (err,korisnik) =>{
            if(err) console.log(err);
            else res.json(korisnik)
        });
     }

}