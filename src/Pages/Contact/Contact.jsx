import React from "react";
import { EditContact } from "./EditContact";

export const ContactUs = () => {
    return(
        <div className=" px-[40px]  font-poppins">
            <div className="flex md:flex-row md:items-center flex-col gap-[40px] justify-around pb-[100px] pt-[200px]  ">
                <div>
                    <h1 className="text-[30px] font-bold my-[20px] ">Get in touch with us</h1>
                    <p className="max-w-[800px] md:text-[20px] ">If you have any questions or comments, please contact us via email or phone. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="fle flex-col gap-2">
                    <span>
                        <h1 className="text-[25px] font-semibold ">Phone</h1>
                    <a className="text-slate-700" href="tel:+2347560293862">+2347560293862</a>
                    </span>
                   <span>
                    <h1 className="text-[25px]  font-semibold  ">Email</h1>
                     <a className="text-slate-700" href="mailto:someone@gmail.com">Someone@gmail.com</a>
                   </span>
                </div>
            </div>
        </div>
    )
}