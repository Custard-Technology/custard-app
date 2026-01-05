# Current Issues and Improvements

This document lists known bugs, security concerns, and suggested improvements for the Custard App codebase.

## 🚨 Critical Bugs

### 1. Token Ownership & Initial Supply (Smart Contracts)
**Severity: Critical**  
**Location:** `contract/contracts/FactoryToken.sol` & `TokenFactory.sol`

**Description:**
In `FactoryToken.sol`, the constructor mints the initial supply to `msg.sender`:
```solidity
_mint(msg.sender, 1000000 * 10 ** 18);
```
When `TokenFactory` deploys a new `FactoryToken` using `new FactoryToken(...)`, the `msg.sender` seen by `FactoryToken` is the **TokenFactory contract address**, not the business owner triggering the transaction.

**Consequence:**
The initial 1,000,000 tokens are minted and held by the `TokenFactory` contract. Since `TokenFactory` has no function to transfer ERC20 tokens it holds, **these tokens are permanently stuck**. The business owner receives a token contract with 0 balance and cannot issue rewards.

**Fix:**
Update `FactoryToken` to accept an `owner` address in the constructor, or update `TokenFactory` to transfer the tokens immediately after deployment.

**Recommended Fix (`FactoryToken.sol`):**
```solidity
constructor(string memory name, string memory symbol, address initialOwner) ERC20(name, symbol) {
    _mint(initialOwner, 1000000 * 10 ** 18);
}
```
And update `TokenFactory.sol` to pass `msg.sender` as the `initialOwner`.

---

## 🔒 Security Concerns

### 1. Private Key in Frontend Environment
**Severity: High**  
**Location:** `frontend/.env` (implied by README)

**Description:**
The README suggests adding `PRIVATE_KEY` to the frontend `.env` file.
```
PRIVATE_KEY=your_wallet_private_key
```

**Risk:**
If this environment variable is accidentally prefixed with `NEXT_PUBLIC_` or used in a way that leaks into the client-side bundle, the wallet is compromised. Even if used only server-side, it implies the server acts as a custodian, which centralizes risk.

**Recommendation:**
- If the private key is for signing transactions on the server (e.g., a "gas station" or admin wallet), ensure it is **never** exposed to the client.
- Ideally, users should sign transactions using their browser wallet (Metamask, etc.) so the app never handles private keys.

---

## 🛠 Improvements & Refactoring

### 1. Hardhat Network Configuration
**Location:** `contract/hardhat.config.js`

**Observation:**
The config currently forces `defaultNetwork: 'primordial'`.
```javascript
defaultNetwork : 'primordial',
```

**Improvement:**
Enable `localhost` or `hardhat` networks by default for development. This allows running tests and deployments locally without needing testnet ETH or an internet connection.

### 2. Lack of Access Control on Factory
**Location:** `contract/contracts/TokenFactory.sol`

**Observation:**
Anyone can call `createToken`. While this might be intended (permissionless), it allows spamming the `deployedTokens` array, which could make `getAllTokens()` expensive or unusable (DoS vector) if the array grows too large.

**Improvement:**
- Implement pagination for `getAllTokens`.
- Or, restrict `createToken` if the platform intends to charge a fee or require registration.

### 3. Frontend Type Safety
**Location:** `frontend/`

**Observation:**
Project uses TypeScript, but ensure `strict` mode is fully utilized. Ensure API responses from MongoDB are properly typed before being used in components to prevent runtime errors.

### 4. Database Connection Handling
**Location:** `frontend/lib/mongo.ts`

**Observation:**
The singleton pattern used is good for Next.js hot-reloading. Ensure that `MONGODB_URI` is validated strictly at runtime (e.g., using `zod` schema validation for env vars) to fail fast if configuration is missing.

---

## 📝 Observations

1.  **Tailwind CSS v4**: The project is using version 4. Ensure that the build pipeline supports this as it is a newer version with potential breaking changes from v3.
2.  **No Tests**: There are no automated tests visible in the `frontend` or `contract` directories (aside from default Hardhat scaffolding). Adding unit tests for the Smart Contracts is crucial before mainnet deployment.
