import { Main } from '@/sections';

const mainProps = {
  img: { src: '/resources/video.png', alt: '', width: 400, height: 550 },
  CardsProps: [
    {
      img: { src: '/resources/first.png', alt: '', width: 100, height: 80 },
      heading: 'Brief',
      text: 'Complete <b>brief writing or simple guidance</b> on what to include, we\'ve got you covered',
      width: '450px',
      backgroundColor: '#F9F9F9',
    },
    {
      img: { src: '/resources/second.png', alt: '', width: 100, height: 80 },
      heading: 'Search',
      text: 'In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.',
      width: '450px',
      backgroundColor: '#F4F4F4',
    },
    {
      img: { src: '/resources/third.png', alt: '', width: 100, height: 80 },
      heading: 'Pitch',
      text: 'Comprehensive <b>pitch management</b> including comms, diary management and pitch housing.',
      width: '450px',
      backgroundColor: '#F1F1F1',
    },
  ],
};

export default function AgencyPage() {
  return (
    <>
      <div>
        <Main {...mainProps}></Main>
        {/** Other sections */}
      </div>
    </>
  );
}
