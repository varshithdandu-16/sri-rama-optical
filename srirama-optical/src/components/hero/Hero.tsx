import { motion } from "framer-motion";
import { FiPhone, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import {
  MdOutlineVisibility,
  MdOutlineVerified,
  MdOutlineSchool,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRUST_BADGES = [
  { icon: MdOutlineVerified, label: "45+ Years Experience" },
  { icon: MdOutlineVisibility, label: "Computerized Eye Testing" },
  { icon: MdOutlineSchool, label: "Student Offers Available" },
  { icon: MdOutlineLocalShipping, label: "International Delivery" },
];

const HIGHLIGHTS = [
  "Premium frames from top brands",
  "Professional optical consultation",
  "Trusted by thousands of families",
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// ─── Component ────────────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
      aria-label="Hero section"
    >
      {/* Background decorative circles */}
      <div aria-hidden="true">
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Text content */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "680px" }}
          >
            {/* Badge */}
            <motion.div variants={itemVariant}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(212,175,55,0.12)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  color: "#D4AF37",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#D4AF37",
                    display: "inline-block",
                  }}
                />
                Est. Since 1979 · Bhuvanagiri, Telangana
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariant}
              style={{
                fontSize: "clamp(32px, 5.5vw, 56px)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Your Vision,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Priority
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariant}
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                marginBottom: "32px",
                maxWidth: "520px",
              }}
            >
              Sri Rama Opticals — 45+ years of trusted optical care in Bhuvanagiri.
              Premium frames, computerized eye testing, and professional consultation
              all under one roof.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              variants={itemVariant}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "40px",
                listStyle: "none",
              }}
              aria-label="Key highlights"
            >
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "15px",
                  }}
                >
                  <FiCheckCircle
                    size={16}
                    color="#D4AF37"
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={itemVariant}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <a
                href="tel:09959590255"
                aria-label="Call Sri Rama Opticals at 09959590255"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  backgroundColor: "#D4AF37",
                  color: "#0F172A",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(212,175,55,0.40)",
                  transition: "all 0.22s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,175,55,0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(212,175,55,0.40)";
                }}
              >
                <FiPhone size={16} aria-hidden="true" strokeWidth={2.5} />
                Call Now
              </a>

              <Link
                to={ROUTES.PRODUCTS}
                aria-label="Explore our frame collection"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: "12px",
                  border: "2px solid rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "all 0.22s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Explore Collection
                <FiArrowRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
            aria-hidden="true"
            className="hero-visual"
          >
            <div
              style={{
                position: "relative",
                width: "340px",
                height: "340px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1px dashed rgba(212,175,55,0.25)",
                }}
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "30px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(212,175,55,0.15)",
                }}
              />

              {/* Center card */}
              <div
                style={{
                  width: "240px",
                  height: "240px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #D4AF37 0%, #b8952e 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(212,175,55,0.40)",
                  }}
                >
                  <MdOutlineVisibility size={36} color="#0F172A" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    Trusted Since
                  </p>
                  <p
                    style={{
                      fontSize: "36px",
                      fontWeight: 800,
                      color: "#D4AF37",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    1979
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.5)",
                      marginTop: "4px",
                    }}
                  >
                    Sri Rama Opticals
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          style={{
            marginTop: "64px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
            role="list"
            aria-label="Business highlights"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                role="listitem"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(212,175,55,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Icon size={18} color="#D4AF37" />
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.80)",
                    lineHeight: 1.3,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .hero-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;