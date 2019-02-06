/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync }) =>
      <div>
        <button onClick={onIncrementAsync}>
          Increment after one second
        </button>
        {' '}
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onDecrementAsync}>
          Decrement after one second
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDecrementAsync: PropTypes.func.isRequired,
}

export default Counter
