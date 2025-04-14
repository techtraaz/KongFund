import React from "react";

import chinese from './assets/chinese.png'

export default function Section4(){
    return(
        <>
        
            <div className="w-[1116px] flex flex-col mt-14 gap-4">

                <div className="text-[32px] font-bold [font-family:'Peace_Sans']">WHERE TO STAKE?</div>
                <div className="text-[26px] font-bold [font-family:'Product_Sans']">Stake on 3 gaming platforms with advanced safety wallets</div>

                <div className="flex gap-8 mb-14">
                    <div className="w-[360px] h-[315px] bg-[#1F1F1F] rounded-4xl">
                        <img src={chinese} className="w-[42px] h-[42px]" />
                    </div>
                    <div className="w-[360px] h-[315px] bg-[#1F1F1F] rounded-4xl"></div>
                    <div className="w-[360px] h-[315px] bg-[#1F1F1F] rounded-4xl"></div>
                </div>

                <div className="text-[32px] font-bold [font-family:'Peace_Sans']">Web 3? We've got you covered!</div>
                <div className="text-[26px] font-bold [font-family:'Product_Sans']">Easily purchase, exchange, and hold KONG in your web3 wallets</div>

            </div>

        </>
    )
}