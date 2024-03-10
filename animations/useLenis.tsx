import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on('scroll', () => {});
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  });
};

export default useLenis;