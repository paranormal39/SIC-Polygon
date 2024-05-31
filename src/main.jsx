import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThirdwebProvider,ConnectWallet } from "@thirdweb-dev/react";
import { MoonbaseAlpha } from "@thirdweb-dev/chains";


const moonbeamAlphaChainId = 1287;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider  activeChain={MoonbaseAlpha} clientId='8e69916a61b029d3d8f1489eeb3db896'>
    <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
