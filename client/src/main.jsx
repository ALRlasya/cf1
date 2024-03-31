import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const customChain = {
  chainId: 11155111,
  rpc: ["https://sepolia.hashio.io/api"],
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia",
    symbol: "SEPOL",
  },
  shortName: "SEPOL", 
  slug: "SEPOL", 
  testnet: true,
  chain: "Sepolia Testnet", 
  name: "Sepolia Testnet",
};
root.render(
  <ThirdwebProvider activeChain={customChainSepolia} clientId="94ee5b973ae3c4ed3c2c43f5e77dc031" desiredChainId={ChainId.Sepolia}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)



