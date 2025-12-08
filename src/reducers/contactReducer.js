export const initialState = {
  name: "",
  email: "",
  nachricht: "",
  errors: {
    name: "",
    email: "",
    nachricht: "",
  },
  isValid: false,
};

export default function contactReducer(state, action) {
  switch (action.type) {

    case "updateName":
      return {
        ...state,
        name: action.payload,
      };

    case "updateEmail":
      return {
        ...state,
        email: action.payload,
      };

    case "updateNachricht":
      return {
        ...state,
        nachricht: action.payload,
      };

    case "validate": {
      const errors = {
        name: state.name.length < 2 ? "Mindestens 2 Zeichen" : "",
        email: !state.email.includes("@") ? "@ muss enthalten sein" : "",
        nachricht: state.nachricht.length < 5 ? "Mindestens 5 Zeichen" : "",
      };

      const isValid = !errors.name && !errors.email && !errors.nachricht;

      return {
        ...state,
        errors,
        isValid,
      };
    }

    case "reset":
      return initialState;

    default:
      return state;
  }
}
