# Styling and Coding Guidelines

This document outlines the coding standards, naming conventions, and best practices for the Custard App project. Adhering to these guidelines ensures code consistency, maintainability, and scalability across both the frontend and smart contract codebases.

## 1. General Principles

- **DRY (Don't Repeat Yourself)**: Extract common logic into utilities, hooks, or base contracts.
- **KISS (Keep It Simple, Stupid)**: Avoid over-engineering. Prefer simple, readable solutions over complex abstractions.
- **Consistency**: Follow the existing patterns in the codebase.
- **Comments**: Write self-documenting code. Use comments to explain *why*, not *what*.

---

## 2. Frontend (Next.js & React)

### 2.1. File & Directory Naming

- **Components**: Use `PascalCase` for component files and directories (e.g., `Button.tsx`, `components/Navbar/`).
- **Pages (App Router)**: Follow Next.js conventions (`page.tsx`, `layout.tsx`, `loading.tsx`).
- **Hooks**: Use `camelCase` prefixed with `use` (e.g., `useAuth.ts`).
- **Utilities**: Use `camelCase` (e.g., `formatDate.ts`, `apiClient.ts`).
- **Constants/Types**: Use `PascalCase` or `camelCase` depending on export style (e.g., `ActionTypes.ts`).

### 2.2. TypeScript

- **Strict Mode**: Ensure strict type checking is enabled. Avoid `any` whenever possible.
- **Interfaces vs Types**: Prefer `interface` for object definitions that might be extended. Use `type` for unions and primitives.
- **Props**: Define component props using an interface named `[ComponentName]Props`.

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
```

### 2.3. Component Structure

Follow this order within component files:

1.  **Imports**: External libraries first, then internal components, then styles/assets.
2.  **Types/Interfaces**: Props and state definitions.
3.  **Component Definition**:
    - Destructure props.
    - Hooks (`useState`, `useEffect`, custom hooks).
    - Helper functions.
    - Return statement (JSX).
4.  **Exports**: Export default usually, named exports for utilities.

```tsx
import React from 'react';
import { useStore } from '@/store/user';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  className?: string;
}

const Card = ({ title, className }: CardProps) => {
  // Logic
  const user = useStore((state) => state.user);

  // Render
  return (
    <div className={cn("p-4 border rounded", className)}>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
```

### 2.4. Tailwind CSS

- **Utility First**: Use utility classes directly in JSX.
- **Sorting**: Order classes logically (Layout -> Box Model -> Typography -> Visuals -> Misc). *Tip: Use the prettier-plugin-tailwindcss*.
- **`cn` Utility**: Use the `cn` (clsx + tailwind-merge) utility for conditional class application.
- **Avoid `@apply`**: Minimize the use of `@apply` in CSS files unless creating complex global styles.

### 2.5. State Management (Zustand)

- Keep stores atomic and focused on specific domains (e.g., `userStore`, `businessStore`).
- Use typed interfaces for state and actions.

---

## 3. Smart Contracts (Solidity)

### 3.1. Versioning

- Use a specific Solidity version (currently `0.8.28`) to prevent unexpected behavior from compiler updates.

### 3.2. Naming Conventions

- **Contracts**: `PascalCase` (e.g., `TokenFactory`).
- **Events**: `PascalCase` (e.g., `TokenCreated`).
- **Functions**: `camelCase` (e.g., `createToken`).
- **State Variables**: `camelCase` (e.g., `deployedTokens`).
- **Constants**: `UPPER_CASE_WITH_UNDERSCORES` (e.g., `MAX_SUPPLY`).
- **Modifiers**: `camelCase` (e.g., `onlyOwner`).

### 3.3. Layout of State Variables and Functions

Follow the standard Solidity layout order:

1.  **Type definitions**
2.  **State variables**
3.  **Events**
4.  **Modifiers**
5.  **Constructor**
6.  **Receive/Fallback**
7.  **External/Public functions**
8.  **Internal/Private functions**

### 3.4. Security Best Practices

- **Checks-Effects-Interactions Pattern**: Always update state *before* making external calls to prevent re-entrancy attacks.
- **Access Control**: Use `Ownable` or `AccessControl` from OpenZeppelin.
- **Input Validation**: Use `require` or custom errors (`revert CustomError()`) to validate inputs early.

```solidity
// Example
function withdraw(uint256 amount) external {
    // Check
    require(balances[msg.sender] >= amount, "Insufficient balance");
    
    // Effect
    balances[msg.sender] -= amount;
    
    // Interaction
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}
```

### 3.5. NatSpec Comments

Use NatSpec format for documenting contracts and public functions.

```solidity
/// @notice Creates a new token
/// @dev Deploys a new FactoryToken contract
/// @param name The name of the token
/// @param symbol The symbol of the token
/// @return The address of the deployed token
function createToken(string memory name, string memory symbol) external returns (address) { ... }
```

---

## 4. Git & Commits

- **Atomic Commits**: Make small, focused commits.
- **Messages**: Use imperative mood (e.g., "Add user authentication" not "Added user...").
- **Branches**: Feature branches should stem from `main` (or `develop` if applicable). Naming: `feature/feature-name`, `fix/bug-name`.
