import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

// =============================================================================
// these are my custom Sagas
// not actually a saga, but an api call
// export function fetchDndSpellAsync() {
//   fetch('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/' +
//   (Math.floor(Math.random() * 319) + 1))
//     .then((response) => {
//       return response.json()
//     }).then((theJson) => {
//       console.log(theJson);
//     }).catch((err) => console.log('fetch error!', err))
// }
//
// // this is the event handler that will be tied to the button
// export function* getSpellAsync() {
//   const data = yield call(
//     fetchDndSpellAsync,
//     Math.floor(Math.random() * 319) + 1
//   )
//   yield console.log(data);
//   yield put({
//     type: 'GOT_SPELL',
//     name: data.name/*data /* i'm not sure what value goes in here, but it will come from the yield above; i just don't know how to call it */
//   })
// }

//example function to fuck with
// export function* onFetchSpell() {
//   yield takeLatest('GET_SPELL_ASYNC', function* fetchSpell() {
//     try {
//         const response = yield call(fetch, 'https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/' + (Math.floor(Math.random() * 319) + 1));
//         const responseBody = response.json();
//     } catch (err) {
//         yield put(spellFailed(err))
//         return;
//     }
//     console.log(responseBody);
//     yield put(setSpell(responseBody.name));
//   });
// }
//
// export function* spellFailed(error) {
//   yield put({type: 'SPELL_ERROR', spell: error})
// }
//
// export function* setSpell(json) {
//   yield put({type: 'SET_SPELL', spell: json})
// }

export function *fetchSpell() {
  const json = yield fetch('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/' + (Math.floor(Math.random() * 319) + 1))
    .then(
      (response) => {
        return response.json();
      },
      (error) => console.log('error: '+ error)
    )
  yield put({ type: 'SPELL_RECEIVED', json: json})
}

export function *spellWatcher() {
  yield takeLatest('GET_SPELL', fetchSpell)
}



// my sagas are done
// =============================================================================


export const delay = (ms) => new Promise(res => setTimeout(res, ms))

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
    watchDecrementAsync(),
    spellWatcher(),
  ])
}
