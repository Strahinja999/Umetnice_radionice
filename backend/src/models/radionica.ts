import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Radionica = new Schema({
    id:{
        type:Number
    },
    naziv:{
        type:String
    },
    datum:{
        type:Date
    },
    mestoOdrzavanja:{
        type:String
    },
    kratakOpis:{
        type:String
    },
    dugacakOpis:{
        type:String
    },
    ukupnoMesta:{
        type:Number
    },
    rezervisanaMesta:{
        type:Number
    },
    listaCekanja:{
        type:Array<String>
    },
    listaPrijavljenih:{
        type:Array<String>
    },
    listaOdobrenih:{
        type:Array<String>
    },
    organizator:{
        type:String
    },
    lajkovi:{
        type:Number
    },
    status:{
        type:Number
    },
    slika:{
        type:String
    }

});

export default mongoose.model('Radionica', Radionica, 'radionice')