import { Hero, Main } from '@/sections';

const heroProps = {
  img: { src: '/img/heroimg.png', alt: '', width: 1000, height: 1680 },
  title: 'Agency procurement, outsourced.',
  description: 'Start the process here',
  ctaText: 'Start',
  href: '/agency'
};

const mainProps = {
  img: { src: '/resources/video.png', alt: '', width: 400, height: 550 },
  CardsProps: {
    img: { src: '/resources/first.png', alt: '', width:100, height:80},
    heading:'Managed agency selection',
    text:'Strenghten your onboarding process',
  }
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
