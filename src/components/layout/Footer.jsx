import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';
import { HiChevronUp } from 'react-icons/hi';
import Container from '../ui/Container';
import { NAV_LINKS, CONTACT_INFO } from '../../constants/navigation';
import { IMAGES } from '../../constants/images';

/**
 * Editorial footer styled after cultural research institutes, utilizing a dark slate-teal base
 * from the palette, and adding list separators, custom links, and a scroll-to-top button.
 */
export default function Footer() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'youtube':
        return <FaYoutube className="h-5 w-5" />;
      case 'instagram':
        return <FaInstagram className="h-5 w-5" />;
      case 'spotify':
        return <FaSpotify className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const focusAreas = [
    { name: 'Stress Alleviation', path: '/focus-areas#stress' },
    { name: 'Anxiety Reduction', path: '/focus-areas#anxiety' },
    { name: 'Trauma Integration', path: '/focus-areas#trauma' },
    { name: 'Communal Resonance', path: '/focus-areas#loneliness' }
  ];

  return (
    <footer className="bg-[#172b29] text-bg/85 pt-20 pb-12 mt-auto w-full border-t border-[#234542]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#234542]">
          
          {/* Brand/Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <Link to="/" className="inline-flex items-center focus-visible:outline-none">
              <img
                src={IMAGES.logo.src}
                alt={IMAGES.logo.alt}
                className="h-24 sm:h-28 md:h-32 w-auto max-w-[280px] object-contain transition-opacity duration-300 hover:opacity-90"
              />
            </Link>
            <p className="font-sans text-xs sm:text-sm leading-relaxed max-w-md text-bg/75">
              A music-based mental wellness initiative. Helping people experiencing stress, anxiety, trauma, and loneliness through the healing power and scientific credibility of sound.
            </p>
            <div className="flex space-x-5 pt-2">
              {CONTACT_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bg/70 hover:text-secondary-accent transition-colors duration-300"
                  aria-label={social.ariaLabel}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Focus Points Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-lg sm:text-xl text-surface font-normal">
              Focus Points
            </h3>
            <ul className="space-y-3.5">
              {focusAreas.map((area) => (
                <li key={area.name} className="border-b border-[#234542]/60 pb-2.5 last:border-b-0 last:pb-0">
                  <Link
                    to={area.path}
                    className="font-sans text-xs sm:text-sm text-bg/85 hover:text-surface transition-colors duration-200 block"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-serif text-lg sm:text-xl text-surface font-normal">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path} className="border-b border-[#234542]/60 pb-2.5 last:border-b-0 last:pb-0">
                  <Link
                    to={link.path}
                    className="group flex justify-between items-center font-sans text-xs sm:text-sm text-bg/85 hover:text-surface transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 text-secondary-accent font-light">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-bg/60">
            <p className="font-sans text-xs tracking-widest uppercase italic">
            PRANAVA &copy; {new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </p>
          <div className="font-sans text-xs space-x-6">
            <span className="opacity-80">Research Credibility</span>
            <span className="opacity-80 font-light">|</span>
            <span className="opacity-80">Terms of Sanctuary</span>
          </div>
        </div>
      </Container>

      {/* Floating Scroll to Top button (similar to IKS IIT Delhi button) */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-secondary-accent text-surface p-3.5 hover:bg-[#8E6B30] transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-accent cursor-pointer"
          aria-label="Scroll to top"
        >
          <HiChevronUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
