import { useGSAP } from '@gsap/react';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';

const useMouseFollower = () => {


  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    // eslint-disable-next-line no-undef
    const frames = document.querySelectorAll(".frame") as NodeListOf<HTMLElement>;
    
    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

    const handleMouseMove = (event: MouseEvent) => {
      if (!circle) {
        return;
      }

      gsap.to(circle, {
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
        duration: 0.3,
        ease: 'expo.out',
      });
    };

    const handleFrameMouseMove = (frame: HTMLElement, event: MouseEvent) => {
      const frameDimensions = frame?.getBoundingClientRect();
      const startX = frameDimensions.x;
      const endX = frameDimensions.x + frameDimensions.width;
      const normalizedX = gsap.utils.mapRange(startX, endX, 0, 1, event.clientX);

      gsap.to(circle, {
        scale: 6,
      });

      gsap.to(frame.children, {
        color: 'background',
        duration: 0.4,
      });

      gsap.to(frame.children, {
        x: lerp(-20, 20, normalizedX),
        duration: 0.3,
      });
    };

    const handleFrameMouseLeave = (frame: HTMLElement) => {
      gsap.to(circle, {
        scale: 1,
      });

      gsap.to(frame.children, {
        color: 'background',
        duration: 0.4,
      });

      gsap.to(frame.children, {
        x: 0,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    frames.forEach((frame) => {
      frame.addEventListener('mousemove', (event) => handleFrameMouseMove(frame, event));
      frame.addEventListener('mouseleave', () => handleFrameMouseLeave(frame));
      frame.addEventListener('click', () => handleFrameMouseLeave(frame));
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      frames.forEach((frame) => {
        frame.removeEventListener('mousemove', (event) => handleFrameMouseMove(frame, event));
        frame.removeEventListener('mouseleave', () => handleFrameMouseLeave(frame));
      });
    };
  }, []);
};

export default useMouseFollower;
