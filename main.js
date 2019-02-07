import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import DndSpellGetter from './DndSpellGetter'
import Loader from './Loader'
import { rootReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <div>
      <DndSpellGetter
        spell={store.getState().spell}
        onGetSpell={() => action('GET_SPELL')}/>
      <Loader
        spellLoading={store.getState().spell.spellLoading} />
    </div>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

// <Counter
//   value={store.getState().counter}
//   onIncrement={() => action('INCREMENT')}
//   onDecrement={() => action('DECREMENT')}
//   onIncrementAsync={() => action('INCREMENT_ASYNC')}
//   onDecrementAsync={() => action('DECREMENT_ASYNC')} />
