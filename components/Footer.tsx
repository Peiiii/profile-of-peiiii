import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-neutral-800 bg-background text-center">
      <div className="container mx-auto px-6">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} NeoDev. Built with React, Tailwind & Gemini.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
