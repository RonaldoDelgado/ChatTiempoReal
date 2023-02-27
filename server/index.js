import server from "./src/app.js";
import "./src/db.js";

import { PORT } from "./config.js";

server.listen(PORT);
console.log("Server iniciado en el puerto " + PORT);
