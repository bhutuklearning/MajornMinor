export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { 
    label: 'About Us', 
    path: '/about',
    dropdown: [
      { label: 'Our Story', path: '/about' },
      { label: 'Our Team', path: '/team' }
    ]
  },
  { label: 'Focus Areas', path: '/focus-areas' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' }
];

export const CONTACT_INFO = {
  email: 'musictherapylabpranava@gmail.com',
  phone: '+91-9933137876',
  address: 'The Academy of Classical and Folk Arts, IIT Kharagpur, West Bengal, India',
  socials: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/19HwT7tALE/',
      ariaLabel: 'Pranava Facebook Page',
      external: true
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pranava-the-music-therapy-lab-12a7a6426/',
      ariaLabel: 'Pranava LinkedIn Profile',
      external: true
    },
    {
      name: 'Email',
      url: 'mailto:musictherapylabpranava@gmail.com',
      ariaLabel: 'Email Pranava',
      external: false
    }
  ]
};
