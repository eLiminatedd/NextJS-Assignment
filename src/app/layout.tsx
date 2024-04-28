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
      </head>
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
