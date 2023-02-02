import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// Contract association, network restriction
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
// Bring in the brains of the operation
import { StateContextProvider } from './context';
import App from './App';
// Main CSS import
import './index.css';
import 'atropos/css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // This is where the chain network is selected
  <ThirdwebProvider desiredChainId={ChainId.Goerli}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)