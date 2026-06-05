import { put, takeLatest, delay } from 'redux-saga/effects';
import { incrementAsyncStart, incrementAsyncSuccess } from './counterSlice';

function* handleIncrementAsyncWorker() {
  yield delay(1000);
  yield put(incrementAsyncSuccess());
}

export function* counterSaga() {
  yield takeLatest(incrementAsyncStart.type, handleIncrementAsyncWorker);
}