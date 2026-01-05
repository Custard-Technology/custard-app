# Custard App Documentation

## 1. System Overview

Custard is a decentralized Loyalty Points Program that empowers businesses to tokenize their loyalty systems. By leveraging blockchain technology, Custard ensures that loyalty points are transparent, immutable, and easily manageable.

The system consists of two primary components:
1.  **Web Application (Frontend)**: A Next.js-based dashboard for businesses to manage their profile, view analytics, and interact with the blockchain.
2.  **Smart Contracts**: A set of Solidity contracts on the blockchain responsible for minting and managing the loyalty tokens.

---

## 2. Architecture

The system follows a hybrid Web3 architecture:

```mermaid
graph TD
    User[User / Business Owner] -->|HTTPS| Frontend[Next.js Frontend]
    Frontend -->|Reads/Writes| DB[(MongoDB)]
    Frontend -->|RPC Calls| Blockchain[Primordial Network]
    
    subgraph "Smart Contracts"
    Factory[TokenFactory Contract] -->|Deploys| Token[FactoryToken (ERC20)]
    end
    
    Frontend -->|Calls| Factory
```

-   **Frontend**: Handles user authentication, business logic, and UI state. It interacts with the blockchain using `ethers.js`.
-   **Database (MongoDB)**: Stores off-chain data such as business details (name, address, description), user profiles, and transaction history logs for faster querying.
-   **Blockchain**: Stores the actual value (Loyalty Tokens). Each business gets its own unique ERC20 token contract.

---

## 3. Smart Contracts

The core logic resides in the `contract/` directory.

### 3.1. TokenFactory (`TokenFactory.sol`)
This is the main entry point for the system. It uses the **Factory Pattern**.

-   **Purpose**: To deploy new loyalty token contracts for businesses dynamically.
-   **Key Functions**:
    -   `createToken(string memory name, string memory symbol)`: Deploys a new instance of `FactoryToken` and registers it. Emits a `TokenCreated` event.
    -   `getAllTokens()`: Returns an array of addresses for all deployed tokens.
-   **State**: Maintains a list (`address[] public deployedTokens`) of all created tokens.

### 3.2. FactoryToken (`FactoryToken.sol`)
This represents the loyalty point itself.

-   **Standard**: ERC20 (using OpenZeppelin).
-   **Behavior**:
    -   Upon deployment, it mints an initial supply (currently `1,000,000 * 10^18`) to the creator (the business owner).
    -   Standard ERC20 functions (`transfer`, `balanceOf`, `approve`) are available for moving points between the business and customers.

---

## 4. Frontend Application

The frontend is built with **Next.js 16 (App Router)**.

### 4.1. Key Technologies
-   **Framework**: Next.js
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS, Radix UI (via Shadcn/ui patterns)
-   **State Management**: Zustand
    -   `useBusinessStore`: Manages business profile state.
    -   `useUserStore`: Manages user authentication state.
-   **Database**: MongoDB (via native driver).
-   **Auth**: Custom JWT-based authentication (implied by `lib/jwt.ts` and `middleware.ts`).

### 4.2. Directory Structure Highlights
-   `/app`: Contains the pages and API routes.
    -   `/api`: Backend endpoints for DB operations (User, Business, Rewards).
    -   `/dashboard`: Protected route for business owners.
    -   `/onboarding`: Flow for new users/businesses.
-   `/lib`: Singleton instances and utility functions (`mongo.ts`, `ethers.ts`).
-   `/store`: Zustand store definitions.

---

## 5. User Flows

### 5.1. Business Onboarding
1.  **Registration**: User signs up via email/password.
2.  **Profile Setup**: User enters business details (Name, Type, Address).
    -   *Data is saved to MongoDB via `/api/business`.*
3.  **Token Creation**:
    -   User enters a Token Name and Symbol (e.g., "CafePoints", "CFP").
    -   Frontend calls `TokenFactory.createToken(...)`.
    -   Metamask (or wallet provider) asks for signature/gas.
    -   Transaction confirms -> Token Address is returned.
    -   Token Address is saved to the Business profile in MongoDB.

### 5.2. Issuing Points
1.  Business owner logs into the Dashboard.
2.  Selects "Issue Rewards".
3.  Enters Customer Wallet Address and Amount.
4.  Frontend calls `transfer` on the Business's specific `FactoryToken` contract.
5.  Points are transferred from Business Wallet -> Customer Wallet.

---

## 6. Database Schema (Conceptual)

While MongoDB is schema-less, the application expects the following structures:

### Users Collection
-   `email`: String
-   `password`: Hashed String
-   `role`: String ("business" | "customer")
-   `walletAddress`: String (Optional, if linked)

### Businesses Collection
-   `ownerId`: Reference to User
-   `businessName`: String
-   `businessType`: String
-   `businessAddress`: String
-   `description`: String
-   `tokenAddress`: String (The address of the deployed ERC20 contract)
-   `tokenSymbol`: String

---

## 7. Future Improvements
-   **Gasless Transactions**: Implement meta-transactions so businesses don't need ETH for every operation.
-   **Indexer**: Replace direct blockchain queries with an indexer (The Graph) for faster dashboard loading.
-   **Customer Mobile App**: A dedicated view for customers to see their wallet balances across multiple businesses.
