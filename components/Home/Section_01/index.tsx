import React from 'react'
import BtnDefault from '../../widgets/Buttons/BtnDefault'
import BtnPlay from '../../widgets/Buttons/BtnPlay'
import BtnPrimary from '../../widgets/Buttons/BtnPrimary'

function Section_01() {
  return (
    <section className="section_01" data-scroll-section>
      <h1 data-scroll className="h-medium">Centre for <span>Aerospace</span> & <br />  <span>Security</span> Studies</h1>
      <p data-scroll className="paragraph">An independent analysis on Aerospace and International Security Issues</p>
        <BtnPlay text={'About CASS'} class="magnet" handleClick={() => window.open("https://youtu.be/2JzP4MGeqDQ", '_blank')} />
      <div className="btn-group">
        <BtnPrimary text={'About CASS'} handleClick={() => window.open("https://www.youtube.com/channel/UCtJntJfsIcBLC9jJdqtA-kQ", '_blank')} />
        {/* <BtnDefault text={'About CASS'} handleClick={() => window.open("https://youtu.be/2JzP4MGeqDQ", '_blank')} /> */}
        <BtnPrimary text="YOUTUBE" image={<div className="icons8-youtube"></div>}/>

      </div>

    </section>
  )
}

export default Section_01