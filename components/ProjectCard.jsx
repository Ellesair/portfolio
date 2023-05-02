import React from 'react'

function projectCard(props) {
  return (
    <>
    <h4>{props.data.name}</h4>
    <p>{props.data.description}</p>
    <p>{props.data.date}</p>
    </>
  )
}

export default projectCard