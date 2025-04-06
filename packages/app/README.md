# CookieJar Frontend

This is the frontend application for the CookieJar smart contract. It allows users to interact with the smart contract, including withdrawing funds as a whitelisted member.

## 🌟 Features

- Connect your wallet through various providers
- View your whitelisted status
- Withdraw funds if you're whitelisted
- Modern UI built with React, Tailwind CSS, and shadcn components

## 📋 Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A deployed CookieJar contract (see the contract README for deployment instructions)
- Access to environment variables (detailed below)

## 🔑 Environment Variables

This application requires the following environment variables to function properly:

1. `VITE_INFURA_KEY` - Infura API key for connecting to Ethereum networks
2. `VITE_CONTRACT_ADDRESS` - The address of your deployed CookieJar contract
3. `VITE_WALLET_CONNECT_PROJECT_ID` - WalletConnect project ID for wallet integration

### How to Get These Variables

#### 1. Getting an Infura API Key (VITE_INFURA_KEY)

1. Visit [Infura](https://infura.io/) and sign up for an account
2. Create a new project (you can name it "CookieJar" or whatever you prefer)
3. Once created, you'll see your project's API key
4. Copy this key for use in your environment variables

#### 2. Contract Address (VITE_CONTRACT_ADDRESS)

This is the address of your deployed CookieJar contract. If you've followed the deployment guide in the contract README, you should have this address.

Example: `0xE9D12E97bd19376c93c73198c2f64eAbE246912b`

#### 3. Getting a WalletConnect Project ID (VITE_WALLET_CONNECT_PROJECT_ID)

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Sign up or log in to your account
3. Create a new project (you can name it "CookieJar")
4. Once created, you'll receive a Project ID
5. Copy this ID for use in your environment variables

## 🚀 Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/cookiejar.git
cd cookiejar/frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Create a `.env` file in the frontend root directory with your environment variables:

```
VITE_INFURA_KEY=your_infura_api_key_here
VITE_CONTRACT_ADDRESS=your_contract_address_here
VITE_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id_here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173` to see the application running.

## 🌐 Deployment Options

### Option 1: Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/) and sign up or log in
3. Click "New Project" and import your GitHub repository
4. Add your environment variables in the Vercel project settings
5. Deploy the project

### Option 2: Deploy to Netlify

1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com/) and sign up or log in
3. Click "New site from Git" and select your GitHub repository
4. Add your environment variables in the Netlify project settings
5. Deploy the project

### Option 3: Build and Deploy Manually

1. Build the production version:

```bash
npm run build
# or
yarn build
```

2. The built files will be in the `dist` folder. You can deploy these files to any static hosting service like:
   - Amazon S3
   - GitHub Pages
   - Firebase Hosting
   - Any other static hosting provider

## 🔧 Customization

You can customize the application by:

- Modifying UI components in the `src/components` directory
- Changing styles in the `src/styles` directory
- Adding new functionality by extending the existing codebase

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [wagmi Documentation](https://wagmi.sh/react/getting-started)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)
- [Optimism Documentation](https://community.optimism.io/docs/)
