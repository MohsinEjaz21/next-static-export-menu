import React from 'react'

function BtnDefault(props) {
  return (
    <button className="btn" onClick={props?.handleClick}>
      <span className="btn-content"> {props?.text} </span>
    </button>
  )
}

export default BtnDefault