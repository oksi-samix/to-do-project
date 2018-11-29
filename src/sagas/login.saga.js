import { call, put, takeEvery, select } from 'redux-saga/effects'
import Api from '../api/api'

const getDataFromState = state => state.login;
function* fetchUser() {
    try {
        const data = yield select(getDataFromState);
        const user = yield call(Api.loginUser, data.email, data.pass);
        yield put({type: "SET_USER_INFO", payload: user});
    } catch (e) {
        yield put({type: "LOGIN_FAILED", message: e.message});
    }
}

function* loginSaga() {
    yield takeEvery("SUBMIT_LOGIN", fetchUser);
}

export default loginSaga;

