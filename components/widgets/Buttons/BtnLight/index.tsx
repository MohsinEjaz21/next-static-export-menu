import React from 'react'

function BtnLight(props) {
  return (
    <button className="btn btn-01" onClick={props?.handleClick}>
      <span className="btn-content"> {props?.text} </span>
    </button>
  )
}

export default BtnLight