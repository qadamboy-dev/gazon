import React, { useState } from 'react'
import img1 from "../img/ad54c7c7254aaa80c750954657737cae.webp"
import img2 from "../img/r90.jfif"
import img3 from "../img/calgary-indoor-field-1080x675.jpg"
import img4 from "../img/webpc-passthru.webp"
import "../css/modal.css"

const Bloc2 = () => {

  const [modal , seModal] = useState(false)
  const [but , seBut] = useState(Math.round(10*Math.random()))
  const [but2 , seBut2] = useState(Math.round(10*Math.random()))
  const [but3 , seBut3] = useState(Math.round(10*Math.random()))
  const [but4 , seBut4] = useState(Math.round(10*Math.random()))
  var a = 0
  var b = 0
  var c = 0
  var d = 0
    if(but > 10){
        a = 10
    }else{
        a = but
    }

    if(but2 > 10){
        b = 10
    }else{
        b = but2
    }

    if(but3 > 10){
        c = 10
    }else{
        c = but3
    }

    if(but4 > 10){
        d = 10
    }else{
        d = but4
    }


    const modal1 = () =>[
        seModal(e => !e)
    ]

    const butt = () => {
        seBut(but+1)
    } 
    
    const butt2 = () => {
        seBut2(but2+1)
    }

    const butt3 = () => {
        seBut3(but3+1)
    }

    const butt4 = () => {
        seBut4(but4+1)
    }
    
  return (
    <div>
        <div class="bloc2" id="reserve">    
            <h1>Available seats</h1>
            <div class="card">
                <div class="sm-card" data-aos="fade-up"
                data-aos-duration="500" onClick={modal1}>
                    <img src={img1} alt="" width="400px" />
                    <span>Id:12331231</span>
                    <span><span>Name:</span> lorem</span>
                    <span><span>Address:</span> SH.Lorem 12</span>
                    <span><span>Phone:</span> +998955621213</span>
                    <span><span>Date:</span> 17:00-18:00</span>
                    <span><span>Pay:</span> 120 sum</span>
                </div>
                <div class="sm-card" data-aos="fade-up"
                data-aos-duration="1000"onClick={modal1}>
                    <img src={img2} alt="" width="400px" />
                    <span>Id:12331231</span>
                    <span><span>Name:</span> lorem</span>
                    <span><span>Address:</span> SH.Lorem 12</span>
                    <span><span>Phone:</span> +998923476534</span>
                    <span><span>Date:</span> 17:00-18:00</span>
                    <span><span>Pay:</span> 120 sum</span>
                </div>
                <div class="sm-card"data-aos="fade-up"
                data-aos-duration="1500"onClick={modal1}>
                    <img src={img3} alt="" width="400px" height="200px" />
                    <span>Id:12331231</span>
                    <span><span>Name:</span> lorem</span>
                    <span><span>Address:</span> SH.Lorem 22</span>
                    <span><span>Phone:</span> +998923456565</span>
                    <span><span>Date:</span> 12:00-14:00</span>
                    <span><span>Pay:</span> 120 sum</span>
                </div>
                <div class="sm-card"data-aos="fade-up"
                data-aos-duration="2000"onClick={modal1}>
                    <img src={img4} alt="" width="400px" height="200px" />
                    <span>Id:12331231</span>
                    <span><span>Name:</span> lorem</span>
                    <span><span>Address:</span> SH.Lorem 62</span>
                    <span><span>Phone:</span> +998923454445</span>
                    <span><span>Date:</span> 12:00-15:00</span>
                    <span><span>Pay:</span> 170 sum</span>
                </div>
            </div>
        </div>
        <div className={modal ? 'modal' : 'modal modall'} onClick={modal1}>
            <div className="sm-modal" onClick={e => e.stopPropagation()}>
                <h1 class="logo">Gozo`n.<span>uz</span></h1>
                <div className="tetx">
                <span>1 Mарт:</span>
                <div className="sm-tetx">
                    <button className='btnf bt'>8:00-10:00</button>
                    <button className={'btnb bt btnb' + a} onClick={butt}>11:00-13:00</button>
                    <button className='btnr bt'>15:00-17:00</button>
                </div>
                </div> 
                
                <div className="tetx">
                <span>2 Mарт:</span>
                <div className="sm-tetx">
                    <button className='btnr bt'>8:00-10:00</button>
                    <button className={'btnb bt btnb' + b} onClick={butt2}>11:00-13:00</button>
                    <button className='btnf bt'>15:00-17:00</button>
                </div>
                </div> 
                
                <div className="tetx">
                <span>3 Mарт:</span>
                <div className="sm-tetx">
                    <button className='btnf bt'>8:00-10:00</button>
                    <button className='btnr bt'>11:00-13:00</button>
                    <button className={'btnb bt btnb' + c} onClick={butt3}>15:00-17:00</button>
                </div>
                </div>

                <div className="tetx">
                <span>4 Mарт:</span>
                <div className="sm-tetx">
                    <button className='btnf bt'>8:00-10:00</button>
                    <button className={'btnb bt btnb' + d} onClick={butt4}>11:00-13:00</button>
                    <button className='btnr bt'>15:00-17:00</button>
                </div>
                </div>
                <br />
                <br />
                <br />
                <button class="btn" onClick={modal1}>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                         <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                     </svg>                
                    <span>Sign up</span>     
                </button> 
                            
            </div>
        </div>
    </div>
  )
}

export default Bloc2