import React from 'react'
import img1 from "../img/ad54c7c7254aaa80c750954657737cae.webp"
import img2 from "../img/r90.jfif"
import img3 from "../img/calgary-indoor-field-1080x675.jpg"
import img4 from "../img/webpc-passthru.webp"

const Bloc2 = () => {
  return (
    <div>
        <div class="bloc2" id="reserve">    
            <h1>Available seats</h1>
            <div class="card">
                <div class="sm-card" data-aos="fade-up"
                data-aos-duration="500">
                    <img src={img1} alt="" width="400px" />
                    <span>Id:12331231</span>
                    <span><span>Name:</span> lorem</span>
                    <span><span>Address:</span> SH.Lorem 12</span>
                    <span><span>Phone:</span> +998955621213</span>
                    <span><span>Date:</span> 17:00-18:00</span>
                    <span><span>Pay:</span> 120 sum</span>
                </div>
                <div class="sm-card" data-aos="fade-up"
                data-aos-duration="1000">
                    <img src={img2} alt="" width="400px" />
                    <span>Id:12331231</span>
                    <span><span>Name:</span> lorem</span>
                    <span><span>Address:</span> SH.Lorem 12</span>
                    <span><span>Phone:</span> +998923476534</span>
                    <span><span>Date:</span> 17:00-18:00</span>
                    <span><span>Pay:</span> 120 sum</span>
                </div>
                <div class="sm-card"data-aos="fade-up"
                data-aos-duration="1500">
                    <img src={img3} alt="" width="400px" height="200px" />
                    <span>Id:12331231</span>
                    <span><span>Name:</span> lorem</span>
                    <span><span>Address:</span> SH.Lorem 22</span>
                    <span><span>Phone:</span> +998923456565</span>
                    <span><span>Date:</span> 12:00-14:00</span>
                    <span><span>Pay:</span> 120 sum</span>
                </div>
                <div class="sm-card"data-aos="fade-up"
                data-aos-duration="2000">
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
    </div>
  )
}

export default Bloc2