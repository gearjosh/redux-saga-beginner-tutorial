/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Loader = ({ spellLoading }) => {
  if (spellLoading) {
    return <h1>Loading...</h1>
  } else {
    return <div></div>
  }
}

Loader.propTypes = {
  spellLoading: PropTypes.bool.isRequired,
}

export default Loader
