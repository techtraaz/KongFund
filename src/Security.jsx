import React from "react";

import metamask from './assets/metamask.png'


export default function Security(){
    return(
        <>
        
            <div className="w-[1116px] flex flex-col mt-14  gap-y-4">

                <div className="text-[32px] [font-family:'Peace_Sans'] font-bold">SECURITY</div>
                <div className="text-[26px] [font-family:'Product_Sans']">BitKong's Advanced Authentication Suite</div>

                <div className="flex mt-10 gap-6">
                    <div className="w-[360px] h-[100%] border-[#1F1F1F] border-4 rounded-4xl flex flex-col p-4 items-start gap-4 ">
                       <div className="w-[56px] h-[56px] bg-[#1f1f1f] rounded-2xl"></div>

                       <div className="text-[22px] [font-family:'Peace_Sans'] text-left "><span className="text-[#D2FF02]">FIDO</span> KEY AUTHENTICATION</div>
                       <div className="text-left [font-family:'Product_Sans'] text-[20px]">At BitKong, security is paramount. Enjoy seamless authentication with FIDO2 key compatibility, safeguarding your staking journey.</div>


                    </div>
                    <div className="w-[360px] h-[100%] border-[#1F1F1F] border-4 rounded-4xl flex flex-col p-4 items-start gap-4 ">
                       <div className="w-[56px] h-[56px] bg-[#1f1f1f] rounded-2xl"></div>

                       <div className="text-[22px] [font-family:'Peace_Sans'] text-left ">BIOMETRIC AUTHENTICATION
                       </div>
                       <div className="text-left [font-family:'Product_Sans'] text-[20px]">Fingerprint, facial recognition, or Apple's biometrics - your unique traits ensure a secure, smooth gaming and staking venture at BitKong.

</div>


                    </div>
                    <div className="w-[360px] h-[100%] border-[#1F1F1F] border-4 rounded-4xl flex flex-col p-4 items-start gap-4 ">
                       <div className="w-[56px] h-[56px] bg-[#1f1f1f] rounded-2xl"></div>

                       <div className="text-[22px] [font-family:'Peace_Sans'] text-left ">APP-BASED <span className="text-[#D2FF02]">2FA</span></div>
                       <div className="text-left [font-family:'Product_Sans'] text-[20px]">Setting up 2FA at BitKong is straightforward with Authy or Google Authenticator. A quick QR scan or backup code, and voila—2FA is activated.</div>


                    </div>
                    
                </div>

            </div>
        
        </>
    )
}