import { Link, NavLink } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <nav>
            <h1>NFTGeek</h1>
            <ul data-header="marketplace">
                <NavLink to="/">
                    <li>
                        <div><i className="bi bi-house-door"></i></div>
                        <p>NFT Store</p>
                    </li>
                </NavLink>
                <NavLink to="/active">
                    <li>
                        <div><i className="bi bi-chat-square-dots"></i></div>
                        <p>Active Bids</p>
                    </li>
                </NavLink>
                <NavLink to="/favorites">
                    <li>
                        <div><i className="bi bi-balloon-heart"></i></div>
                        <p>Favorites</p>
                    </li>
                </NavLink>
            </ul>
            <ul data-header="account">
                <NavLink to="/collection">
                        <li>
                            <div><i className="bi bi-collection"></i></div>
                            <p>My Collection</p>
                        </li>
                </NavLink>
                <NavLink to="/wallet">
                    <li>
                        <div><i className="bi bi-wallet2"></i></div>
                        <p>Wallet</p>
                    </li>
                </NavLink>
                <NavLink to="/history">
                    <li>
                        <div><i className="bi bi-clock-history"></i></div>
                        <p>History</p>
                    </li>
                </NavLink>
                <NavLink to="/settings">
                    <li>
                        <div><i className="bi bi-gear"></i></div>
                        <p>Settings</p>
                    </li>
                </NavLink>
            </ul>
            <div id="guide">
                <p>Important guide in NFT Transactions</p>
                <div><Link to="/">Read More</Link></div>
            </div>
        </nav>
    )
}
export default NavMenu;