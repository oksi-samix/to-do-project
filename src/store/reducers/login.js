import { ADD_CONFIRM_PASS, ADD_NAME, ADD_PASS, SUBMIT_LOGIN } from "../../constans/login.constans";

const initialState = {
    email: "admin@a.com",
    pass: "admin",
    confirmPass: "",
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_NAME: {
            return {
                ...state,
                email: action.payload.email
            };
        }
        case ADD_PASS: {
            return {
                ...state,
                pass: action.payload.pass
            };
        }
        case ADD_CONFIRM_PASS: {
            return {
                ...state,
                confirmPass: action.payload.confirmPass
            };
        }
        default:
            return state;
    }
}
