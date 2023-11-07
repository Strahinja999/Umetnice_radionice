"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prijavacontroller_1 = require("../controllers/prijavacontroller");
const prijavaRouter = express_1.default.Router();
prijavaRouter.route('/prijava').post((req, res) => new prijavacontroller_1.PrijavaController().prijava(req, res));
prijavaRouter.route('/prijavaAdmin').post((req, res) => new prijavacontroller_1.PrijavaController().prijavaAdmin(req, res));
exports.default = prijavaRouter;
//# sourceMappingURL=prijava.routers.js.map