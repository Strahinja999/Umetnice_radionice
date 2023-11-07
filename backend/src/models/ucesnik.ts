import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Ucesnik = new Schema({
    korisnickoIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    telefon:{
        type:String
    },
    email:{
        type:String
    },
    odobreno:{
        type: Number
    },
    radionicePrisustovovao:{
        type:Array<String>
    },
    komentari:{
        type:Array<String>
    },
    radioniceLajkovao:{
        type:Array<String>
    },
    trenutnoPrijavljen:{
        type:Array<String>
    },
    poruke:{
        type:Array<Object>
    },
    slika:{
        type:String
    }
});

export default mongoose.model('Ucesnik', Ucesnik, 'ucesnici')