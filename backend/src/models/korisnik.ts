import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Korisnik = new Schema({
    korisnickoIme: {
        type: String
    },
    lozinka: {
        type: String
    },
    tip: {
        type: Number
    },
    odobreno:{
        type:Number
    }
});

export default mongoose.model('Korisnik', Korisnik, 'korisnici')