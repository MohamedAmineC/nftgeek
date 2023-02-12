import { useSelector } from 'react-redux';
import { selectProfile } from '../../features/ProfileSlice';
import './Header.css';
import Profile from '../Profile/Profile';
import { useNavigate} from 'react-router-dom';
import { useRef } from 'react';

const Header = () => {
    const profile = useSelector(selectProfile)
    const navigate = useNavigate();
    const term = useRef('');
    const onSearchHandler = (e) => {
        e.preventDefault();
        const searchQuery = new URLSearchParams({
            q: term.current.value,
        }).toString();
        term.current.value = '';
        navigate(`/search?${searchQuery}`);
    }

    return (
        <header>
            <form id="search-bar" onSubmit={onSearchHandler}>
                <button type="submit"><i className="bi bi-search"></i></button>
                <input ref={term} type="search" placeholder="Search items, collections and accounts" required />
            </form>
            <Profile profile={profile} />
        </header>
    )
}
export default  Header;