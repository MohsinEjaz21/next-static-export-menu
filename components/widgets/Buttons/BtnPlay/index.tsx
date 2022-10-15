import React from 'react'

function BtnPlay(props) {
  return (
    <button className="play-btn" onClick={props?.handleClick}/>
  )
}

export default BtnPlay