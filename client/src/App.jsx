import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Sidebar, Navbar } from './components';
import { Login, Landing, CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="transition-[0.2s] relative sm:-8 px-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="my-auto sm:flex hidden tablet-s:mr-6 mr-4 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-h-[100%] mobile:max-w-[100%] max-w-[90%] m-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/all-campaigns" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App