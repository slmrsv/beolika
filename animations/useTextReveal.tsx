import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from "gsap/dist/gsap";
import SplitType from 'split-type';

const useTextReveal = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = document.querySelectorAll('section');
  
    const handleIntersection = (entries: any) => {
      entries.map((entry: any) => {
        const text = entry.target.querySelectorAll('div p.quote');
        const tl = gsap.timeline({delay: 0});
      
        text.forEach((char: any) => {
          const splitType = new SplitType(char);
          tl
            .to(splitType.chars, {
              y: 0,
              stagger: 0.005,
              delay: -.5,
              duration: 1,
            });
        });
  
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.reverse(0);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
  
    sections.forEach((section) => observer.observe(section));
  
  });
};

export default useTextReveal;
