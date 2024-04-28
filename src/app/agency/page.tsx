import { Main } from '@/sections';
import { agencyProps } from '@/data/agency-data';

export default function AgencyPage() {
  return (
    <>
      <div>
        <Main {...agencyProps}></Main>
      </div>
    </>
  );
}
