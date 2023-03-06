import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import router from "./routes/index.js";
import cors from "cors";
import { createRoles } from "./libs/initialRole.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
createRoles();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
  },
});
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", router);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (message) => {
    socket.broadcast.emit("message", {
      body: message,
      from: socket.id,
    });
  });
});

export default server;
