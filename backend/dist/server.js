"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const prijava_routers_1 = __importDefault(require("./routers/prijava.routers"));
const registracija_router_1 = __importDefault(require("./routers/registracija.router"));
const admin_router_1 = __importDefault(require("./routers/admin.router"));
const neregistrovan_router_1 = __importDefault(require("./routers/neregistrovan.router"));
const ucesnik_ruter_1 = __importDefault(require("./routers/ucesnik.ruter"));
const organizator_router_1 = __importDefault(require("./routers/organizator.router"));
//SLIKE
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://127.0.0.1/umetnickaRadionica');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
app.use('/prijava', prijava_routers_1.default);
app.use('/registracija', registracija_router_1.default);
app.use('/admin', admin_router_1.default);
app.use('/neregistrovan', neregistrovan_router_1.default);
app.use('/ucesnik', ucesnik_ruter_1.default);
app.use('/organizator', organizator_router_1.default);
//SLIKE
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map