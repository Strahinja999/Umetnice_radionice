import express from 'express'
import { prependOnceListener } from 'process';
import { PrijavaController } from '../controllers/prijavacontroller';

const prijavaRouter = express.Router();

prijavaRouter.route('/prijava').post(
    (req,res) => new PrijavaController().prijava(req, res)
)

prijavaRouter.route('/prijavaAdmin').post(
    (req,res) => new PrijavaController().prijavaAdmin(req,res)
)


export default prijavaRouter