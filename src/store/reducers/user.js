import {  SET_USER_INFO } from "../../constans/user.constans";

const initialState = {
    user:{}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO: {
            return {
                ...state,
                user: action.payload.user
            };
        }
        default:
            return state;
    }
}
