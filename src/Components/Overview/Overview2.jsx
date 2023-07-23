import React from "react";
import HeroImg from '../../assets/images/heroImg.avif';
import { Link } from "react-router-dom";

export const Overview2 = () => {


    return(
        <div className="  py-[50px] min-h-[100vh] ">
<div className="flex flex-col font-poppins md:flex-row-reverse justify-around items-center gap-5">
<div data-aos='fade-up' data-aos-duration='1000' className="  flex flex-col gap-5 ">
        <img src={HeroImg} alt="" className="rounded" srcSet="" />
       </div>
  <div data-aos='fade-up' data-aos-duration='1000' className="flex-start flex flex-col gap-4">
    <h1 className="text-slate-900  md:text-[45px] leading-[45px] md:leading-[50px] text-[40px] capitalize  ">Improve your relationship with others</h1>
    <div className="text-slate-300 font-fonty max-w-[700px] flex flex-col gap-2 ">
    <p className="md:text-[20px] font-poppins text-slate-800 text-[18px] ">Be your best self, alone and with others, and cultivate deep and lasting friendships and relationships. </p>
  </div>
  <Link to='/get started' className="text-start bg-slate-900 text-slate-50 text-[30px] rounded-[1px] hover:bg-slate-800 w-fit p-3">Learn more</Link>
  </div>
</div>
        </div>
    )
}