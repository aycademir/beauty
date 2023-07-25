import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls beyond a certain threshold
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    
        <button className={`scroll-up-button ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop} src='/ei_arrow-up.png'>
        <FontAwesomeIcon  className="scroll-up-button-icon" icon={faArrowUp} />
      </button>
    
  );
};

export default ScrollUpButton;
