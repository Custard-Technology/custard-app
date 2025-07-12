// app/layout.tsx
//import './page.module.css';
//import '../styles/globals.css';
//import { ReactNode } from 'react';

export const metadata = {
  title: 'Custard Faucet',
  description: 'Request test BDAG tokens on the Custard blockchain',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
