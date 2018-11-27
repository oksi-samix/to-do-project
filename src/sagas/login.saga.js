import { call, put, takeEvery, select } from 'redux-saga/effects'
import Api from '../api/api'

function* fetchUser() {
    try {
        const user = yield call(Api.loginUser);
        yield put({type: "USER_LOGIN", user});
    } catch (e) {
        yield put({type: "LOGIN_FAILED", message: e.message});
    }
}

function* loginSaga() {
    yield takeEvery("SUBMIT_LOGIN", fetchUser());
}

export default loginSaga;

