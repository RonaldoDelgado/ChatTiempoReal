import imgUser from "../assets/username-icon.svg";
import imgPass from "../assets/password-icon.svg";
import imgLogo from "../assets/login-icon.svg";
import imgGoogle from "../assets/google-icon.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-info d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-white p-5 rounded-5 text-secondary shadow"
        Style="width: 25rem"
      >
        <div className="d-flex justify-content-center">
          <img src={imgLogo} alt="login-icon" Style="height: 7rem" />
        </div>
        <div className="text-center fs-1 fw-bold">INGRESAR</div>
        <div className="input-group mt-4">
          <div className="input-group-text bg-info">
            <img src={imgUser} alt="username-icon" Style="height: 1rem" />
          </div>
          <input
            className="form-control bg-light"
            type="text"
            placeholder="Ussuario"
          />
        </div>
        <div className="input-group mt-1">
          <div className="input-group-text bg-info">
            <img src={imgPass} alt="password-icon" Style="height: 1rem" />
          </div>
          <input
            className="form-control bg-light"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <div className="d-flex align-items-center gap-1">
            <input className="form-check-input" type="checkbox" />
            <div className="pt-1" Style="font-size: 0.9rem">
              Recuerdame
            </div>
          </div>
          <div className="pt-1">¿Olvidaste tu contraseña?</div>
        </div>
        <div className="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm">
          <Link to="/chat">Entrar</Link>
        </div>
        <div className="d-flex gap-1 justify-content-center mt-1">
          <div>¿No tienes una cuenta?</div>
          <a href="#" className="text-decoration-none text-info fw-semibold">
            Registrate
          </a>
        </div>
        <div className="p-3">
          <div className="border-bottom text-center" Style="height: 0.9rem">
            <span className="bg-white px-3">o</span>
          </div>
        </div>
        <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm">
          <img src={imgGoogle} alt="google-icon" Style="height: 1.6rem" />
          <div className="fw-semibold text-secondary">Continue with Google</div>
        </div>
      </div>
    </div>
  );
}
