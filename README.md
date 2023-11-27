# NFT Counter App

## Overview

The NFT Counter App is a simple React application that interacts with an Ethereum smart contract to display and modify the count of NFTs. It uses the ethers.js library to connect to the Ethereum network and interact with the deployed smart contract.

## Features

- **Total NFT Display:** The app displays the total count of NFTs fetched from the connected smart contract.

- **Increase NFT Count:** Users can click the "Increase" button to increment the count of NFTs in the smart contract.

- **Decrease NFT Count:** Users can click the "Decrease" button to decrement the count of NFTs in the smart contract.

## Getting Started

### Prerequisites

- **Node.js:** Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
    ```
2. Navigate to the project directory:

   ```bash
   cd nft-counter-app
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
## Usage

1. Start the React App:

   ```bash
   npm start
   ```
2. The app will be accessible at http://localhost:3000 in your web browser.

## Smart Contract
- The React app interacts with an Ethereum smart contract deployed at the following address:

- Contract Address: **0xE735C546Cc61b6774948fDe20cc8E3da55B96c94**

- The smart contract code is written in Solidity and provides functions to get the total count of NFTs, increase the count, and decrease the count.

## Development

- To understand and modify the code, you can refer to the following files:

- Smart Contract ABI: **abi/counter.json**
- React App Code: **src/App.js**

## Issues and Contributions

- If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

   
