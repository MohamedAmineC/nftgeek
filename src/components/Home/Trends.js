import { useDispatch, useSelector } from "react-redux";
import { toggleLikeNft, selectNfts } from "../../features/nftsSlice";
import { addFavorites, removeFavorites } from "../../features/ProfileSlice";

const Trends = (props) => {
    const {category} = props;
    const dispatch = useDispatch();
    const nfts = useSelector(selectNfts);
    const filteredNfts = nfts.filter(nft => nft.category === category);
    

    return (
        <div id="trending-nfts">
            <ul>
                {
                    filteredNfts.map(nft => (
                        <li key={nft.id}>
                            <div className="nft-image" style={{
                                backgroundImage: `url(${nft.img})`
                            }}>
                                
                                {nft.liked ? (
                                    <div className="liked" onClick={() => {
                                        dispatch(toggleLikeNft(nft));
                                        dispatch(removeFavorites(nft))

                                    }}>
                                        <i class="bi bi-heart-fill"></i>
                                    </div>
                                ) : (
                                    <div className="like" onClick={(e) => {
                                        let d = new Date();
                                        d = d.toDateString();
                                        dispatch(toggleLikeNft(nft));
                                        dispatch(addFavorites({
                                           ...nft,
                                            liked: d,
                                        }))
                                    }}>
                                        <i class="bi bi-heart-fill"></i>
                                    </div>
                                ) }
                                
                            </div>
                            <div className="nft-description">
                                <div>
                                    <p>{nft.name}</p>
                                    <p>- {nft.author}</p>
                                </div>
                                <div className="nft-time-remaining">
                                    <p>{nft.timeLeft}</p>
                                </div>
                            </div>
                            <ul className="bids-list">
                                {nft.bids.map(bid => (
                                    <li key={bid.id}>
                                        <div className="bid-bidder">
                                            <div className="bidder-image" style={{
                                                backgroundImage: `url(${bid.bidderImg})`
                                            }}>
                                                {bid.verified && <i class="bi bi-patch-check-fill"></i>}
                                            </div>
                                            <div className="bidder-info">
                                                <p>Creator</p>
                                                <p>{bid.bidder}</p>
                                            </div>
                                        </div>
                                        <div className="bid-price">
                                            <div className="bid-image" style={{
                                                backgroundImage: `url(${bid.currency})`
                                            }}>

                                            </div>
                                            <div className="bid-pricing">
                                                <p>Current Bid</p>
                                                <p>{bid.price} {bid.currencyName}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <p>Place a Bid</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Trends;