import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './index.css'


const Nav = () => {
    const [active, setActive] = useState('#')
  return (
    <nav>
<a href='#' onClick={()=>{setActive('#')}} className={active === '#'?'active':''}><AiOutlineHome/></a>
<a href='#about' onClick={()=>{setActive('#about')}} className={active === '#about'?'active':''}><AiOutlineUser/></a>
<a href='#experiences' onClick={()=>{setActive('#experiences')}} className={active === '#experiences'?'active':''}><BiBook/></a>
<a href='#services' onClick={()=>{setActive('#services')}} className={active === '#services'?'active':''}><RiServiceLine/></a>
<a href='#contacts' onClick={()=>{setActive('#contacts')}} className={active === '#contacts'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav