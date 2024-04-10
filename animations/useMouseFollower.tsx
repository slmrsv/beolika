import { useGSAP } from '@gsap/react';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';

/**
 * useMouseFollower Hook
 *
 * This custom hook creates a mouse tracking effect. It animates a circle that follows the mouse movement
 * within specific frames on the page.
 *
 * @param {Object} options - Configuration options for the hook.
 * @param {string} [options.frameSelectorName=".frame"] - CSS selector for the frames inside which
 *                                                            mouse tracking will occur.
 * @param {string} [options.circleMouseSelectorName=".circle"] - CSS selector for the circle to be animated.
 * @param {number} [options.circleScaleValueEnter=10] - Scale of the circle when entering a frame.
 * @param {number} [options.circleScaleValueLeave=1] - Scale of the circle when leaving a frame.
 * @param {boolean} [options.isTextScrollingEnabledY=false] - Enable or disable text scrolling on the Y-axis.
 *
 * @returns {Function} - A cleanup function that removes event listeners when called.
 */

const useMouseFollower = (
  {
    frameSelectorName = ".frame",
    circleMouseSelectorName = ".circle",
    circleScaleValueEnter = 6,
    circleScaleValueLeave = 1,
    isTextScrollingEnabledY  = false,
  } = {}
) => {
  useGSAP(() => {
    const circle = document.querySelector(circleMouseSelectorName) as HTMLElement;
    // eslint-disable-next-line no-undef
    const frames = document.querySelectorAll(frameSelectorName) as NodeListOf<HTMLElement>;

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
      const frameDimensions = frame.getBoundingClientRect();
      const startX = frameDimensions.x;
      const endX = frameDimensions.x + frameDimensions.width;
      const normalizedX = gsap.utils.mapRange(startX, endX, 0, 1, event.clientX);

      gsap.to(circle, {
        scale: circleScaleValueEnter,
      });

      isTextScrollingEnabledY  ? (
        gsap.to(frame.children, {
          color: 'background',
          duration: 0.4,
          y: '-2vw',
        })
      ) : (
        gsap.to(frame.children, {
          color: 'background',
          duration: 0.4,
        })
      );

      gsap.to(frame.children, {
        x: lerp(-20, 20, normalizedX),
        duration: 0.3,
      });
    };

    const handleFrameMouseLeave = (frame: HTMLElement) => {
      gsap.to(circle, {
        scale: circleScaleValueLeave,
      });

      isTextScrollingEnabledY  ? (
        gsap.to(frame.children, {
          color: 'background',
          duration: 0.4,
          y: 0,
        })
      ) : (
        gsap.to(frame.children, {
          color: 'background',
          duration: 0.4,
        })
      );

      gsap.to(frame.children, {
        x: 0,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    frames.forEach((frame) => {
      frame.addEventListener('mousemove', (event) => handleFrameMouseMove(frame, event));
      frame.addEventListener('mouseleave', () => handleFrameMouseLeave(frame));
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      frames.forEach((frame) => {
        frame.removeEventListener('mousemove', (event) => handleFrameMouseMove(frame, event));
        frame.removeEventListener('mouseleave', () => handleFrameMouseLeave(frame));
      });
    };
  }, [circleMouseSelectorName, frameSelectorName, isTextScrollingEnabledY]);
};

export default useMouseFollower;