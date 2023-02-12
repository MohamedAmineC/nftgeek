import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCreators, toggleCreator } from '../../features/CreatorsSlice';
import { followArtist, unfollowArtist } from '../../features/ProfileSlice';
import './SideBar.css';

const SideBar = () => {
    const creators = useSelector(selectCreators);
    const dispatch = useDispatch();
    console.log(creators);
    return (
        <div id='side-bar'>
            <div id='favourites'>
                <h2>Recently Favourites</h2>
                <Link to="/favorites">See all</Link>
            </div>
            <ul>

            </ul>
                <h2>Top Creator</h2>
            <ul id="creators-list">
                {
                    creators.map(creator => (
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
                            {creator.following ? (<div className='following' onClick={() => {
                                dispatch(toggleCreator(creator.id));
                                dispatch(unfollowArtist(creator.id))
                            }}>
                                <p>following</p>
                            </div>) : (
                                <div className='follow' onClick={() =>{
                                    dispatch(toggleCreator(creator.id));
                                    dispatch(followArtist(creator.id))
                                }}>
                                    <p>follow</p>
                                </div>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
} 
export default SideBar;