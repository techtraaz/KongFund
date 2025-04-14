import React, { useState } from "react";

import Plus from './assets/plus.png'
import Minus from './assets/Minus.png'

export default function FAQ({faq,answer}){

    const [clicked,SetClicked] = useState(false)

    const showAnswer = () => {
        SetClicked(!clicked)
    }

    return(
        <>

            <div className=" md:flex flex-col md:w-full text-white  items-start bg-[#2C2C2C] mb-2 rounded-2xl cursor-pointer p-2" onClick={showAnswer}>
                <div className="flex items-center">
                    {clicked ? <img src={Minus} className="mr-4 h-[40px] w-[40px]" /> : <img src={Plus} className="mr-4 h-[40px] w-[40px]" />}
                    <div className="text-[20px] font-bold [font-family:'Peace_Sans']">{faq}</div>
                </div>
                {clicked && <div className="text-[18px] font-bold ml-[58px] [font-family:'Product_Sans'] text-left">{answer}</div>}
            </div>
            
                
        </>
    )
}