import React from "react";

import ss from './assets/ss.png'

export default function Bento(){
    return(
        <>
        
            <div className="flex flex-col items-center justify-evenly  bg-black text-black gap-6">

                <div className="flex gap-6">
                   
                    <div className="bg-[#D2FF02] w-[745px] h-[400px] rounded-4xl p-8 ">
                        <div className="[font-family:'Peace_Sans'] text-left text-[30px]">PARTNER UP!</div>
                        <div className="[font-family:'Product_Sans'] text-left text-[20px] ">Join forces with BitKong, Luckydice, and Simpledice casinos. With KONG tokens, earn a share from the house edge through staking.</div>
                        <img src={ss} />
                    </div>
                    <div className="bg-[#965EF6] w-[347px] h-[400px] rounded-4xl"></div>
                </div>

                <div className="flex gap-6">
                    <div className="bg-[#1F1F1F] w-[347px] h-[400px] rounded-4xl"></div>
                    <div className="bg-[#1F1F1F] w-[745px] h-[400px] rounded-4xl"></div>
                </div>

            </div>

           
        </>
    )
}