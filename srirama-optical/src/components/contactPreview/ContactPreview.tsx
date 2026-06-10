import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { MdDirections, MdOutlineWhatsapp } from "react-icons/md";
import Container from "../common/Container";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE_NUMBER = "09959590255";
const WHATSAPP_LINK = "https://wa.me/919959590255";
const MAPS_LINK =
  "https://maps.app.goo.gl/jhzYX2RvtQjBVy8A6";

// ─── Component ────────────────────────────────────────────────────────────────

const ContactPreview = () => {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="contact-preview-heading"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="contact-preview-heading"
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Visit Our Store Today
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Experience premium eye care and explore our wide collection of
              frames in person. We're here to help you find the perfect fit.
            </p>
          </motion.div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "1fr",
          }}
          className="contact-preview-grid"
        >
          {/* Info Cards */}
          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "1fr",
            }}
            className="info-cards-grid"
          >
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(212,175,55,0.05)";
                el.style.borderColor = "rgba(212,175,55,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(212,175,55,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D4AF37",
                  flexShrink: 0,
                }}
              >
                <FiPhone size={24} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Call Us
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "12px",
                  }}
                >
                  Speak directly with our eye care experts.
                </p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  style={{
                    color: "#D4AF37",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(37,211,102,0.05)";
                el.style.borderColor = "rgba(37,211,102,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(37,211,102,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#25D366",
                  flexShrink: 0,
                }}
              >
                <MdOutlineWhatsapp size={28} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  WhatsApp
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "12px",
                  }}
                >
                  Send us a message for quick queries.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#25D366",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  Chat with us →
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(212,175,55,0.05)";
                el.style.borderColor = "rgba(212,175,55,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(212,175,55,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D4AF37",
                  flexShrink: 0,
                }}
              >
                <FiMapPin size={24} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Location
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  1-7-10, Station Road,
                  <br />
                  Opp. SGM Raymond's Cloth Store,
                  <br />
                  Bhuvanagiri, Telangana 508116
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(212,175,55,0.05)";
                el.style.borderColor = "rgba(212,175,55,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(212,175,55,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D4AF37",
                  flexShrink: 0,
                }}
              >
                <FiClock size={24} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Business Hours
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 500,
                      }}
                    >
                      Mon - Sat:
                    </span>
                    <span style={{ color: "#D4AF37", fontWeight: 600 }}>
                      9:30 AM - 8:00 PM
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 500,
                      }}
                    >
                      Sunday:
                    </span>
                    <span style={{ color: "#D4AF37", fontWeight: 600 }}>
                      9:30 AM - 3:00 PM
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    borderLeft: "3px solid #D4AF37",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    <strong style={{ color: "rgba(255,255,255,0.8)" }}>
                      Note:
                    </strong>{" "}
                    Extended service may be available on Sundays depending on
                    customer requirements and ongoing consultations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Map and Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Interactive Map */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "340px",
                borderRadius: "16px",
                border: "1px solid rgba(212,175,55,0.2)",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(15,23,42,0.4)",
              }}
            >
              <iframe
                title="Sri Rama Opticals Location"
                src="https://maps.google.com/maps?q=Sri+Rama+Opticals,+Station+Road,+Bhuvanagiri,+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  background: "rgba(15,23,42,0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(212,175,55,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D4AF37",
                  }}
                >
                  <FiMapPin size={18} />
                </div>
                <div>
                  <h4 style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 700, margin: 0, marginBottom: "2px" }}>
                    Sri Rama Opticals
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: 0 }}>
                    Bhuvanagiri, Telangana
                  </p>
                </div>
              </div>

              {/* Open in Map Overlay Button */}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "#D4AF37",
                  color: "#0F172A",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 12px rgba(212,175,55,0.3)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Open in Maps
                <MdDirections size={16} />
              </a>
            </motion.div>

            {/* Action Buttons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
              className="action-buttons-grid"
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "16px 24px",
                  background: "#D4AF37",
                  color: "#0F172A",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 16px rgba(212, 175, 55, 0.2)",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 24px rgba(212, 175, 55, 0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 16px rgba(212, 175, 55, 0.2)";
                }}
              >
                <FiPhone size={20} />
                Call Now
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "16px 24px",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "transparent";
                  el.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                <MdDirections size={22} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
      <style>{`
        @media (min-width: 1024px) {
          .contact-preview-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
          .info-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .action-buttons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactPreview;