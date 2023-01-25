import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    friendlyName: 'Home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    friendlyName: 'Create Campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    friendlyName: 'Payment Options',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    friendlyName: 'Widthdraw Funds',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    friendlyName: 'My Profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    friendlyName: 'Log Out',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
