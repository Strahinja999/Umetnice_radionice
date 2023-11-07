import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Organizator = new Schema({
    korisnickoIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    naziv:{
        type:String
    },
    maticniBroj:{
        type:String
    },
    drzava:{
        type:String
    },
    grad:{
        type:String
    },
    postanskiBroj:{
        type:String
    },
    ulica:{
        type:String
    },
    broj:{
        type: Number
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
    radionice:{
        type:Array<Number>
    },
    poruke:{
        type:Array<Object>
    },
    slika:{
        type:String
    }
});

export default mongoose.model('Organizator', Organizator, 'organizatori')