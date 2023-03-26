import React from 'react'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id: 1,
        tagName: "DISCUSSION",
        tagDesc: "Discussions in the crypto space typically revolve around topics such as market trends, price volatility, technological developments, regulatory changes, and adoption rates. These discussions involve a wide range of stakeholders including investors, traders, developers, policymakers, and enthusiasts, and often take place in online forums, social media platforms, and the impact of central bank digital currencies on the traditional financial system"
    },{
        id: 2,
        tagName: "ANALYSIS",
        tagDesc: "Analysis in crypto refers to the process of using various techniques and tools to study the market trends, price movements, and other relevant factors that can affect the value of cryptocurrencies. This analysis can be conducted through technical analysis, fundamental analysis, or a combination of both, and can help investors make informed decisions about buying, selling, or holding crypto assets."
    },{
        id: 3,
        tagName: "MEME",
        tagDesc: "Meme coins are cryptocurrencies that are created as a joke or a meme, often featuring popular internet memes or celebrities. They typically have no real-world utility or value, and their prices are driven by social media hype and speculation. Examples include Dogecoin, Shiba Inu, and SafeMoon."
    },{
        id: 4,
        tagName: "ADVICE",
        tagDesc: "Advice is guidance or recommendations given to someone to help them make a decision or improve a situation. It is based on the experience, knowledge, and wisdom of the person giving the advice. Effective advice should be relevant, practical, and considerate of the recipient's circumstances and perspective."
    },{
        id: 5,
        tagName: "MOONSHOT",
        tagDesc: "Moonshot in crypto refers to a dramatic increase in the value of a cryptocurrency, often resulting in exponential gains for investors. It's a term used to describe a coin that has the potential to skyrocket in value, reaching levels that seem unimaginable at the moment. However, investing in such coins can be risky as they are often speculative and subject to market volatility."
    },{
        id: 6,
        tagName: "ETH",
        tagDesc: "ETH tokens are digital assets built on the Ethereum blockchain. They can represent anything of value, such as currency, property, or shares in a company. ETH tokens can be bought, sold, and traded like other cryptocurrencies, and they are commonly used for initial coin offerings (ICOs) and decentralized applications (dApps) on the Ethereum network."
    },{
        id: 7,
        tagName: "BSC",
        tagDesc: "BSC tokens are digital assets that are built on the Binance Smart Chain (BSC) blockchain. They can be used for various purposes such as trading, staking, or as a medium of exchange for goods and services on the BSC network. BSC tokens are often cheaper and faster to transact compared to other blockchain networks, which makes them attractive to users and developers alike. Some popular BSC tokens include Binance Coin (BNB), PancakeSwap (CAKE)."
    },{
        id: 8,
        tagName: "ARB",
        tagDesc: "ARB tokens are a type of cryptocurrency used as a medium of exchange on the Arbitrum network, which is a Layer 2 scaling solution for the Ethereum blockchain. The tokens are used to pay for transaction fees and other network services on the Arbitrum network. ARB tokens are ERC-20 compatible, meaning they can be stored and traded on any wallet or exchange that supports the Ethereum blockchain."
    },{
        id: 9,
        tagName: "NFTS",
        tagDesc: "NFTs, or non-fungible tokens, are unique digital assets that use blockchain technology to verify their ownership and authenticity. They can represent anything from artwork and music to videos and virtual real estate, and are bought and sold like traditional collectibles."
    },{
        id: 10,
        tagName: "DEFI",
        tagDesc: "DeFi stands for Decentralized Finance, which refers to a system of financial applications built on blockchain technology that operate independently of traditional financial intermediaries such as banks. It allows for peer-to-peer transactions and lending without the need for middlemen, providing users with more control over their finances and greater access to financial services."
    },{
        id: 11,
        tagName: "DAPP",
        tagDesc: "DApp stands for decentralized application, which is a computer program that operates on a decentralized network such as a blockchain. DApps are designed to be transparent, secure, and autonomous, with no central authority controlling the network. They can be used for various purposes, including finance, gaming, social media, and more."
    }]
    
  return (
    <div className='home-container-1'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your post with other, similar posts.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and comment on your posts.</p>
        <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default Tags