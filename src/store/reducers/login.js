import {
    ADD_CONFIRM_PASS,
    ADD_FIRST_NAME,
    ADD_LAST_NAME,
    ADD_PASS,
    ADD_EMAIL,
    GO_TO_CREATE_USER
} from "../../constans/login.constans";

const initialState = {
    email: "",
    pass: "",
    confirmPass: "",
    firstName: "",
    lastName: "",
    isLogin: true
};

export default function(state = initialState, action) {

    switch (action.type) {
        case ADD_EMAIL: {
            return {
                ...state,
                email: action.payload.email
            };
        }
        case ADD_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload.firstName
            };
        }
        case ADD_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload.lastName
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
        case GO_TO_CREATE_USER: {
            return {
                ...state,
                isLogin: false
            };
        }
        default:
            return state;
    }
}
