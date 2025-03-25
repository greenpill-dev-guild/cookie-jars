# CookieJar Smart Contract

CookieJar is a decentralized application that allows whitelisted members to withdraw a set amount of ETH periodically from a communal "jar". This README explains how to deploy the contract and integrate it with the frontend application.

## 📝 Contract Overview

The CookieJar smart contract enables:

- Whitelisted members to withdraw a fixed amount of ETH (0.0069 ETH by default) once every 30 days
- Admin management (add/remove admins)
- Member management (add/remove members to whitelist)
- Blacklist functionality to prevent certain addresses from interacting with the contract
- Emergency controls (pause contract, emergency withdrawal)
- Customizable withdrawal amount

## 🚀 Deployment Guide

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [Hardhat](https://hardhat.org/) or [Remix IDE](https://remix.ethereum.org/)
- ETH for deployment gas fees
- A wallet with private key (like MetaMask)

### Option 1: Deploy with Hardhat

1. Create a new directory and initialize a Hardhat project:

```bash
mkdir cookiejar-deployment
cd cookiejar-deployment
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npx hardhat init
```

2. Copy the `CookieJar.sol` contract into the `contracts` folder.

3. Create a deployment script in `scripts/deploy.js`:

```javascript
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying CookieJar with account:", deployer.address);

  const initialAdmin = deployer.address; // You can change this to any address
  const CookieJar = await ethers.getContractFactory("CookieJar");
  const cookieJar = await CookieJar.deploy(initialAdmin);

  await cookieJar.deployed();
  console.log("CookieJar deployed to:", cookieJar.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

4. Configure Hardhat for Optimism in `hardhat.config.js`:

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    "optimism-goerli": {
      url: `https://optimism-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

5. Create a `.env` file with your credentials:

```
INFURA_API_KEY=your_infura_api_key
PRIVATE_KEY=your_wallet_private_key
```

6. Deploy the contract:

```bash
npx hardhat run scripts/deploy.js --network optimism
```

### Option 2: Deploy with Remix IDE

1. Visit [Remix IDE](https://remix.ethereum.org/)
2. Create a new file called `CookieJar.sol` and paste the contract code
3. Compile the contract
4. Connect Remix to MetaMask and switch to Optimism network
5. Deploy the contract, passing your wallet address as `initialAdmin`
6. Save the deployed contract address

## 🔍 Verification

After deployment, verify your contract on [Optimistic Etherscan](https://optimistic.etherscan.io/) to make it easier to interact with.

### Verify with Hardhat

Add the following to your `hardhat.config.js`:

```javascript
etherscan: {
  apiKey: {
    optimism: process.env.ETHERSCAN_API_KEY,
    optimisticGoerli: process.env.ETHERSCAN_API_KEY
  },
}
```

Then run:

```bash
npx hardhat verify --network optimism DEPLOYED_CONTRACT_ADDRESS INITIAL_ADMIN_ADDRESS
```

### Verify manually on Etherscan

1. Go to [Optimistic Etherscan](https://optimistic.etherscan.io/)
2. Search for your contract address
3. Go to the "Contract" tab
4. Click "Verify and Publish"
5. Fill in the details (Solidity version, optimization, etc.)
6. Paste your contract code and verify

## 🔄 Contract Interaction

Once deployed, you can interact with the contract through:

- Optimistic Etherscan
- Your frontend application
- Direct interactions via Web3 libraries or tools

### Contract Functions

Key functions include:

- `addMembers(address[])`: Add addresses to the whitelist
- `addAdmin(address)`: Add a new admin
- `withdrawAsWhitelisted(string)`: Allow whitelisted users to withdraw funds
- `updateWhitelistWithdrawalAmount(uint256)`: Change the withdrawal amount
- `emergencyWithdrawAll()`: Admin function to withdraw all funds in case of emergency

## 📱 Integration with Frontend

After deploying your contract, you'll need to:

1. Note the deployed contract address (e.g., `0xE9D12E97bd19376c93c73198c2f64eAbE246912b`)
2. Update the frontend's `.env` file with this address

See the frontend README for detailed integration instructions.

## 📜 Example

You can see a deployed example of this contract on Optimism at:
[0xE9D12E97bd19376c93c73198c2f64eAbE246912b](https://optimistic.etherscan.io/address/0xE9D12E97bd19376c93c73198c2f64eAbE246912b)
