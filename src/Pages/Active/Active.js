import { useSelector } from "react-redux";
import { selectNfts } from "../../features/nftsSlice";
import NFT from "../../components/NFT/NFT";
import './Active.css';
import SideBar from "../../components/SideBar/SideBar";

const Active =() => {
    const nfts = useSelector(selectNfts);
    const activeNfts = nfts.filter(nft => nft.isExpired === false) 
    if(activeNfts.length === 0 ){
        return <div>No Active NFTs</div>
    }
    return (
        <div id="activePage">
            <div id='main-content'>
                <div id="trending-nfts">
                    <ul>
                        {
                            activeNfts.map(nft => {
                                if (nft.isExpired === true) return null;
                                else {
                                    return (
                                        (
                                            <li key={nft.id}>
                                                <NFT nft={nft} />
                                            </li>
                                        )
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
            <SideBar />
        </div>
        
    )
}
export default Active;