import React from "react";

import darrow from './assets/down_arrow.png'

export default function Landing() {
    return (
        <>
            {/* landing contents */}
            <div className="flex flex-col items-center justify-evenly h-screen bg-black text-white">
                {/* top text */}
                <div>
                    <div className="text-[25px] font-bold [font-family:'Peace_Sans',sans-serif]">TEAM UP WITH <span className="text-[#D2FF02]">KONG</span></div>
                    <div className="text-[45px] font-bold [font-family:'Peace_Sans',sans-serif]">GET YOUR SLICE OF THE CRYPTO GAMING PIE</div>
                </div>
                

                {/* beginning of buying form */}
                <div className="w-[465px] h-[415px] border-4 border-[#1F1F1F] rounded-4xl items-center flex flex-col py-4 justify-between">

                    <div className="w-[425px] h-[75px] bg-[#1F1F1F] rounded-2xl hover:border hover:border-[#965EF6]"></div>
                    <div className="w-[425px] h-[75px] bg-[#1F1F1F] rounded-2xl hover:border hover:border-[#965EF6]"></div>
                    <div className="w-[425px] h-[75px] bg-[#1F1F1F] rounded-2xl hover:border hover:border-[#965EF6]"></div>

                    <div className="w-[425px] h-[55px] bg-[#D2FF02] rounded-2xl text-black flex items-center justify-center font-bold cursor-pointer">BUY</div>

                    <div className="w-[425px] h-[25px] text-white flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                            <span className="text-[14px]">1 USD =</span>
                            <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                            <span className="text-[14px]">100 KONG</span>
                        </div>
                    </div>
                </div>
                {/* end of buying form */}

                {/* start of stats */}
                <div className="p-2 border-gray-700 flex justify-between w-full max-w-4xl mt-6">
                    {[
                        { label: "Total Supply", value: "100M" , color:"#D2FF02"},
                        { label: "Circulation", value: "100M" , color:"#D2FF02"},
                        { label: "Market Cap", value: "10M" , color:"#965EF6"},
                        { label: "Price", value: "0.01" , color:"#965EF6"}
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="flex items-center gap-2">
                                <div className=" w-[40px] h-[40px] rounded-full" style={{backgroundColor: stat.color}}></div>
                                <div style={{ color: stat.color }} className="text-[34px] font-bold [font-family:'Peace_Sans',sans-serif]">
                                {stat.value}
                                 </div>
                            </div>
                            <h2 className="text-xl [font-family:'Product_Sans',sans-serif]">{stat.label}</h2>
                        </div>
                    ))}
                </div>

                <img src={darrow}className="w-8 h-8 animate-bounce"/>

            </div>

            {/* Extra content to check scroll */}
           
        </>
    );
}
