import art1 from '../features/NFTS/art1.jpg';
import art2 from '../features/NFTS/art2.webp';
import music1 from '../features/NFTS/music1.png';
import music2 from '../features/NFTS/music2.gif';
import game1 from '../features/NFTS/game1.avif';
import game2 from '../features/NFTS/game2.jpg';
import utility1 from '../features/NFTS/utility1.webp';
import utility2 from '../features/NFTS/utility2.jpeg';
import fashion1 from '../features/NFTS/fashion1.png';
import fashion2 from '../features/NFTS/fashion2.png';
import Sport1 from '../features/NFTS/sport1.jpg';
import Sport2 from '../features/NFTS/sport2.png';
import bitcoin from '../features/NFTS/bitcoin.jpg'
import eth from '../features/NFTS/etheruem.webp';
import bidder1 from '../features/NFTS/bidder/bidder1.png';
import bidder2 from '../features/NFTS/bidder/bidder2.jpeg';

export const nftsData = [
    {
        id: 4,
        name: "Koecing Pemalaz",
        author: "Akatsuki",
        img: art1,
        category: 'Art',
        liked: false,
        expires: 'February 18, 2023 11:01:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'WahyuPr',
                bidderImg: bidder1,
                price: '2.4',
                verified: true,
                currency: eth,
                currencyName: 'ETH'
            }
        ]
    },
    {
        id: 5,
        name: "Kelinci Keren Abiezz",
        author: "pickpocket",
        img: art2,
        category: 'Art',
        liked: false,
        expires: 'February 19, 2023 16:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'Tama_Art',
                bidderImg: bidder2,
                price: '4.2',
                verified: true,
                currency: eth,
                currencyName: 'ETH'
            }
        ]
    },
    {
        id: 6,
        name: "CryptoKitties",
        author: "pickpocket",
        img: music1,
        category: 'Music',
        liked: false,
        expires: 'February 20, 2023 17:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'WahyuPr',
                bidderImg: bidder1,
                price: '6',
                verified: true,
                currency: eth,
                currencyName: 'ETH'
            }
        ]
    },
    {
        id: 7,
        name: "Punk Rock",
        author: "RockStar",
        img: music2,
        category: 'Music',
        liked: false,
        expires: 'February 30, 2023 17:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'Tama_Art',
                bidderImg: bidder2,
                price: '1.2',
                verified: true,
                currency: bitcoin,
                currencyName: 'BTC'
            }
        ]
    },
    {
        id: 8,
        name: "Zombie Babies",
        author: "ZombieLand",
        img: game1,
        category: 'Game',
        liked: false,
        expires: 'February 30, 2023 17:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'WahyuPr',
                bidderImg: bidder1,
                price: '1.2',
                verified: true,
                currency: bitcoin,
                currencyName: 'BTC'
            }
        ]
    },
    {
        id: 9,
        name: "Celestial Kingdom",
        author: "King of the north",
        img: game2,
        category: 'Game',
        liked: false,
        expires: 'February 21, 2023 23:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'Tama_Art',
                bidderImg: bidder2,
                price: '1.2',
                verified: true,
                currency: bitcoin,
                currencyName: 'BTC'
            }
        ]
    },
    {
        id: 10,
        name: "Ether Gnomes",
        author: "Gnomes",
        img: utility1,
        category: 'Utility',
        liked: false,
        expires: 'February 22, 2023 23:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'WahyuPr',
                bidderImg: bidder1,
                price: '4.2',
                verified: true,
                currency: eth,
                currencyName: 'ETH'
            }
        ]
    },
    {
        id: 11,
        name: "Pixel Pals",
        author: "PPals",
        img: utility2,
        category: 'Utility',
        liked: false,
        expires: 'February 23, 2023 23:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'Tama_Art',
                bidderImg: bidder2,
                price: '0.2',
                verified: true,
                currency: bitcoin,
                currencyName: 'BTC'
            }
        ]
    },
    {
        id: 12,
        name: "CryptoDragons",
        author: "Dragpto",
        img: fashion1,
        category: 'Fashion',
        liked: false,
        expires: 'February 22, 2023 23:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'WahyuPr',
                bidderImg: bidder1,
                price: '4.2',
                verified: true,
                currency: eth,
                currencyName: 'ETH'
            }
        ]
    },
    {
        id: 13,
        name: "Moon Cats",
        author: "Meow",
        img: fashion2,
        category: 'Fashion',
        liked: false,
        expires: 'February 23, 2023 23:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'Tama_Art',
                bidderImg: bidder2,
                price: '0.2',
                verified: true,
                currency: bitcoin,
                currencyName: 'BTC'
            }
        ]
    },
    {
        id: 14,
        name: "Ethereal Beings",
        author: "Beths",
        img: Sport1,
        category: 'Sport',
        liked: false,
        expires: 'February 22, 2023 23:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'WahyuPr',
                bidderImg: bidder1,
                price: '4.2',
                verified: true,
                currency: eth,
                currencyName: 'ETH'
            }
        ]
    },
    {
        id: 15,
        name: "Glitch Artifacts",
        author: "Glarts",
        img: Sport2,
        category: 'Sport',
        liked: false,
        expires: 'February 23, 2023 23:00:00',
        isExpired: false,
        bids: [
            {
                id: 1,
                bidder: 'Tama_Art',
                bidderImg: bidder2,
                price: '0.2',
                verified: true,
                currency: bitcoin,
                currencyName: 'BTC'
            }
        ]
    },

]