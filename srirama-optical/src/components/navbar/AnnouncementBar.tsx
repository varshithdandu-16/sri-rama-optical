import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { MdSchool } from "react-icons/md";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        background: "linear-gradient(90deg, #080E1A 0%, #0F172A 50%, #080E1A 100%)",
        color: "#FFFFFF",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        zIndex: 1001, // Above navbar which is 1000
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "8px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            fontSize: "12px",
          }}
        >
          {/* Left section: Location & Phone */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)" }}>
              <FiMapPin size={14} color="#D4AF37" />
              <span>Bhuvanagiri, Telangana</span>
            </div>
            <a
              href="tel:09959590255"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              <FiPhone size={14} color="#D4AF37" />
              <span>09959590255</span>
            </a>
          </div>

          {/* Middle section: Student offer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#D4AF37",
              fontWeight: 600,
            }}
          >
            <MdSchool size={16} />
            <span>Student Discounts Available</span>
          </div>

          {/* Right section: Hours */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)" }}>
              <FiClock size={14} color="#D4AF37" />
              <span>Mon-Sat: 9:30 AM – 8:00 PM</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)" }}>
              <FiClock size={14} color="#D4AF37" />
              <span>Sunday: 9:30 AM – 3:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div style={{ textAlign: "center", width: "100%" }}>
          <p
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            <span style={{ color: "#D4AF37" }}>* </span>
            Services may continue beyond scheduled hours based on customer consultations and ongoing appointments.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
