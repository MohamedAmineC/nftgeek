import './Profile.css';
import { resetNotifications } from '../../features/ProfileSlice';
import { useDispatch } from 'react-redux';

const Profile = (props) => {
    const {profile} = props;
    const dispatch = useDispatch();
    return(
        <div id="settings">
                <div id="notifications" onClick={() => dispatch(resetNotifications())}>
                    {profile.notifications > 0 ? (
                    <div>
                    <i class="bi bi-bell" style={{
                        color: 'red',
                    }}></i>
                    <div>
                        <p>{profile.notifications}</p>
                    </div>
                    </div>
                    
                    ) : <i class="bi bi-bell"></i>}
                </div>
                <div id="profile">
                    <div id="profile-image" style={{
                        backgroundImage: `url(${profile.profile})`
                    }}></div>
                    <div id="profile-name">{profile.name}</div>
                </div>
        </div>
    )
}
export default Profile;