import { RESET_ERRORS, SET_ERRORS } from "../../constans/errors.constans";

const initialState = {
    msg: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ERRORS: {
            return {
                ...state,
                msg: action.payload.msg
            };
        }
        case RESET_ERRORS: {
            return {
                ...state,
                msg: null
            };
        }
        default:
            return state;
    }
}
