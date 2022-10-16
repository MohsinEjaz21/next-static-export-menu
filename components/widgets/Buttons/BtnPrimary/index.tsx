import React from 'react'

function BtnPrimary(props) {
  return (
    <div className="btn_primary">
      <div className="btn btn-normal">
        <button onClick={props.handleClick} className="btn-click magnetic" data-strength={25} data-strength-text={15}>
          <div className="btn-fill" />
          <span className="btn-text" style={{ gap:'0.5rem',  ...( props?.image ? {padding:'0 5px'} : {}) }}>
             {props?.image}
            <span className="btn-text-inner change" >{props.text}</span>
          </span>
        </button>
      </div>
    </div>

  )
}

export default BtnPrimary