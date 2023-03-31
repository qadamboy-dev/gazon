import React, { useState } from 'react'
import img from '../img/upload.png'
import "../css/signup.css"
import { Link } from "react-router-dom";

const Signup = () => {
    const [url, url1] = useState()
    const [urll, urll1] = useState(true)
    const [num, num1] = useState(Math.round(100000000*Math.random()))

    const a2 = (e) => {
        const file = e.target.files[0];
        if(!file) return
        var url11 = URL.createObjectURL(file)

        url1(url11)
        urll1(false)
    }

  return (
    <div>
        <div class="regis">
        <div class="img">
        </div>
        <div class="sm-regis">
            <h1 class="lago">Gozo`n<span>.uz</span></h1>
           <div class="yel">
                    <div class={urll ? "wrapper" : "active wrapper"}>
                        <div class="upload-box">
                            <input type="file" accept="image/*" onChange={a2}/>
                            <img src={urll ? img : url} alt="" />
                            <p>Browse File to Upload</p>
                        </div>
                    </div>
                    <div class="inputt">
                        <form action="">
                            <div>
                                <label for="">
                                    Name:
                                </label>
                                <input type="text" placeholder="Name" />
                            </div>
                
                            <div>
                                <label for="">
                                    Address:
                                </label>
                                <input type="text" placeholder="Address" />
                            </div>

                            <div>
                                <label for="">
                                    Phone:
                                </label>
                                <input type="number" placeholder="Phone" />
                            </div>
                            
                            <div>
                                <label for="">
                                    Date:   
                                </label>  
                                <input type="text" placeholder="Date" />
                            </div>
                            
                            <div>
                                <label for="">
                                    Pay:
                                </label>
                                <input type="number" placeholder="Address" />
                            </div>
                            <span>Id:{num}</span>
                        </form>
                    </div>
                    <Link to="/index">
                    <button class="btn" >
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                        </svg>
                        <span>Sign up</span>
                    </button>
                    </Link>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Signup