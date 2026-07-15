import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A utility component that scrolls the window to the top on every route change.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll immediately without animate scroll on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
