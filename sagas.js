import { put, takeEvery, all, call } from 'redux-saga/effects'

 export const delay = (ms) => new Promise(
   res => setTimeout(res, ms),
   err => console.log('error!')
 )

function* helloSaga() {
  console.log('hello, sagas! i am working!');
}

// worker Sagas: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export function* decrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'DECREMENT'})
}

// watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

// single entry point to start all sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync()
  ])
}
