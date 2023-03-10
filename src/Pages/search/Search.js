import { Link, useLocation } from 'react-router-dom';
import { selectNfts } from '../../features/nftsSlice';
import './Search.css';
import { useSelector } from 'react-redux';
import NFT from '../../components/NFT/NFT';
import SideBar from '../../components/SideBar/SideBar';
import Trending from '../../components/Home/Trending';

const Search = () => {
    const {search} = useLocation();
    const searchTerm = new URLSearchParams(search);
    const term = searchTerm.get('q');
    const nfts = useSelector(selectNfts);
    const filteredNfts = nfts.filter(nft => nft.name.toLowerCase().includes(term));
    
    return(
        <div id="searchpage">
            <div id='main-content'>
                <div id="searchPage">
                    <h2>your search for {term}</h2>
                    {
                        filteredNfts.length === 0 ? <p>No results found</p> :
                        (<ul>
                            {
                                filteredNfts.map(nft => {
                                    if (nft.isExpired === true) return null;
                                        else {
                                            return (
                                                (
                                                    <li key={nft.id}>
                                                            <Link to={`/nft/${nft.id}`}>
                                                                <NFT nft={nft} />
                                                            </Link>
                                                    </li>
                                                )
                                            )
                                        }
                                })
                            }
                        </ul>) 
                    }
                </div>
                <Trending />
            </div>
            <SideBar />
        </div>
        
    )
}
export default Search;