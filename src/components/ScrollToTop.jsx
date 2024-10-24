import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div className="scroll-to-top" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
      &#8679;
    </div>
  );
};
