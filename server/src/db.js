import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://Localhost/chatdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("inicio la conexion a BD");
  })
  .catch((error) => {
    console.log("ah ocurido un error", error);
  });
