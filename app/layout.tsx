import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader, Space_Grotesk } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Modo | Access Every Creative Tool with No Setup & No Hidden Fees',
  description:
    'All your enterprise AI & design tools in one fast, easy, and free to use hub. Unify Claude 3.5, ChatGPT, Copilot, Notion AI & Perplexity.',
  keywords: [
    'Modo AI',
    'joinmodo.com',
    'Tools AI',
    'Claude 3.5 Sonnet',
    'ChatGPT Enterprise',
    'GitHub Copilot',
    'Notion AI',
    'Perplexity Pro',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${newsreader.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased text-slate-800 bg-white font-sans selection:bg-rose-500 selection:text-white">
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
