import React from 'react'

function BtnPrimary(props) {
  return (
    <div className="btn_primary">
      <div className="btn btn-normal">
        <a href="mailto:info@dennissnellenberg.com" className="btn-click magnetic" data-strength={25} data-strength-text={15} style={{ transform: 'rotate(0.001deg)' }}>
          <div className="btn-fill" style={{ transform: 'translate(0px, -76%)' }} />
          <span className="btn-text" style={{ transform: 'rotate(0.001deg)' }}>
            <span className="btn-text-inner change" style={{ color: 'rgb(28, 29, 32)' }}>info@dennissnellenberg.com</span>
          </span>
        </a>
      </div>
    </div>

  )
}

export default BtnPrimary