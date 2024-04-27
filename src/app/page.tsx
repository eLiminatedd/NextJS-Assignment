import { Hero, Main } from '@/sections';

const heroProps = {
  img: { src: '/img/heroimg.png', alt: '', width: 1000, height: 1680 },
  title: 'Agency procurement, outsourced.',
  description: 'Start the process here',
  ctaText: 'Start',
};

const mainProps = {
  img: { src: '/resources/video.png', alt: '', width: 400, height: 550 },
};

export default function Home() {
  return (
    <>

      <div>
        <Hero {...heroProps} />
        <Main {...mainProps}></Main>
        {/** Other sections */}
      </div>
    </>
  );
}
