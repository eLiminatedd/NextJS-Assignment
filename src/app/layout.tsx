'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles';
import { ReactNodeProps } from '@/type/general-types';

export default function RootLayout({ children }: ReactNodeProps) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
