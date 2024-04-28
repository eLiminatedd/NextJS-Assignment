import { Main } from '@/sections';
import { agencyProps } from '@/data/agency-data';
import React from 'react';

/**
 * Represents the Agency Page component.
 * This component renders the main content for the agency page.
 * @returns {JSX.Element} JSX representation of the Agency Page component.
 */

export default function AgencyPage(): React.JSX.Element {
  return (
    <>
      <div>
        <Main {...agencyProps}></Main>
      </div>
    </>
  );
}
