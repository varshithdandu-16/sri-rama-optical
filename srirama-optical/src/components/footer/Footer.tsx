import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import {
  MdOutlineVisibility,
  MdOutlineFacebook,
  MdOutlineWhatsapp,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", to: ROUTES.HOME },
  { label: "Products", to: ROUTES.PRODUCTS },
  { label: "Services", to: ROUTES.SERVICES },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Contact", to: ROUTES.CONTACT },
];

const PHONE = "09959590255";
const WHATSAPP_HREF = `https://wa.me/919959590255`;
const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=1-7-10+Station+Road+Bhuvanagiri+Telangana";

// ─── Component ────────────────────────────────────────────────────────────────

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0F172A 0%, #080E1A 100%)",
        color: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
      }}
      aria-label="Site footer"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "40px",
          }}
          className="footer-grid"
        >
          {/* Column 1: Sri Rama Opticals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #D4AF37 0%, #b8952e 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 2px 12px rgba(212,175,55,0.3)",
                }}
                aria-hidden="true"
              >
                <MdOutlineVisibility size={20} color="#0F172A" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  Sri Rama Opticals
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Trusted optical care since 1979
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "280px",
              }}
            >
              Experience premium eye care and explore our wide collection of frames
              in person. We're here to help you find the perfect fit with expert
              consultations.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }} aria-label="Social links">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(37,211,102,0.15)";
                  e.currentTarget.style.borderColor = "rgba(37,211,102,0.4)";
                  e.currentTarget.style.color = "#25D366";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                <MdOutlineWhatsapp size={20} aria-hidden="true" />
              </a>
              <a
                href="#facebook"
                aria-label="Visit our Facebook page"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(24,119,242,0.15)";
                  e.currentTarget.style.borderColor = "rgba(24,119,242,0.4)";
                  e.currentTarget.style.color = "#1877F2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                <MdOutlineFacebook size={20} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#D4AF37",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {NAV_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === ROUTES.HOME}
                      style={({ isActive }) => ({
                        fontSize: "14px",
                        color: isActive ? "#D4AF37" : "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontWeight: isActive ? 600 : 400,
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      })}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.65)";
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ fontSize: "12px", color: "#D4AF37" }}
                      >
                        →
                      </span>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Column 3: Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#D4AF37",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Business Hours
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <FiClock
                  size={16}
                  style={{ color: "#D4AF37", marginTop: "2px", flexShrink: 0 }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>
                      Monday - Saturday
                    </span>
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                      9:30 AM - 8:00 PM
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500 }}>
                      Sunday
                    </span>
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                      9:30 AM - 3:00 PM
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "12px",
                  borderRadius: "8px",
                  borderLeft: "2px solid rgba(212,175,55,0.5)",
                  marginTop: "4px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "rgba(255,255,255,0.7)" }}>Note:</strong>{" "}
                  Extended service may be available on Sundays depending on customer
                  requirements and ongoing consultations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#D4AF37",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Contact Information
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Phone */}
              <a
                href={`tel:${PHONE}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D4AF37",
                  }}
                >
                  <FiPhone size={14} />
                </div>
                {PHONE}
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#25D366";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#25D366",
                  }}
                >
                  <MdOutlineWhatsapp size={16} />
                </div>
                Message us on WhatsApp
              </a>

              {/* Address */}
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D4AF37",
                    flexShrink: 0,
                  }}
                >
                  <FiMapPin size={16} />
                </div>
                <span>
                  1-7-10, Station Road,
                  <br />
                  Opp. SGM Raymond's Cloth Store,
                  <br />
                  Bhuvanagiri, Telangana 508116
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      />

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
            margin: 0,
          }}
        >
          © {currentYear} Sri Rama Opticals. All rights reserved.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
          >
            Terms of Service
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.4fr 0.8fr 1.2fr 1.2fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
