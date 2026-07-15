// Centralized image constants to support easy swaps, lazy loading, and future CDN/WebP configurations.
import heroHome from '../assets/images/hero-home.jpg';
import heroAbout from '../assets/images/hero-about.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';

export const IMAGES = {
  home: {
    hero: heroHome,
    heroAlt: "A serene, peaceful space showing instruments, evoking a sense of calm and musical reflection.",
  },
  about: {
    hero: heroAbout,
    heroAlt: "Soft light filtering through a room, creating a calm atmosphere of healing and research.",
  },
  gallery: [
    {
      src: gallery1,
      alt: "A peaceful forest scene representing wellness and mental clarity through environmental harmony.",
      caption: "Resonance in Nature"
    },
    {
      src: gallery2,
      alt: "An artistic representation of soundwaves reflecting on clean sand, showing therapeutic rhythm.",
      caption: "Visualizing Rhythm"
    },
    {
      src: gallery3,
      alt: "Soft evening light casting long shadows on piano keys, showing peace and classical beauty.",
      caption: "Evening Reflection"
    }
  ],
  placeholder: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%23F8F8F6'/></svg>"
};
