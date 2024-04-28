/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles';
import { ReactNodeProps } from '@/type/general-types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function RootLayout({ children }: ReactNodeProps) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </head>
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
