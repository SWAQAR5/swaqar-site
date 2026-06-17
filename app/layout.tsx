import type { Metadata } from 'next';
import './swaqar.css';

export const metadata: Metadata = {
  title: 'SWAQAR Group — Corridors of Trust',
  description: 'SWAQAR Group is a governance-led, non-custodial Trade Coordination Layer connecting Africa, the Middle East, and Asia through verification, institutional trust, and disciplined execution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
