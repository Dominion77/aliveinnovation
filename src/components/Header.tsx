import React, { useEffect, useState } from 'react';
import type { MenuItem } from '../types';
import '../css/Header.css';

interface HeaderProps {
  menuItems: MenuItem[];
  activeSection: string;
  onNavigationClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ menuItems, activeSection, onNavigationClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-placeholder">
            <span className="logo-text">Alive Innovation Tech</span>
            <div className="glow-effect"></div>
          </div>
        </div>
        <nav className="navigation">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <button 
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => onNavigationClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;