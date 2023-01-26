import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Campaigns',
    friendlyName: 'Campaigns',
    imgUrl: dashboard,
    link: '/all-campaigns',
  },
  {
    name: 'Create Campaign',
    friendlyName: 'Create Campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Payment Options',
    friendlyName: 'Payment Options',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'Widthdraw Funds',
    friendlyName: 'Widthdraw Funds',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'My Profile',
    friendlyName: 'My Profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'Log Out',
    friendlyName: 'Log Out',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
