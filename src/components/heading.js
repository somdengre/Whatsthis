import React from 'react'
import './heading.css'
function Heading(props) {
    const head = props.head
  return (
    <div className = 'head'>{head}</div>
  )
}

export default Heading