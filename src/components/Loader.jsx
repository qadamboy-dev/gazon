import React, { useState } from 'react'
import img1 from "../img/photo_2023-03-19_15-12-01.jpg"
import "../css/loader.css"

const Loader = () => {
  const[load, load1] = useState(true)

  window.addEventListener("load", loader)

  var date = new Date()
  var second = date.getSeconds()
  var min = second + 1 - second

  function loader(){
      setTimeout(() => {
          load1(false)
      }, min)
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