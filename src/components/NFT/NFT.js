import { useDispatch } from "react-redux";
import { toggleLikeNft } from "../../features/nftsSlice";
import { addFavorites, removeFavorites } from "../../features/ProfileSlice";
import Countdown from "../Home/Countdown";

const NFT = ({nft}) => {
    const dispatch = useDispatch();
    return (
        <>
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
                    const currentDate = new Date();
                    const options = { weekday: 'short', day: 'numeric', month: 'short' };
                    const formattedDate = currentDate.toLocaleDateString('en-US', options);
                    dispatch(toggleLikeNft(nft));
                    dispatch(addFavorites({
                       ...nft,
                        liked: formattedDate,
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
                <Countdown expires={nft.expires} id={nft.id} />
            </div>
        </div>
            {nft.bids.length > 0 && nft.bids.map(bid => (
            <>
            <ul className="bids-list">
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
        </ul>
        <div>
            <p>Place a Bid</p>
        </div>
        </>
            ))}
        </>
    )
}
export default NFT;