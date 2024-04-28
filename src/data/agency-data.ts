import { CardInterface } from '@/type/card-types';
import { MainComponentInterface } from '@/type/main-types';

const cardData: CardInterface[] = [
  {
    img: { src: '/resources/first.png', alt: '', width: 52, height: 52 },
    heading: 'Brief',
    text: 'Complete <b>brief writing or simple guidance</b> on what to include, we\'ve got you covered',
    width: 434,
    backgroundColor: '#F9F9F9',
  },
  {
    img: { src: '/resources/second.png', alt: '', width: 52, height: 52 },
    heading: 'Search',
    text: 'In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.',
    width: 458,
    backgroundColor: '#F4F4F4',
  },
  {
    img: { src: '/resources/third.png', alt: '', width: 52, height: 52 },
    heading: 'Pitch',
    text: 'Comprehensive <b>pitch management</b> including comms, diary management and pitch housing.',
    width: 484,
    backgroundColor: '#F1F1F1',
  },
];

export const agencyProps: MainComponentInterface = {
  agencyImg: { src: '/resources/video.png', alt: '', width: 326, height: 520 },
  bgImg: {
    src: '/resources/background.png',
    size: '800px 500px',
    position: 'left 30px top 150px',
    positionMobile: 'left -100px top 150px'
  },
  cardsProps: cardData,
  headingText: {
    title: 'Managed agency selection',
    subtitle: 'Strenghten your onboarding process',
  },
  mobileMessage: 'link to brief generator??'
};