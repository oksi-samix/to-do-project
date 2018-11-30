import {
    SET_ERRORS,
    RESET_ERRORS,
} from "../constans/errors.constans";

export const setError = (msg) => ({
    type: SET_ERRORS,
    payload: {
        msg
    }
});

export const resetError = () => ({
    type: RESET_ERRORS
});

