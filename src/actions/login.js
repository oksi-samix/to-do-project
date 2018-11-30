import {
    ADD_CONFIRM_PASS,
    ADD_PASS,
    SUBMIT_LOGIN,
    ADD_EMAIL,
    ADD_FIRST_NAME,
    ADD_LAST_NAME,
    CREATE_USER,
    GO_TO_CREATE_USER
} from "../constans/login.constans";

export const addEmail = (email) => ({
    type: ADD_EMAIL,
    payload: {
        email
    }
});

export const addFirstName = (firstName) => ({
    type: ADD_FIRST_NAME,
    payload: {
        firstName
    }
});

export const addLastName = (lastName) => ({
    type: ADD_LAST_NAME,
    payload: {
        lastName
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

export const submitForm = () => ({ type: SUBMIT_LOGIN});

export const createUser = () => ({ type: CREATE_USER});

export const goToCreateUser = () => ({ type: GO_TO_CREATE_USER});