/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const DndSpellGetter = ({ spell, onGetSpell }) =>
      <div>
        <button onClick={onGetSpell}>
          Get a random D&D spell
        </button>
        <hr/>
        <div>
          {spell.name}
          <hr/>
          {spell.description}
        </div>
      </div>

DndSpellGetter.propTypes = {
  spell: PropTypes.object.isRequired,
}

export default DndSpellGetter
