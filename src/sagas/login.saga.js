import {call, put, takeEvery, select} from 'redux-saga/effects'
import Api from '../api/api'

const getDataFromState = state => state.login;

function* signIn() {
    try {
        const data = yield select(getDataFromState);
        const user = yield call(Api.loginUser, data.email, data.pass);
        yield put({type: "SET_USER_INFO", payload: user});
    } catch (e) {
        yield put({type: "SET_ERRORS",  payload: { msg : e} });
    }
}

function* createUser() {
    try {
        const data = yield select(getDataFromState);
        const newUser = yield call(Api.createUser, data.firstName, data.lastName, data.email, data.password);
        const user = {firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password};
        yield put({type: "SET_USER_INFO", payload: {...user, newUser}});
    } catch (e) {
        yield put({type: "SET_ERRORS",  payload: { msg : e} });
    }
}


function* loginSaga() {
    yield takeEvery("SUBMIT_LOGIN", signIn);
    yield takeEvery("CREATE_USER", createUser);
}

export default loginSaga;

