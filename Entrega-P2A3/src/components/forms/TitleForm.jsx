import React from 'react'

const TitleForm = (props) => {
  return (
    <div id="divTop">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
  )
}

export default TitleForm