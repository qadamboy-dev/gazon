import React from 'react'
import Bloc1 from "../components/Bloc1"
import Bloc2 from "../components/Bloc2"
import Loader from '../components/Loader'
import Signin from "../components/Signin"
import "../css/style.css"

const Index = () => {
  return (
    <div>
        <Bloc1 />
        <Bloc2 />
        <Signin />
        <Loader />
    </div>
  )
}

export default Index