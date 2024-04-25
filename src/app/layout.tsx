'use client';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <ThemeProvider theme={theme}>
      <body>{children}</body>
    </ThemeProvider>
    </html>
  );
}
