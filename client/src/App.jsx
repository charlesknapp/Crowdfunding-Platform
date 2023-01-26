import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer, Sidebar, Navbar } from './components';
import { Landing, CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden tablet-s:mr-6 mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 4k:max-w-[96%] laptop-l:max-w-[92%] laptop:max-w-[90%] tablet-s:max-w-[86%] tablet:max-w-[86%] max-w-[98%] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
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