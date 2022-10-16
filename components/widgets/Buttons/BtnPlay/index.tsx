import React from 'react'

function BtnPlay(props) {
  return (
    <button className={`play-btn ${props.class ? props.class : ''}`} onClick={props?.handleClick}/>
  )
}

export default BtnPlay