import axios from "axios";
import { DETALLEUSUARIO } from "../types/indexTypes";
export function getSignIn(data) {
  return async function (dispatch) {
    try {
      console.log("en el action", data);
      const signIn = await axios.post(
        "http://localhost:4000/login/signin",
        data
      );
      return dispatch({
        type: DETALLEUSUARIO,
        payload: signIn,
      });
    } catch (error) {
      console.log("PASO AL ERROR", error);
      alert(error);
    }
  };
}
