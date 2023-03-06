import { DETALLEUSUARIO } from "../types/indexTypes";

const initialState = {
  User: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DETALLEUSUARIO:
      return { ...state, User: action.payload };
    default:
      return state;
  }
}
