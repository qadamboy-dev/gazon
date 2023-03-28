import React from 'react'
import "../css/admin.css"
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Admin = () => {
  return (
    <div>
        <div class="bloc11">
        <div class="navbar1">
            <div class="sm-navbar1">
                <h1 class="logo">Gozo`n.<span>uz</span></h1>
                <div class="text1">
                    <span>Aziz</span>
                    <Icon icon="gg:profile" className='svg'/>
                </div>
            </div>
        </div>
        <div class="but">
            <Link to="/r">
                <button class="btn">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>Registered</span>
                </button>
            </Link>
           <Link to="/rl">
                <button class="btn">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>Last Registered</span>
                </button>
            </Link> 
        </div>
        </div>
    </div>
  )
}

export default Admin