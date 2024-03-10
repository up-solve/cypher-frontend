import { GoTrophy, GoVerified } from 'react-icons/go';
import { IoWalletOutline } from 'react-icons/io5';

export const infoCards = [
  {
    title: 'Low Rates',
    description:
      'Our coders offer competitive rates, ensuring you get top talent without overspending.',
    icon: IoWalletOutline,
  },
  {
    title: 'Quality Work',
    description:
      'Rigorous verification ensures you hire skilled, experienced coders who deliver pixel-perfect solutions.',
    icon: GoTrophy,
  },
  {
    title: 'Verified Cyphers',
    description:
      'Our screening process guarantees reliable, trustworthy professionals you can count on.',
    icon: GoVerified,
  },
];

export const InfoCards = typeof infoCards;

export const infoImageCards = [
  {
    image: '/images/info-image-1.png',
    description:
      'Search by skill, experience, and budget to match your project needs with the ideal coder.',
  },
  {
    image: '/images/info-image-2.png',
    description:
      'Enjoy secure communication tools and progress tracking for smooth project management.',
  },
  {
    image: '/images/info-image-3.png',
    description:
      'Verified profiles, secure payments, and escrow options safeguard your project and investment.',
  },
];

export const InfoImageCards = typeof infoImageCards;
