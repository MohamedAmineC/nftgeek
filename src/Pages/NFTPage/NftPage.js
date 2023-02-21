import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NFT from "../../components/NFT/NFT";
import SideBar from "../../components/SideBar/SideBar";
import { selectNfts } from "../../features/nftsSlice";
import './NftPage.css';

const NftPage = () => {
    let {id} = useParams();
    id = Number(id);
    const nfts = useSelector(selectNfts);
    const nft = nfts.filter(nft => nft.id === id)[0];
    return (
        <div id="nftPage">
            <div id="main-content">
                <div className="nft">
                    <NFT nft={nft} />
                </div>
            </div>
            <SideBar />
        </div>
    )
}
export default NftPage;
