import { useSelector } from "react-redux";
import { selectNfts } from "../../features/nftsSlice";

const Trends = (props) => {
    const {category} = props;
    const nfts = useSelector(selectNfts);
    const filteredNfts = nfts.filter(nft => nft.category === category);
    console.log(filteredNfts);

    return (
        <div id="trending-nfts">
            <ul>
                {
                    filteredNfts.map(nft => (
                        <li key={nft.id}>
                            <div className="nft-image" style={{
                                backgroundImage: `url(${nft.image})`
                            }}>
                                <div className={nft.liked ? 'liked' : 'like'}>
                                    <i class="bi bi-heart-fill"></i>
                                </div>
                            </div>
                            <div className="nft-description">
                                <div>
                                    <p>{nft.name}</p>
                                    <p>- {nft.creator}</p>
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