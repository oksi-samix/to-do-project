import loginSaga from "./login.saga";
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        loginSaga(),
    ])
}