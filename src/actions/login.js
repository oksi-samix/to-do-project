import { ADD_NAME, ADD_CONFIRM_PASS, ADD_PASS, SUBMIT_LOGIN } from "../constans/login.constans";

export const addName = (email) => ({
    type: ADD_NAME,
    payload: {
        email
    }
});

export const addPass = (pass) => ({
    type: ADD_PASS,
    payload: {
        pass
    }
});

export const addConfirmPass = (confirmPass) => ({
    type: ADD_CONFIRM_PASS,
    payload: {
        confirmPass
    }
});

export const submitForm = (email, pass) => ({ type: SUBMIT_LOGIN, payload: {email, pass}});