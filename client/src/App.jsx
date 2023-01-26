import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Sidebar, Navbar } from './components';
import { Login, Landing, CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 px-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden tablet-s:mr-6 mr-4 relative">
        <Sidebar />
      </div>

      <div className="flex-1 mobile:max-w-[100%] sm:max-w-[86%%] md:max-w-[86%] lg:max-w-[90%] mx-auto">
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