import { Hero } from '@/sections';

const heroProps = {
  image: { src: '/img/heroimg.png', alt: '', width: 1000, height: 1680 },
  title: 'Agency procurement, outsourced.',
  description: 'Start the process here',
  ctaText: 'Start',
};

export default function Home() {
  return (
    <>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
