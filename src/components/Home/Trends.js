import { useSelector } from "react-redux";
import { selectNfts } from "../../features/nftsSlice";
import NFT from "../NFT/NFT";

const Trends = ({category}) => {
    const nfts = useSelector(selectNfts);
    const filteredNfts = nfts.filter(nft => nft.category === category);
    

    return (
        <div id="trending-nfts">
            <ul>
                {
                    filteredNfts.map(nft => {
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
    )
}
export default Trends;