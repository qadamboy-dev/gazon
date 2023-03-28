import React from 'react'
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
        <div class="sign-in" id="contact">
          <h1>Want to add your field ?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <Link to="/signin">
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

export default Signin