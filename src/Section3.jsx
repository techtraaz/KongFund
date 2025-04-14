import React from "react";

export default function Section3(){
    return(
        <>
        
<div className="border-4 border-[#1F1F1F] w-[1116px] rounded-4xl mt-8 p-8 flex flex-col space-y-4 bg-black text-white">
  <div className="text-[32px] font-bold [font-family:'Peace_Sans'] ">OTHERS BET, YOU CASH IN!</div>
  <div className="text-[26px] [font-family:'Product_Sans']">So, let's go through how staking works on our platform!</div>

  {/* Grid/Flex Cards Section */}
  <div className="flex flex-wrap gap-4 justify-between">
    <div className="w-[510px] h-[320px] bg-[#1F1F1F] rounded-2xl"></div>
    <div className="w-[510px] h-[320px] bg-[#1F1F1F] rounded-2xl"></div>
    <div className="w-[510px] h-[115px] border-4 border-[#1F1F1F] rounded-2xl"></div>
    <div className="w-[510px] h-[115px] border-4 border-[#1F1F1F] rounded-2xl"></div>
  </div>

  {/* Bottom Content Boxes */}
  <div className="flex flex-col space-y-8 mt-8">
    <div className="h-[174px] w-full bg-[#1F1F1F] rounded-2xl"></div>
    <div className="h-[174px] w-full bg-[#1F1F1F] rounded-2xl"></div>
    <div className="h-[174px] w-full bg-[#1F1F1F] rounded-2xl"></div>
  </div>

    <div className="w-[365px] h-[164px] bg-[#1F1F1F] mx-auto rounded-2xl mt-4"></div>

</div>


        </>
    )
}