'use client';
import * as React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Assets } from '../../public/assets/Assets';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
// import { useLocale } from 'next-intl';
// import { FormattedMessage } from 'react-intl';

const Header = () => {

  // State for Translate Menu
  const [translateAnchorEl, setTranslateAnchorEl] = React.useState(null);
  const translateMenuOpen = Boolean(translateAnchorEl);

  // State for Profile Menu
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const profileMenuOpen = Boolean(profileAnchorEl);

  const router = useRouter();
  const { pathname } = router;
  // Handlers for Translate Menu
  const handleTranslateClick = (event) => {
    setTranslateAnchorEl(event.currentTarget);
  };

  const handleEnTranslateClose = () => {
    setTranslateAnchorEl(null);
    router.push(pathname, pathname, { locale: 'en' });
  };

  const handleTaTranslateClose = () => {
    setTranslateAnchorEl(null);
    router.push(pathname, pathname, { locale: 'ta' });

  };

  // Handlers for Profile Menu
  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleUserLogin = () => {
    setProfileAnchorEl(null);
    router.push('/Login/userLogin');
  }

  const handleFarmerLogin = () => {
    setProfileAnchorEl(null);
    router.push('/Login/farmerLogin');
  }

  return (
    <header className="flex justify-between items-center p-4 bg-green-600 shadow-md">
      <div className="flex items-center">
        <Image
          src={Assets.Agriconnect_logo}
          alt="Agriconnect Logo"
          width={100}
          height={100}
        />
      </div>

      <div className="w-full max-w-lg mx-4">
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition duration-300">
          {/* <FormattedMessage id="search" defaultMessage="search" /> */}
          Search
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-white">
        <div className="flex items-center cursor-pointer">
          <Image
            src={Assets.languageIcon}
            alt="Language Icon"
            width={24}
            height={24}
            className="hover:opacity-80 transition duration-300"
          />
          <Button
            id="translate-button"
            aria-controls={translateMenuOpen ? 'translate-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={translateMenuOpen ? 'true' : undefined}
            onClick={handleTranslateClick}
            className="text-white normal-case"
          >
            <p className="ml-2 hover:underline transition duration-300">
              Translate
            </p>
          </Button>

          <Menu
            id="translate-menu"
            anchorEl={translateAnchorEl}
            open={translateMenuOpen}
            onClose={handleEnTranslateClose}
            MenuListProps={{
              'aria-labelledby': 'translate-button',
            }}
          >
            <MenuItem onClick={handleEnTranslateClose}>English</MenuItem>
            <MenuItem onClick={handleTaTranslateClose}>Tamil</MenuItem>
          </Menu>

        </div>

        <div className="flex items-center cursor-pointer">
          <Image
            src={Assets.Cart}
            alt="Cart"
            width={24}
            height={24}
            className="hover:opacity-80 transition duration-300"
          />
          <p className="ml-2 hover:underline transition duration-300">
            Cart
          </p>
        </div>

        <div className="flex items-center cursor-pointer">
          <Image
            src={Assets.profile}
            alt="Profile"
            width={24}
            height={24}
            className="rounded-full hover:opacity-80 transition duration-300"
          />

          <Button
            id="profile-button"
            aria-controls={profileMenuOpen ? 'profile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={profileMenuOpen ? 'true' : undefined}
            onClick={handleProfileClick}
            className="text-white normal-case"
          >
            <p className="ml-2 hover:underline transition duration-300">
              Profile
            </p>
          </Button>

          <Menu
            id="profile-menu"
            anchorEl={profileAnchorEl}
            open={profileMenuOpen}
            onClose={handleProfileClose}
            MenuListProps={{
              'aria-labelledby': 'profile-button',
            }}
          >
            <MenuItem onClick={handleUserLogin}>User's Login</MenuItem>
            <MenuItem onClick={handleFarmerLogin}>Farmer's Login</MenuItem>
            <MenuItem onClick={handleProfileClose}>Orders</MenuItem>
          </Menu>
        </div>

      </div>
    </header>
  );
};

export default Header;
