import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import { PORT } from "./config.js";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(morgan("dev"));
app.use(cors());

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (message) => {
    socket.broadcast.emit("message", {
      body: message,
      from: socket.id,
    });
  });
});

server.listen(PORT);
console.log("Server iniciado en el puerto " + PORT);
