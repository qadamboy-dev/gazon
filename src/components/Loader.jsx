import React, { useState } from 'react'
import img1 from "../img/photo_2023-03-19_15-12-01.jpg"
import "../css/loader.css"

const Loader = () => {
  const[load, load1] = useState(true)

  window.addEventListener("load", loader)

  function loader(){
      setTimeout(() => {
          load1(false)
      }, 3000)
  }

  return (
    <div>
        <div class={load ? "loader" : "loader1"}>
            <img src={img1} alt="" class="load" />
        </div>
    </div>
  )
}

export default Loader