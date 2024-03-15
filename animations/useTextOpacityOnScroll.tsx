import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap';

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
  classNameSelectorChar: string,
  classNameSelectorWords: string,
  {
    start = 'top 80%',
    end = 'bottom 60%',
    opacity = 0.2,
    stagger = 0.1,
  } = {}
) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textChars = document.querySelectorAll(classNameSelectorChar);
    const textWords = document.querySelectorAll(classNameSelectorWords);


    if (!textChars) {
      return;
    }

    if(!textWords) {
      return;
    }

    textChars.forEach((char: any) => {
      const splitChars = new SplitType(char, { types: 'lines,words,chars' });
      gsap.from(splitChars.chars, {
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

    textWords.forEach((word: any) => {
      const splitWords = new SplitType(word, { types: 'words' });
      gsap.to(splitWords.words, {
        scrollTrigger: {
          trigger: word,
          start,
          end,
          scrub: true,
          markers: false,
        },
        color: "white",
        stagger,
      });
    });
  });
};

export default useTextOpacityOnScroll;
