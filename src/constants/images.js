// Centralized image constants to support easy swaps, lazy loading, and future CDN/WebP configurations.
import logoImage from '../assets/images/logo-p.png';
import heroHome from '../assets/images/hero-home.jpg';
import heroAbout from '../assets/images/about-hero.png';
import aboutHomeImage from '../assets/images/about-us-home.jpeg';
import whatWeDoImage from '../assets/images/what-we-do-new.jpeg';
import krishnaFluteImage from '../assets/images/krishna-flute.jpg';
import objectivesImage from '../assets/images/objectives-new.jpeg';
import gallery1 from '../assets/images/gallery-new.png';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import traumaImage from '../assets/images/trauma-integration.jpeg';
import lonelinessImage from '../assets/images/loneliness.jpeg';
import anxietyImage from '../assets/images/anxiety-reduction.jpeg';
import stressImage from '../assets/images/stress-alleviation.jpeg';
import methodologyImage from '../assets/images/methodology.jpeg';
import focusHeroImage from '../assets/images/focus-hero.jpeg';

export const IMAGES = {
  logo: {
    src: logoImage,
    alt: 'Pranava Music Therapy Lab logo'
  },
  home: {
    hero: heroHome,
    heroAlt: "A serene, peaceful space showing instruments, evoking a sense of calm and musical reflection.",
    aboutSection: aboutHomeImage,
    aboutSectionAlt: "Classical Indian music theme showing a performer with tanpura amidst flower petals and warm ambient light.",
    whatWeDoImage: whatWeDoImage,
    krishnaFlute: krishnaFluteImage,
    objectivesImage: objectivesImage
  },
  about: {
    hero: heroAbout,
    heroAlt: "Soft light filtering through a room, creating a calm atmosphere of healing and research.",
    mainImage: aboutHomeImage,
    methodology: methodologyImage,
  },
  focusAreas: {
    hero: focusHeroImage,
    trauma: traumaImage,
    loneliness: lonelinessImage,
    anxiety: anxietyImage,
    stress: stressImage,
  },
  gallery: [
    {
      src: gallery1,
      alt: "A vibrant moment from a Pranava-Music Therapy Lab session at IIT Kharagpur capturing participants engaged in a therapeutic music circle.",
      caption: "Lab Sessions at IIT Kharagpur"
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
