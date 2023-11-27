import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import abi from './abi/counter.json';
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
    count: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xE735C546Cc61b6774948fDe20cc8E3da55B96c94";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          await ethereum.request({ method: "eth_requestAccounts" });
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Fetch and set the initial count value
        const count = await contract.totalNFT();

        setState({ provider, signer, contract, count });
      } catch (error) {
        console.error(error);
      }
    };

    connectWallet();
  }, []);

  const handleIncrease = async () => {
    try {
      await state.contract.NFTadd();
      const newCount = await state.contract.totalNFT();
      setState((prevState) => ({ ...prevState, count: newCount }));
    } catch (error) {
      console.error("Error increasing count:", error);
    }
  };

  const handleDecrease = async () => {
    try {
      await state.contract.NFTsub();
      const newCount = await state.contract.totalNFT();
      setState((prevState) => ({ ...prevState, count: newCount }));
    } catch (error) {
      console.error("Error decreasing count:", error);
    }
  };

  return (
    <div className="App">
      <h1>Total NFT: {state.count ? state.count.toString() : 'Loading...'}</h1>
      <div className="button-container">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
