import React from 'react';
import { useDispatch } from 'react-redux';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();

    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title = "Home"/>
                <HeaderOption Icon={SuperVisorAccountIcon} title = "My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title = "Jobs"/>
                <HeaderOption Icon={ChatIcon} title = "Messaging"/>
                <HeaderOption Icon={NotificationIcon} title = "Notifications"/>
                <HeaderOption avatar={true} title= "My Account" onClick={logOutOfApp}/>
            </div>
        </div>
    )
}

export default Header;
