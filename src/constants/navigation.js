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
  email: 'animesh.patra@adm.iitkgp.ac.in',
  phone: '+91-9933137876',
  address: 'The Academy of Classical and Folk Arts, IIT Kharagpur, West Bengal, India',
  socials: [
    { name: 'YouTube', url: 'https://youtube.com', ariaLabel: 'Pranava YouTube Channel' },
    { name: 'Instagram', url: 'https://instagram.com', ariaLabel: 'Pranava Instagram Page' },
    { name: 'Spotify', url: 'https://spotify.com', ariaLabel: 'Pranava Spotify Playlists' }
  ]
};
