import { Hero } from '@/sections';
import {heroProps} from '@/data/hero-data';
import React from 'react';

/**
 * Represents the Home Page component.
 * This component serves as the entry point for the home page, rendering the Hero section.
 * @returns {JSX.Element} JSX representation of the Home Page component.
 */

export default function Home(): React.JSX.Element {
  return (
    <>
      <div>
        <Hero {...heroProps} />
      </div>
    </>
  );
}
