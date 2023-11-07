import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Poruka = new Schema({
    ucesnik:{
        type:String
    },
    organizator:{
        type:String
    },
    tekst:{
        type:String
    },
    datum:{
        type:Date
    },
    fleg:{
        type:Number
    }
});

export default mongoose.model('Poruka', Poruka)