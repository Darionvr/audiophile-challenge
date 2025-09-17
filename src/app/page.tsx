import HeroSection from "./ui/hero-section";
import NavSection from "./ui/nav-section";
import styles from '@/app/home.module.css'
import { ZX7Speaker, ZX9Speaker, YX1Earphones } from './ui/feature-blocks';
import Brandsummary from "./ui/brandsummary";


export default function Home() {


  return (
    <>
      <HeroSection />
      <main className={styles.main}>
        <NavSection />
        <ZX9Speaker />
        <ZX7Speaker />
        <YX1Earphones />
        <Brandsummary/>

       
      </main>
    </>
  );
}
