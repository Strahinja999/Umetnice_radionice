import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import prijavaRouter from './routers/prijava.routers';
import registracijaRuter from './routers/registracija.router';
import adminRuter from './routers/admin.router';
import neregistrovanRuter from './routers/neregistrovan.router';
import ucesnikRuter from './routers/ucesnik.ruter';
import organizatorRuter from './routers/organizator.router';

//SLIKE

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/umetnickaRadionica');

const conn = mongoose.connection;

conn.once('open', ()=>{
    console.log('mongo open');
})

const router = express.Router(); 

app.use('/prijava', prijavaRouter)

app.use('/registracija', registracijaRuter)

app.use('/admin', adminRuter)

app.use('/neregistrovan',neregistrovanRuter)

app.use('/ucesnik',ucesnikRuter)

app.use('/organizator', organizatorRuter)

//SLIKE



app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));