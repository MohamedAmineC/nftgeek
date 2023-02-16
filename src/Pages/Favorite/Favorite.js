import { useSelector } from "react-redux";
import { selectProfile } from "../../features/ProfileSlice";
import Countdown from "../../components/Home/Countdown";
import './Favorite.css';
import { selectCreators } from "../../features/CreatorsSlice";

const Favorite = () => {
    const profile = useSelector(selectProfile);
    const creators = useSelector(selectCreators);
    const artists = profile.followedArtists;
    const favoriteArtists = [];
    for (let i=0; i<artists.length;i++){
        creators.forEach(creator => {
            if(creator.id === artists[i]){
                favoriteArtists.push(creator)
        }})
    }

    return (
        <div id="FavoritePage">
            <div id='main-content'>
                <div id="trending-nfts">
                    <h2> Your favourite NFTs</h2>
                    <ul>
                        {
                            profile.favorites.map(nft => (
                                <li key={nft.id}>
                                    <div className="nft-image" style={{
                                        backgroundImage: `url(${nft.img})`
                                    }}>            
                                    </div>
                                    <div className="nft-description">
                                        <div>
                                            <p>{nft.name}</p>
                                            <p>- {nft.author}</p>
                                        </div>
                                        <div className="nft-time-remaining">
                                            {nft.liked !== undefined ? nft.liked : <Countdown expires={nft.expires} id={nft.id} />}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div id="favorite-artists">
                    <h2> Your favourite artists</h2>
                        {
                            favoriteArtists.length === 0 ? <p>You haven't followed any artists yet</p> :
                            (<ul id="creators-list">
                                {
                                    favoriteArtists.map(creator => (
                                        <li key={creator.id}>
                                            <div>
                                                <div className='creator-image' style={{
                                                    backgroundImage: `url(${creator.avatar})`
                                                }}>
                                                    {creator.verified && <i class="bi bi-patch-check-fill"></i>}
                                                </div>
                                                <div className='creator-info'>
                                                    <p className='creator-name'>{creator.name}</p>
                                                    <p className='creator-tag'>{creator.tag}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>)           
                        }
                </div>
            </div>
        </div>
    )
}
export default Favorite;