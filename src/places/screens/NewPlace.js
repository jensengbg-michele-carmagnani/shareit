import React from 'react'
import Input from '../../shared/components/UI/Input/Input.js'

import "./NewPlace.css"
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element="input" type="text" lable="Tile" />
    </form>
  )
}

export default NewPlace
