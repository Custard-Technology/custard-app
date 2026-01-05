# Custard App

![Custard App](https://raw.githubusercontent.com/Custard-Technology/custard-app/refs/heads/main/frontend/public/hom2.png)

Custard is a decentralized Loyalty Points Program application that allows businesses to create their own branded loyalty tokens on the blockchain. It provides a seamless interface for businesses to manage rewards and for customers to view and redeem their loyalty points.

## 🎥 Demo
[Watch the Demo on YouTube](https://www.youtube.com/watch?v=D7PIh4vfVeA)

## 🏗 Project Structure

The project is divided into two main parts:

- **`/contract`**: Contains the Solidity smart contracts, deployment scripts, and Hardhat configuration.
- **`/frontend`**: The Next.js web application for the user interface.

```
custard-app/
├── contract/               # Smart Contracts (Hardhat)
│   ├── contracts/          # Solidity source files
│   ├── scripts/            # Deployment scripts
│   └── hardhat.config.js   # Hardhat configuration
├── frontend/               # Web Application (Next.js)
│   ├── app/                # Next.js App Router pages
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utilities (Auth, DB, etc.)
│   ├── store/              # State management (Zustand)
│   └── public/             # Static assets
└── README.md
```

## 🛠 Tech Stack

### Contracts
- **Solidity**: Smart contract language.
- **Hardhat**: Development environment.
- **OpenZeppelin**: Standard contract libraries (ERC20).

### Frontend
- **Next.js 16**: React framework with App Router.
- **React 19**: UI library.
- **Tailwind CSS**: Styling framework.
- **MongoDB**: Database for user and business data.
- **Ethers.js**: Blockchain interaction.
- **Zustand**: State management.
- **Resend**: Email services.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- A MongoDB instance (local or Atlas)
- An Ethereum-compatible wallet private key (for deployment)

### Environment Setup

Create a `.env` file in the `frontend` root directory with the following variables:

```bash
# Frontend .env
MONGODB_URI=your_mongodb_connection_string
RESEND_API=your_resend_api_key
FACTORY_CONTRACT_ADDRESS=deployed_factory_contract_address
RPC_URL=your_rpc_url
PUBLIC_KEY=your_wallet_public_key
PRIVATE_KEY=your_wallet_private_key
ENV=development
LINK=http://localhost:3000
DATABASE=custard_db
```

For the contract directory, create a `.env` file in `contract/`:

```bash
# Contract .env
PRIVATE_KEY=your_wallet_private_key
```

### Installation

#### 1. Smart Contracts

Navigate to the `contract` folder to install dependencies and deploy contracts.

```bash
cd contract
npm install
```

Compile the contracts:
```bash
npx hardhat compile
```

Deploy to the network (e.g., Primordial):
```bash
npx hardhat run scripts/deploy.js --network primordial
# OR using the package.json script
npm run deploy
```
*Note the deployed `TokenFactory` address and update `FACTORY_CONTRACT_ADDRESS` in your frontend `.env`.*

#### 2. Frontend Application

Navigate to the `frontend` folder.

```bash
cd frontend
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Documentation

For detailed documentation on how the code works, please refer to [DOCS.md](./DOCS.md).

## 🎨 Styling Guidelines

We follow specific styling guidelines to maintain consistency. See [STYLING_GUIDELINE.md](./STYLING_GUIDELINE.md).

## 🤝 Contributing

We welcome contributions! Please check [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute to this project.

## 🐛 Issues

Found a bug or have a suggestion? Check [ISSUES.md](./ISSUES.md) for known issues or to report a new one.
