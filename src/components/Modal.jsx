import React, { useState } from 'react'
import "../css/modal.css"

const Modal = () => {
  const [modal , seModal] = useState(true)
  
  return (
    <div className={modal ? 'modal' : 'modall'}>
        <div className="sm-modal">
            <h1 class="logo">Gozo`n.<span>uz</span></h1>
            <div className="tetx">
              <span>1 Mарт:</span>
              <div className="sm-tetx">
                <button className='btnf bt'>8:00-10:00</button>
                <button className='btnr bt'>11:00-13:00</button>
                <button className='btnb bt btnb1'>15:00-17:00</button>
              </div>
            </div> 
            
            <div className="tetx">
              <span>2 Mарт:</span>
              <div className="sm-tetx">
                <button className='btnr bt'>11:00-13:00</button>
                <button className='btnb bt btnb9'>15:00-17:00</button>
                <button className='btnf bt'>8:00-10:00</button>
              </div>
            </div> 
            
            <div className="tetx">
              <span>3 Mарт:</span>
              <div className="sm-tetx">
                <button className='btnb bt btnb7'>15:00-17:00</button>
                <button className='btnr bt'>11:00-13:00</button>
                <button className='btnf bt'>8:00-10:00</button>
              </div>
            </div>

            <div className="tetx">
              <span>4 Mарт:</span>
              <div className="sm-tetx">
                <button className='btnf bt'>8:00-10:00</button>
                <button className={'btnb bt btnb' + 5}>15:00-17:00</button>
                <button className='btnr bt'>11:00-13:00</button>
              </div>
            </div>

            <div className="tetx">
              <span>5 Mарт:</span>
              <div className="sm-tetx">
                <button className='btnr bt'>11:00-13:00</button>
                <button className='btnf bt'>8:00-10:00</button>
                <button className='btnb bt btnb2'>15:00-17:00</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Modal