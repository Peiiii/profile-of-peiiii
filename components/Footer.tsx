import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t border-neutral-800 bg-background text-center">
      <div className="container mx-auto px-6">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Peiiii. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
