import React from 'react'

const Button = ({id, Text, onClick, Type= "button"  }) => {
  return (
    <div id="divSubmit">
        <button id={id} type={Type} onClick={onClick}>{Text}</button>
    </div>
  )
}

export default Button