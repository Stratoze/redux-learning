import { put, takeLatest , delay } from 'redux-saga/effects';
import { incrementAsyncStart, incrementAsyncSuccess } from './counterSlice.ts';

//worker
function* handleIncrementAsyncWorker() {
    yield delay(1000);
    yield put(incrementAsyncSuccess());
}

//watcher
export function* counterSaga() {
    yield takeLatest(incrementAsyncStart.type, handleIncrementAsyncWorker);
}
