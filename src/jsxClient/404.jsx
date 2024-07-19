import React from 'react'
import '../scripts_css/404page.css'
import ErrorLogo from '../staticImgs/404errorImg.png'
import Spaceman from '../staticImgs/pngtree-realistic-astronaut-illustration-png-image_6599323.png'
import'../scripts_css/across.css'

function Error404() {
  return (
    <div>
      <main className='CodeMain404'>
        <div className='Code404'>
          <img src={Spaceman} alt="404 Error" className='Spaceman' />
        </div>
        <div className='Code404'>
          <img src={ErrorLogo} alt="404 Error" className='ErrorLogo' />
        </div>
      </main>
    </div>
  )
}

export default Error404