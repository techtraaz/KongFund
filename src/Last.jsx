import React from "react";

import FAQ from "./FAQ";

export default function Last(){

    const faqs = [
        {
            "question": "WHAT IS KONG.FUN AND WHAT CAN I DO HERE?",
            "answer": "KONG.FUN is a decentralized gaming and staking platform where users can play blockchain-based games, stake KONG tokens, and earn rewards. It’s built for transparency, fun, and community participation."
          },
          {
            "question": "WHAT'S KONG ALL ABOUT?",
            "answer": "KONG is the native token of the KONG.FUN ecosystem, used for staking, playing games, and earning rewards. It powers the platform’s economy and gives users access to exclusive benefits."
          },
          {
            "question": "WHAT'S THE DEAL WITH THE HOUSE EDGE?",
            "answer": "The house edge is a small percentage advantage the platform retains on games to ensure sustainability and ongoing rewards for stakers and the ecosystem. It is clearly stated and built into every game."
          },
          {
            "question": "HOW DO I BUY KONG TOKENS ON KONG.FUN?",
            "answer": "You can buy KONG tokens by connecting your wallet (like MetaMask) to the KONG.FUN site and swapping supported cryptocurrencies (e.g., ETH, USDT) via integrated decentralized exchanges."
          },
          {
            "question": "HOW DO I STAKE MY KONG TOKEN?",
            "answer": "To stake your KONG tokens, connect your wallet to KONG.FUN, navigate to the staking section, choose the amount to stake, and confirm the transaction. Your tokens will then begin earning rewards."
          },
          {
            "question": "WHAT ARE THE BENEFITS OF STAKING KONG TOKEN?",
            "answer": "By staking KONG tokens, you earn a share of platform profits, receive exclusive rewards, and support the ecosystem. Stakers may also gain governance rights and early access to new features."
          },
          {
            "question": "HOW ARE THE REWARDS DISTRIBUTED ON BITKONG?",
            "answer": "Rewards on BitKong are distributed based on the amount of KONG staked and the platform’s performance. A portion of the house edge is redistributed to stakers as passive income."
          },
          {
            "question": "IS BITKONG A SECURE PLATFORM?",
            "answer": "Yes, BitKong is built with blockchain transparency and uses audited smart contracts to ensure secure transactions. Always use proper wallet security when interacting with any Web3 platform."
          },
          {
            "question": "CAN I STAKE KONG TOKENS WITHOUT PLAYING GAMES?",
            "answer": "Absolutely. You can stake KONG tokens to earn rewards without participating in any games. Staking is independent of gameplay activity."
          },
          {
            "question": "HOW DO I GET STARTED ON BITKONG?",
            "answer": "To get started, visit BitKong, connect your crypto wallet, buy or deposit KONG tokens, and choose whether to play games or stake your tokens. A user-friendly interface guides you through each step."
          },
          {
            "question": "WHO CAN I CONTACT FOR SUPPORT?",
            "answer": "For support, you can reach out via the official KONG.FUN Discord, Telegram channel, or email the support team directly through the website's contact section."
          }
    ]

    return(
        <>
        
            <div className="w-[1116px] flex flex-col gap-y-6 mt-14">
                <div className="text-[32px] [font-family:'Peace_Sans'] font-bold">FAQ</div>

                <div className="w-full bg-[#1F1F1F] rounded-4xl p-4 pt-8">
                    {faqs.map((faq,index) => {
                        return <FAQ key={index} faq={faq.question} answer={faq.answer} />
                        console.log('fdfdf')
                    })}
                   
                </div>

                <div className="w-[500px] h-[200px] bg-[#1F1F1F] mx-auto rounded-4xl"></div>
                <div className="w-full h-[300px] bg-[#1F1F1F] rounded-4xl"></div>
                <div className="w-full h-[200px] bg-[#1F1F1F] rounded-4xl"></div>
            </div>

        </>
    )
}