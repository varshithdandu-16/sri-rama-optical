import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { ROUTES } from "../../constants/routes";
import Container from "../common/Container";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  to: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: ROUTES.HOME },
  { label: "Products", to: ROUTES.PRODUCTS },
  { label: "Eye Testing", to: ROUTES.SERVICES },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Contact", to: ROUTES.CONTACT },
];

const PHONE_NUMBER = "09959590255";
const PHONE_HREF = `tel:${PHONE_NUMBER}`;

// ─── Animation Variants ───────────────────────────────────────────────────────

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mobileNavItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08 + 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

// ─── Main Component ───────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "'Poppins', sans-serif",
        background: scrolled
          ? "rgba(10, 15, 30, 0.85)"
          : "rgba(10, 15, 30, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.3)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212, 175, 55, 0.15)"
          : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-label="Main Navigation"
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? "80px" : "100px",
            transition: "height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* ── Logo & Branding ──────────────────────────────────────────────── */}
          <NavLink
            to={ROUTES.HOME}
            aria-label="Home"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: scrolled ? "48px" : "56px",
                height: scrolled ? "48px" : "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #D4AF37 0%, #AA8C2C 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
                transition: "all 0.4s ease",
              }}
              aria-hidden="true"
            >
              <MdOutlineVisibility
                size={scrolled ? 24 : 28}
                color="#0A0F1E"
                style={{ transition: "all 0.4s ease" }}
              />
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span
                style={{
                  fontSize: scrolled ? "18px" : "22px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  transition: "font-size 0.4s ease",
                }}
              >
                Sri Rama Opticals
              </span>
              <span
                style={{
                  fontSize: scrolled ? "11px" : "12px",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                  transition: "font-size 0.4s ease",
                }}
              >
                Trusted Since 1979
              </span>
            </div>
          </NavLink>

          {/* ── Desktop Navigation ─────────────────────────────────────────── */}
          <nav
            className="desktop-nav"
            aria-label="Desktop Navigation"
            style={{ display: "none" }}
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === ROUTES.HOME}
                    style={{ position: "relative", display: "inline-block" }}
                    className="nav-link-item"
                  >
                    {({ isActive }) => (
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          textDecoration: "none",
                          color: isActive ? "#D4AF37" : "rgba(255,255,255,0.8)",
                          padding: "8px 0",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {item.label}
                        {/* Animated Active/Hover Indicator */}
                        {isActive ? (
                          <motion.div
                            layoutId="activeNavIndicator"
                            style={{
                              position: "absolute",
                              bottom: -4,
                              left: 0,
                              right: 0,
                              height: "3px",
                              background: "linear-gradient(90deg, #D4AF37 0%, #F3E5AB 100%)",
                              borderRadius: "3px",
                              boxShadow: "0 2px 8px rgba(212,175,55,0.5)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        ) : (
                          <div className="hover-indicator" />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Desktop CTA ────────────────────────────────────────────────── */}
          <div className="desktop-cta" style={{ display: "none" }}>
            <motion.a
              href={PHONE_HREF}
              aria-label="Call Now"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 28px rgba(212, 175, 55, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #D4AF37 0%, #AA8C2C 100%)",
                color: "#0A0F1E",
                padding: "12px 28px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(212, 175, 55, 0.2)",
                transition: "background 0.3s ease",
              }}
            >
              <FiPhone size={18} strokeWidth={2.5} />
              Call Now
            </motion.a>
          </div>

          {/* ── Mobile Menu Toggle ─────────────────────────────────────────── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: menuOpen ? "rgba(212, 175, 55, 0.15)" : "rgba(255, 255, 255, 0.05)",
              border: menuOpen ? "1px solid rgba(212, 175, 55, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
              color: menuOpen ? "#D4AF37" : "#FFFFFF",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              zIndex: 1002, // Above drawer
              position: "relative",
            }}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </Container>

      {/* ── Mobile Drawer ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation menu"
            aria-modal="true"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(10, 15, 30, 0.98)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              zIndex: 1001,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="mobile-menu-container"
          >
            <Container>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.to}
                      custom={i}
                      variants={mobileNavItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === ROUTES.HOME}
                        onClick={() => setMenuOpen(false)}
                        style={({ isActive }) => ({
                          display: "inline-block",
                          fontSize: "24px",
                          fontWeight: 700,
                          textDecoration: "none",
                          color: isActive ? "#D4AF37" : "#FFFFFF",
                          padding: "8px 16px",
                          position: "relative",
                          transition: "color 0.3s ease",
                        })}
                      >
                        {({ isActive }) => (
                          <>
                            {item.label}
                            {isActive && (
                              <motion.div
                                layoutId="mobileActiveNav"
                                style={{
                                  position: "absolute",
                                  bottom: 0,
                                  left: "20%",
                                  right: "20%",
                                  height: "3px",
                                  background: "#D4AF37",
                                  borderRadius: "3px",
                                }}
                              />
                            )}
                          </>
                        )}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  custom={NAV_ITEMS.length}
                  variants={mobileNavItemVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ marginTop: "24px", width: "100%", maxWidth: "300px" }}
                >
                  <a
                    href={PHONE_HREF}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      width: "100%",
                      background: "linear-gradient(135deg, #D4AF37 0%, #AA8C2C 100%)",
                      color: "#0A0F1E",
                      padding: "18px",
                      borderRadius: "16px",
                      fontSize: "18px",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 8px 32px rgba(212, 175, 55, 0.3)",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <FiPhone size={22} strokeWidth={2.5} />
                    Call Now
                  </a>
                </motion.div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CSS for Hover & Responsiveness ─────────────────────────────── */}
      <style>{`
        .hover-indicator {
          position: absolute;
          bottom: -4px;
          left: 50%;
          right: 50%;
          height: 2px;
          background: rgba(212, 175, 55, 0.5);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .nav-link-item:hover .hover-indicator {
          left: 0;
          right: 0;
          background: rgba(212, 175, 55, 0.8);
        }

        .nav-link-item:hover > div {
          color: #FFFFFF !important;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-cta {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu-container {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
