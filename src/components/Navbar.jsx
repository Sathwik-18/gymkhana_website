import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clubCategories = [
    { title: 'Cultural Clubs', path: '/cultural-clubs' },
    { title: 'Technical Clubs', path: '/technical-clubs' },
    { title: 'Sports Clubs', path: '/sports-clubs' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <motion.div 
        className="nav-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="logo">
          <img src="gymkhana_logo.png" alt="Institute Logo" draggable={false}/>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-menu">
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a href="/">Home</a>
          </motion.li>
          
          <motion.li
            whileHover={{ scale: 1.1 }}
            onHoverStart={() => setShowDropdown(true)}
            onHoverEnd={() => setShowDropdown(false)}
          >
            <span>Clubs</span>
            <AnimatePresence>
              {showDropdown && (
                <motion.ul
                  className="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {clubCategories.map((club) => (
                    <motion.li
                      key={club.title}
                      whileHover={{ x: 10 }}
                    >
                      <a href={club.path}>{club.title}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>

          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/events">Events</a>
          </motion.li>
          
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/faqs">FAQs</a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <a href="/">Home</a>
              </motion.li>
              
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span onClick={() => setShowDropdown(!showDropdown)}>
                  Clubs {showDropdown ? '▼' : '▶'}
                </span>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.ul
                      className="mobile-dropdown"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {clubCategories.map((club, index) => (
                        <motion.li
                          key={club.title}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <a href={club.path}>{club.title}</a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a href="/events">Events</a>
              </motion.li>
              
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a href="/faqs">FAQs</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;