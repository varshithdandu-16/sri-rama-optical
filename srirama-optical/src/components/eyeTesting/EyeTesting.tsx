import { motion } from "framer-motion";
import { FiPhone, FiInfo } from "react-icons/fi";
import {
  MdOutlineMonitor,
  MdOutlinePeopleAlt,
  MdOutlineLens,
  MdOutlineCheckCircle,
} from "react-icons/md";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: MdOutlineMonitor,
    title: "Computerized Eye Testing",
    description:
      "Accurate vision assessment using modern computerized refraction equipment. Get your precise prescription quickly and comfortably.",
  },
  {
    icon: MdOutlinePeopleAlt,
    title: "Optical Consultation",
    description:
      "One-on-one consultation with our experienced opticians to understand your vision needs and lifestyle requirements.",
  },
  {
    icon: MdOutlineLens,
    title: "Lens Recommendation",
    description:
      "Expert guidance on choosing the right lens type — single vision, bifocal, or progressive — based on your prescription.",
  },
];

const CHECKLIST = [
  "No prior appointment needed",
  "Results in under 15 minutes",
  "Suitable for all age groups",
  "Prescription provided instantly",
];

// ─── Component ────────────────────────────────────────────────────────────────

const EyeTesting = () => {
  return (
    <section
      style={{ padding: "80px 0", background: "#F8FAFC" }}
      aria-labelledby="eye-testing-heading"
    >
      <Container>
        <SectionTitle
          title="Eye Testing & Consultation"
          subtitle="Professional optical services to keep your vision clear and comfortable"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="eye-testing-grid"
        >
          {/* Left: Service cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {SERVICES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px",
                    background: "#FFFFFF",
                    borderRadius: "14px",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 1px 4px rgba(15,23,42,0.05)",
                    transition: "box-shadow 0.22s ease, border-color 0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 6px 24px rgba(15,23,42,0.09)";
                    el.style.borderColor = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 1px 4px rgba(15,23,42,0.05)";
                    el.style.borderColor = "#E2E8F0";
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: "#0F172A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={22} color="#D4AF37" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "6px",
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.65 }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual + checklist */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* Stats card */}
            <div
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
                borderRadius: "20px",
                padding: "36px",
                marginBottom: "20px",
                border: "1px solid rgba(212,175,55,0.2)",
                boxShadow: "0 8px 32px rgba(15,23,42,0.15)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #D4AF37, #b8952e)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-hidden="true"
                >
                  <MdOutlineMonitor size={24} color="#0F172A" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "2px",
                    }}
                  >
                    Testing Available Now
                  </h3>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                    Walk-in · No appointment needed
                  </p>
                </div>
              </div>

              {/* Checklist */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  listStyle: "none",
                  marginBottom: "28px",
                }}
                aria-label="Eye testing highlights"
              >
                {CHECKLIST.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "14px",
                    }}
                  >
                    <MdOutlineCheckCircle
                      size={16}
                      color="#D4AF37"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="tel:09959590255"
                aria-label="Call to enquire about eye testing"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#D4AF37",
                  color: "#0F172A",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b8952e";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4AF37";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FiPhone size={14} aria-hidden="true" strokeWidth={2.5} />
                Call to Enquire
              </a>
            </div>

            {/* Disclaimer */}
            <div
              role="note"
              style={{
                display: "flex",
                gap: "10px",
                padding: "14px 16px",
                background: "#FEF9E7",
                borderRadius: "10px",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            >
              <FiInfo
                size={16}
                color="#D4AF37"
                style={{ flexShrink: 0, marginTop: "2px" }}
                aria-hidden="true"
              />
              <p style={{ fontSize: "12px", color: "#92400E", lineHeight: 1.6, margin: 0 }}>
                <strong>Please note:</strong> Sri Rama Opticals provides optical testing and
                consultation services. We are not a medical treatment centre or eye hospital.
                Customers requiring medical treatment will be referred to appropriate specialists.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 1024px) {
          .eye-testing-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EyeTesting;