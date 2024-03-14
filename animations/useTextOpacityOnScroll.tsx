import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { gsap } from "gsap/dist/gsap";

/**
 * useTextOpacityOnScroll Hook
 *
 * This custom hook animates the opacity of text elements on scroll. It utilizes GSAP's ScrollTrigger
 * and SplitType for creating a fade-in effect of individual characters within a specified range.
 *
 * @param {string} classNameSelector - CSS selector for the text elements to apply the opacity animation.
 * @param {Object} options - Configuration options for the hook.
 * @param {string} [options.start='top 20%'] - The start position for the opacity animation trigger.
 * @param {string} [options.end='bottom 90%'] - The end position for the opacity animation trigger.
 * @param {number} [options.opacity=0.2] - The target opacity for the text elements.
 * @param {number} [options.stagger=0.1] - The stagger value for animating individual characters.
 *
 * @returns {void} - The hook applies opacity animation to the specified text elements on scroll.
 */

const useTextOpacityOnScroll = (
  classNameSelector: string,
  {
    start = 'top 80%',
    end = 'bottom 90%',
    opacity = 0.2,
    stagger = 0.1,
  } = {}
) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const SplitTypes = document.querySelectorAll(classNameSelector);


    if (!SplitTypes) {
      return;
    }

    SplitTypes.forEach((char: any) => {
      const text = new SplitType(char, { types: 'lines,words,chars' });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start,
          end,
          scrub: true,
          markers: false,
        },
        opacity,
        stagger,
      });
    });
  });
};

export default useTextOpacityOnScroll;
