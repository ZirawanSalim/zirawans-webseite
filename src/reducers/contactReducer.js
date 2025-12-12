import contactSchema from "../schemas/contactSchema";

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
export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case "updateName":
    case "updateEmail":
    case "updateNachricht": {
      const updatedState = {
        ...state,
        [action.field]: action.payload,
      };
      return validateWithSchema(updatedState);
    }

    case "validate":
      return validateWithSchema(state);

    case "reset":
      return initialState;

    default:
      return state;
  }
}



function validateWithSchema(state) {
  try {
    contactSchema.validateSync(
      {
        name: state.name,
        email: state.email,
        nachricht: state.nachricht,
      },
      { abortEarly: false }
    );

    return {
      ...state,
      errors: { name: "", email: "", nachricht: "" },
      isValid: true,
    };
  } catch (err) {
    const errors = { name: "", email: "", nachricht: "" };

    (err.inner || []).forEach((error) => {
    errors[error.path] = error.message;
});


    return {
      ...state,
      errors,
      isValid: false,
    };
  }
}
