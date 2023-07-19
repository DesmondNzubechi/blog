import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';
import {IoMdArrowDropdown} from 'react-icons/io';


export const Navlink = [
    {link: '/', linkName: 'Home'},
    {link: '/blog', linkName: 'Blog'},
    {link: '/about', linkName: 'About'},
    {link: '/contact', linkName: 'Contact'},
    {link: '/login', linkName: 'Login'},
]


export const MobileHeader = () => {
const [icons, setIcons] = useState({
    hideicon: false,
    showIcon: true,
});
const [sideLink, setSideLink] = useState('left-[-1000px]');


  return(
    <div className="flex md:hidden z-[10] flex-row text-slate-50 fixed top-0 w-full left-0 right-0  px-[20px] py-[10px] justify-between bg-black">
        <div>
            <Link to='/' className=" relative z-[5] font-poppins uppercase text-[30px]  max-w-[70px] rounded-[50px]"><h1>Blogging</h1></Link>
        </div>
                    <ul className={`flex gap-5 fixed font-fonty top-0 bottom-0 w-[100%] text-center bg-black ${sideLink} transition delay-150 duration-1000 ease-in-out pt-[100px] px-[20px] flex-col`}>
                        {
                         Navlink.map(links => {
                return(
                        <li  onClick={() => {
                            setIcons({
                                hideicon: false,
                                showIcon: true,
                            });
                            setSideLink('left-[-1000px]')
                        }} >
                            <NavLink  to={links.link} style={({isActive}) => {
return isActive ? {fontStyle: 'underline', borderBottom : '2px solid white' , fontWeight: 'bold'} : {}
}} className="xl:text-[17px]  font-poppins text-white  text-[25px] " >
                             {links.linkName}
                            </NavLink>
                        </li> )})  }
                        <li>
                          <Link to='/get started' className=" border p-2 hover:bg-slate-200 rounded-[2px] hover:text-slate-900 text-[22px] font-poppins " >Get Started</Link>
                        </li>
                        </ul>
        <div className="flex flex-row items-center">
        { icons.showIcon &&  <FaBars onClick={() => {
            setIcons({
                hideicon: true,
                showIcon: false,
            });
            setSideLink('left-0')
        }} className="text-[30px] text-slate-50 "/>}
       { icons.hideicon &&   <HiOutlineXMark onClick={() => {
            setIcons({
                hideicon: false,
                showIcon: true,
            });
            setSideLink('left-[-1000px]')
        }} className="text-[30px] relative  text-slate-50 "/>}
        </div>
    </div>
  )
}