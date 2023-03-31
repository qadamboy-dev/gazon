import React from 'react'
import { Link } from "react-router-dom";
import "../css/signupuser.css"

const Signupuser = () => {
  return (
    <div className='signup'>
      <div className="sm-signup">
        <h1 class="logo">Gozo`n.<span>uz</span></h1>
        <label>
          <span>Name:</span>
          <input type="text" />
        </label>
        <label>
         <span> Number:  </span>
          <input type="number" />
        </label>
        <br />
        <Link to="/index">
                            <button class="btn">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                </svg>
                                <span>Sign up</span>     
                            </button>
        </Link>
      </div>
    </div>
  )
}

export default Signupuser