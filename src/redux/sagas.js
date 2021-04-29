import { takeLatest, all, put } from 'redux-saga/effects';
import { createActions } from 'reduxsauce';

const {Types, Creators} = createActions({
    actionChangeStateField: ["field", "value"],
});

const changeStateFieldSaga = (field, value) => ({
    type: "Commons/changeStateField",
    payload: {field, value}
});

function* changeStateField(action) {
    yield put(changeStateFieldSaga(action.field, action.value));
}

export {Creators as Actions};

export default function* CommonSagas() {
    yield all([
        takeLatest(Types.ACTION_CHANGE_STATE_FIELD, changeStateField),
    ]);
};
