import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import './Home.css';
import Trending from './Trending';

const Home = () => {
    return(
        <div id="homepage">
            <div id='main-content'>
                <div id='hero'>
                    <div id='hero-content'>
                        <h2>Let's Create Your Own NFT</h2>
                        <div>
                            <Link to="/active"> Start Sale</Link>
                            <Link to="https://www.google.fr/" target="_blank"> Learn More</Link>
                        </div>
                    </div>
                    <div id='hero-image'>

                    </div>
                </div>
                <Trending />
            </div>
            <SideBar />
        </div>
    )
}
export default Home;