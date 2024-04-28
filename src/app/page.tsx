import { Hero } from '@/sections';
import {heroProps} from '@/data/hero-data';


export default function Home() {
  return (
    <>
      <div>
        <Hero {...heroProps} />
      </div>
    </>
  );
}
