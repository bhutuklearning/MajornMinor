import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/**
 * Root Layout wrapping all pages. Ensures Navbar, dynamic page viewports, and Footer render consistently,
 * while resetting scroll height on transition.
 */
export default function RootLayout() {
  return (
    <>
      {/* Scroll listener for route resetting */}
      <ScrollToTop />

      {/* Sticky header navigation */}
      <Navbar />

      {/* Viewport content area */}
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      {/* Persistent footer */}
      <Footer />
    </>
  );
}
