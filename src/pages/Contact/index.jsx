import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';
import SEO from '../../components/common/SEO';
import PageBanner from '../../components/ui/PageBanner';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import { IMAGES } from '../../constants/images';
import { CONTACT_INFO } from '../../constants/navigation';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(60, 'Name is too long'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  subject: z.enum(['general', 'research', 'booking', 'support'], {
    errorMap: () => ({ message: 'Please select an inquiry topic' })
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long')
});

/**
 * Contact Us page featuring double-column layouts, active query param handling,
 * Zod validation schema, and custom submit response hooks.
 */
export default function Contact() {
  const [searchParams] = useSearchParams();
  
  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: 'general',
      message: ''
    }
  });

  // Watch URL params to auto populate booking information
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const eventParam = searchParams.get('event');

    if (subjectParam === 'booking') {
      setValue('subject', 'booking');
      if (eventParam) {
        setValue('message', `Hello, I would like to reserve my place and register for the upcoming workshop: "${eventParam}". Please send me details on session availability and reservations.`);
      }
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data) => {
    try {
      // Simulate API submit request
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Your message has been sent successfully. Our team will contact you shortly.');
      reset({
        name: '',
        email: '',
        subject: 'general',
        message: ''
      });
    } catch (e) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <SEO 
        title="Connect With Us" 
        description="Get in touch with the Major &amp; Minor research team, inquire about sound healing events, or explore collaboration opportunities." 
      />

      <PageBanner 
        image={IMAGES.about.hero} 
        alt="Contact us header banner"
        title="Connect With Us" 
        subtitle="Contact"
      />

      <section className="py-20 bg-surface w-full">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block mb-3">
                  Reach Out
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-primary-text font-normal leading-tight tracking-tight">
                  We welcome research partnerships, workshop bookings, and general inquiries.
                </h2>
              </div>

              {/* Office Details */}
              <div className="space-y-4 font-sans text-sm text-secondary-text">
                <div>
                  <h3 className="font-sans font-medium text-xs uppercase tracking-wider text-primary-text mb-1">
                    Sanctuary &amp; Office Coordinates
                  </h3>
                  <p className="leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
                
                <div>
                  <h3 className="font-sans font-medium text-xs uppercase tracking-wider text-primary-text mb-1">
                    Telephone Inquiries
                  </h3>
                  <p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Centralized Email Coordinates */}
              <div className="space-y-3 pt-4 border-t border-divider font-sans text-sm">
                <h3 className="font-sans font-medium text-xs uppercase tracking-wider text-primary-text mb-1">
                  Centralized Email Endpoints
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="text-secondary-text block text-xs">General &amp; General Press:</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary-accent hover:underline font-medium">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                  <p>
                    <span className="text-secondary-text block text-xs">Research &amp; Academic Collaboration:</span>
                    <a href="mailto:research@majorandminor.org" className="text-primary-accent hover:underline font-medium">
                      research@majorandminor.org
                    </a>
                  </p>
                  <p>
                    <span className="text-secondary-text block text-xs">Workshop Booking &amp; Private Sessions:</span>
                    <a href="mailto:events@majorandminor.org" className="text-primary-accent hover:underline font-medium">
                      events@majorandminor.org
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-7 bg-bg border border-border p-8 sm:p-10"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl text-primary-text font-normal border-b border-divider pb-4">
                  Send an Inquiry
                </h3>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-sans text-xs uppercase tracking-wider text-primary-text font-medium block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full bg-surface border ${
                      errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:ring-primary-accent'
                    } px-4 py-3 font-sans text-sm focus:outline-none`}
                    placeholder="Enter your name"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-sans mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-sans text-xs uppercase tracking-wider text-primary-text font-medium block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full bg-surface border ${
                      errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:ring-primary-accent'
                    } px-4 py-3 font-sans text-sm focus:outline-none`}
                    placeholder="Enter your email"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-sans mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Selection */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-sans text-xs uppercase tracking-wider text-primary-text font-medium block">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    className={`w-full bg-surface border ${
                      errors.subject ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:ring-primary-accent'
                    } px-4 py-3 font-sans text-sm text-primary-text focus:outline-none`}
                    {...register('subject')}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Collaboration</option>
                    <option value="booking">Workshop Booking</option>
                    <option value="support">General Support</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-xs font-sans mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-sans text-xs uppercase tracking-wider text-primary-text font-medium block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full bg-surface border ${
                      errors.message ? 'border-red-500 focus-visible:ring-red-500' : 'border-border focus-visible:ring-primary-accent'
                    } px-4 py-3 font-sans text-sm focus:outline-none resize-none`}
                    placeholder="Describe your inquiry..."
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs font-sans mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </div>
              </form>
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  );
}
