import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';
import Container from '../ui/Container';
import { NAV_LINKS, CONTACT_INFO } from '../../constants/navigation';

const subscriptionSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address')
});

/**
 * Editorial footer with structured pages, contact links, newsletter signup, and social media.
 */
export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(subscriptionSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API submit call
      await new Promise(resolve => setTimeout(resolve, 800));
      toast.success('Successfully subscribed to the Major & Minor letter.');
      reset();
    } catch (e) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-10 text-secondary-text mt-auto w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-divider">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-baseline space-x-1 focus-visible:outline-none">
              <span className="font-serif text-2xl font-normal tracking-wide text-primary-text hover:text-primary-accent transition-colors duration-300">
                Major <span className="font-sans text-lg font-light text-secondary-accent">&amp;</span> Minor
              </span>
            </Link>
            <p className="font-sans text-sm leading-relaxed max-w-sm">
              A music-based mental wellness initiative. Helping people experiencing stress, anxiety, trauma, and loneliness through the healing power and scientific credibility of sound.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans font-medium text-xs tracking-wider uppercase text-primary-text">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm hover:text-primary-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans font-medium text-xs tracking-wider uppercase text-primary-text">
              Inquiries
            </h3>
            <p className="font-sans text-sm leading-relaxed">
              {CONTACT_INFO.address}
            </p>
            <div className="space-y-1 font-sans text-sm">
              <p>
                Email:{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-primary-accent hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-primary-accent transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans font-medium text-xs tracking-wider uppercase text-primary-text">
              Newsletter
            </h3>
            <p className="font-sans text-sm leading-relaxed">
              Receive updates on research publications, therapeutic sessions, and events.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Email address for newsletter subscription"
                  className={`w-full bg-bg border ${
                    errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:ring-primary-accent'
                  } px-4 py-2.5 font-sans text-sm text-primary-text focus:outline-none`}
                  {...register('email')}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-accent text-surface hover:bg-hover-accent px-5 py-2.5 font-sans text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? '...' : 'Join'}
                </button>
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs font-sans mt-1">
                  {errors.email.message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Major &amp; Minor. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {CONTACT_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-primary-accent transition-colors duration-300"
                aria-label={social.ariaLabel}
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
