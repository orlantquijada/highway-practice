import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';

export default class Fade extends Highway.Transition {
  in({ from, to, done }) {
    from.remove();

    gsap.from(to, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2',
      onComplete: done,
    });
  }

  out({ from, done }) {
    gsap.to(from, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2',
      onComplete: done,
    });
  }
}
