import React from "react";

import metamask from './assets/metamask.png'
import uniswap from './assets/uniswap.png'
import copy from './assets/copy.png'

export default function Wallets(){

    const address = [ "0xC9Fe9a2FC53c845F60f44f52b2Ee8fe856f86dF0","0xC9Fe9a2FC53c845F60f44f52b2Ee8fe856f86dF0",
        "0xC9Fe9a2FC53c845F60f44f52b2Ee8fe856f86dF0"]
     
    

    const copyAddress = (id) => {
        navigator.clipboard.writeText(address[id])
    }

    return(
        <>
        
            <div className="w-[1116px]  border-[#1F1F1F] border-4 rounded-4xl flex flex-col items-start p-8 space-y-4 mt-14">

                <div className="w-[72px] h-[72px] bg-[#2C2C2C] rounded-full p-2">
                    <img src={metamask} className="" />
                </div>

                <div className="flex flex-col items-start [font-family:'Peace_Sans'] text-[18px]">
                    <div>SYMBOL : <span className="text-[#D2FF02]">KONG</span></div>
                    <div>DECIMAL : <span className="text-[#D2FF02]">18</span></div>

                </div>
               
                <div className="text-[18px] [font-family:'Product_Sans'] text-[#B0B0B0]">Check Out the <a>Token Contract Addresses List</a> </div>

                <div className="w-full bg-[#1F1F1F]  rounded-2xl flex flex-col p-8 text-[#B0B0B0]">
                    <div className="flex justify-between [font-family:'Peace_Sans'] text-[16px]">
                        <div>CHAIN</div>
                        <div>CONTRACT ADDRESS</div>
                    </div>
                    <hr className="border-[#B0B0B0] mt-4 mb-4 rounded-2xl"></hr>

                    <div className="flex justify-between  [font-family:'Product_Sans'] text-[18px] p-1 ">
                        <div className="flex items-center">
                            <div className="h-[16px] w-[16px] bg-red-500 rounded-full mr-4"></div>
                            <div>Polygon</div>
                        </div>

                        <div className="flex items-center">
                            <div className="mr-4 text-white">0xC9Fe9a2FC53c845F60f44f52b2Ee8fe856f86dF0</div>
                            <img src={copy} className="cursor-pointer" onClick={() => copyAddress(1)}/>
                        </div>
                    </div>
                    <div className="flex justify-between   [font-family:'Product_Sans'] text-[18px] p-1 ">
                        <div className="flex items-center">
                            <div className="h-[16px] w-[16px] bg-[#2C2C2C] rounded-full mr-4"></div>
                            <div>Binance Smart Chain</div>
                        </div>

                        <div className="flex items-center">
                        <div className="mr-4 text-white">0xC9Fe9a2FC53c845F60f44f52b2Ee8fe856f86dF0</div>
                        <img src={copy} className="cursor-pointer " onClick={() => copyAddress(1)}/>
                        </div>
                    </div>
                    <div className="flex justify-between [font-family:'Product_Sans'] text-[18px] p-1 ">
                        <div className="flex items-center">
                            <div className="h-[16px] w-[16px] bg-red-500 rounded-full mr-4"></div>
                            <div>Ethereum</div>
                        </div>

                        <div className="flex items-center">
                        <div className="mr-4 text-white">0xC9Fe9a2FC53c845F60f44f52b2Ee8fe856f86dF0</div>
                        <img src={copy} className="cursor-pointer" onClick={() => copyAddress(1)}/>
                        </div>
                    </div>
                       
                    <div className=" mt-2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg z-10 transition-opacity duration-300">
          Copied!
        </div>
                        

                </div>

                <div className="w-[72px] h-[72px] bg-[#2C2C2C] rounded-full p-2">
                    <img src={uniswap} />
                </div>

                <div className="[font-family:'Peace_Sans'] text-[18px]">BUY KONG ON UNISWAP</div>
                <div className="text-[18px] [font-family:'Product_Sans'] text-[#B0B0B0]">Purchasing on <a>Uniswap</a> is a breeze, simply need some <span className="text-white">MATIC (or any token on Polygon network)</span>  and you're all set!</div>

                <button className=" bg-[#1F1F1F]"><a style={{color:'white', fontFamily:'Peace Sans'}}>BUY ON UNISWAP</a></button>

            </div>

        </>
    )
}