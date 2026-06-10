import { motion } from "framer-motion";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { MdOutlineSchool, MdOutlineLocalOffer } from "react-icons/md";
import Container from "../common/Container";

// ─── Data ─────────────────────────────────────────────────────────────────────

const OFFER_HIGHLIGHTS = [
  "Special discounts for school & college students",
  "Valid on all frame categories",
  "Show your student ID at the store",
  "Contact us to know current offers",
];

// ─── Component ────────────────────────────────────────────────────────────────

const StudentOffers = () => {
  return (
    <section
      style={{
        padding: "64px 0",
        background: "linear-gradient(135deg, #D4AF37 0%, #b8952e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="student-offers-heading"
    >
      {/* Background decorations */}
      <div aria-hidden="true">
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-40px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            pointerEvents: "none",
          }}
        />
      </div>

      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="student-offers-grid"
        >
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "100px",
                marginBottom: "20px",
              }}
            >
              <MdOutlineLocalOffer size={14} aria-hidden="true" />
              Exclusive Offer
            </div>

            <h2
              id="student-offers-heading"
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Special Discounts
              <br />
              for Students
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(15,23,42,0.70)",
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "460px",
              }}
            >
              We believe every student deserves clear vision. Present your valid student ID
              and enjoy exclusive discounts on our entire eyewear collection.
            </p>

            {/* Offer points */}
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                listStyle: "none",
                marginBottom: "32px",
              }}
              aria-label="Student offer details"
            >
              {OFFER_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#0F172A",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href="tel:09959590255"
                aria-label="Call to enquire about student offers"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#0F172A",
                  color: "#FFFFFF",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "all 0.22s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1E293B";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0F172A";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FiPhone size={14} aria-hidden="true" strokeWidth={2.5} />
                Call for Details
              </a>
            </div>
          </motion.div>

          {/* Right: Decorative card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            style={{ display: "flex", justifyContent: "center" }}
            aria-hidden="true"
            className="student-card-visual"
          >
            <div
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.25)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdOutlineSchool size={40} color="#0F172A" />
              </div>
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(15,23,42,0.65)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  Student Special
                </p>
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#0F172A",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Discounts
                  <br />
                  Available
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "#0F172A",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                Contact Store
                <FiArrowRight size={12} />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 1024px) {
          .student-offers-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .student-card-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StudentOffers;