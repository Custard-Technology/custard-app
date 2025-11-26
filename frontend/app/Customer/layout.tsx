// app/layout.tsx
//import './globals.css';
//import { ReactNode } from 'react';

export const metadata = {
  title: 'Custard Wallet',
  description: 'Loyalty program summary',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
