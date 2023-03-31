import { BrowserRouter as Router, Route, Routes, useNavigate}
 from "react-router-dom";
import React from "react"
import Index from "./Pages/Index"
import Admin from "./Pages/Admin";
import Registered from "./Pages/Registered";
import Last from "./Pages/Last";
import Signup from "./Pages/Signup";
import Signupuser from "./Pages/Signupuser";

const App = () => {
  return(
    <div>
        <Routes>
            <Route path="/" element={<Signupuser />} />
            <Route path="/index" element={<Index />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route path="r" element={<Registered />} />
            <Route path="rl" element={<Last />} />
            <Route path="signup" element={<Signup />} />
        </Routes>
    </div>
  )
}

export default App
