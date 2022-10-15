import React from 'react'
import BtnDefault from '../../widgets/Buttons/BtnDefault'
import BtnPlay from '../../widgets/Buttons/BtnPlay'
import BtnPrimary from '../../widgets/Buttons/BtnPrimary'

function Section_01() {
  return (
    <section className="section_01">
      <h1 className="h-medium">Centre for <span>Aerospace</span> & <br />  <span>Security</span> Studies</h1>
      <p className="paragraph">An independent analysis on Aerospace and International Security Issues</p>
      <BtnPlay text={'About CASS'} handleClick={() => window.open("https://www.youtube.com/channel/UCtJntJfsIcBLC9jJdqtA-kQ", '_blank')} />
      <div className="btn-group">
        <BtnDefault text={'About CASS'} handleClick={() => window.open("https://youtu.be/2JzP4MGeqDQ", '_blank')} />
        <img src="https://casstt.com/theme/site/img/utube3.png"  />
      </div>
      <BtnPrimary/>

    </section>
  )
}

export default Section_01