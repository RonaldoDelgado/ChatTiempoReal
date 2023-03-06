import io from "socket.io-client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const socket = io("http://localhost:4000");

export default function Catch() {
  //Selectos START
  const User = useSelector((state) => state.User);
  //Selectos END

  //Estates START
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      body: "message test",
      from: "usuario test",
    },
  ]);
  //Estates END

  //Funciones
  const handlerSubmint = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([newMessage, ...messages]);
    setMessage("");
  };

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([message, ...messages]);
    };
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  return (
    <div className="App">
      <div className="container mt-3">
        <div className="card shadow border-0">
          <div className="card-body">
            <label htmlFor="">{User.username}</label>
            <form onSubmit={handlerSubmint}>
              <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></input>
              <button>Enviar</button>
            </form>
          </div>
        </div>
        {messages.map((message, i) => (
          <div key={i}>
            <div
              key={i}
              className={`d-flex p-3 ${
                message.from === "Me"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`card mb-3 shadow border-1 ${
                  message.from === "ME"
                    ? "bg-success bg-opacity-25"
                    : "bg-light"
                }`}
              >
                <div className="card-body">
                  <small className="">
                    {message.from}: {message.body}
                  </small>
                </div>
              </div>
            </div>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}
