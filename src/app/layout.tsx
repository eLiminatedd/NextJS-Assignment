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

/**
 * Represents the Root Layout component.
 * This component provides the basic structure for the root HTML layout, including font loading and theme provider.
 * @param {Object} props - The props object containing the children to be rendered within the layout.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the layout.
 * @returns {JSX.Element} JSX representation of the Root Layout component.
 */

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
