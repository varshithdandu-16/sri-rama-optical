import { motion } from "framer-motion";
import {
  MdOutlineVerified,
  MdOutlineVisibility,
  MdOutlinePeopleAlt,
  MdOutlineDiamond,
  MdOutlineThumbUp,
} from "react-icons/md";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRUST_CARDS = [
  {
    icon: MdOutlineVerified,
    title: "45+ Years of Excellence",
    description:
      "Established in 1979, Sri Rama Opticals has been serving Bhuvanagiri and surrounding areas with trusted optical care for over four decades.",
    stat: "45+",
    statLabel: "Years",
  },
  {
    icon: MdOutlineVisibility,
    title: "Computerized Eye Testing",
    description:
      "We use modern computerized equipment to ensure accurate eye measurements and the right lens prescription for every customer.",
    stat: "100%",
    statLabel: "Accurate",
  },
  {
    icon: MdOutlinePeopleAlt,
    title: "Professional Consultation",
    description:
      "Our experienced opticians provide personalised consultation to help you choose frames and lenses that suit your vision and lifestyle.",
    stat: "1000+",
    statLabel: "Customers",
  },
  {
    icon: MdOutlineDiamond,
    title: "Premium Quality Frames",
    description:
      "We stock a wide range of premium frames from trusted national and international brands to match every budget and style preference.",
    stat: "500+",
    statLabel: "Frame Styles",
  },
  {
    icon: MdOutlineThumbUp,
    title: "Customer Satisfaction",
    description:
      "Thousands of satisfied customers across Bhuvanagiri trust us for their vision needs — from everyday glasses to high-end designer frames.",
    stat: "5★",
    statLabel: "Rated",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const WhyChooseUs = () => {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="why-choose-heading"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <SectionTitle
          title="Why Choose Sri Rama Opticals?"
          subtitle="Four decades of trust, expertise, and genuine care for your vision"
          light
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
          role="list"
          aria-label="Reasons to choose us"
        >
          {TRUST_CARDS.map(({ icon: Icon, title, description, stat, statLabel }, index) => (
            <motion.div
              key={title}
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px",
                transition: "border-color 0.25s ease, background 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(212,175,55,0.35)";
                el.style.background = "rgba(212,175,55,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Icon + stat row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(212,175,55,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                  aria-hidden="true"
                >
                  <Icon size={24} color="#D4AF37" />
                </div>

                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "#D4AF37",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                    aria-label={`${stat} ${statLabel}`}
                  >
                    {stat}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.4)",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {statLabel}
                  </p>
                </div>
              </div>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.60)",
                  lineHeight: 1.7,
                }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;