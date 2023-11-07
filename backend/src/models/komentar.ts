import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Komentar = new Schema({
    id:{
        type:Number
    },
    idRadionice:{
        type:Number
    },
    idUcesnika:{
        type:String
    },
    datum:{
        type:Date
    },
    tekst:{
        type:String
    },
    nazivRadionice:{
        type:String
    }
});

export default mongoose.model('Komentar', Komentar, 'komentari')