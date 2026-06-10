import { motion } from "framer-motion";
import {
  MdOutlineRectangle,
  MdOutlineWbSunny,
  MdChildCare,
  MdOutlineRemoveRedEye,
  MdOutlineAutoAwesome,
  MdOutlineWaterDrop,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "full-frame",
    icon: MdOutlineRectangle,
    label: "Full Frame",
    description: "Classic full-rim frames for bold, defined looks",
    color: "#0F172A",
  },
  {
    id: "half-frame",
    icon: MdOutlineAutoAwesome,
    label: "Half Frame",
    description: "Lightweight semi-rimless design for a modern edge",
    color: "#1E3A5F",
  },
  {
    id: "frameless",
    icon: MdOutlineRemoveRedEye,
    label: "Frameless",
    description: "Minimalist rimless frames for understated elegance",
    color: "#1E293B",
  },
  {
    id: "transparent",
    icon: MdOutlineWaterDrop,
    label: "Transparent",
    description: "Crystal-clear frames for a fresh, versatile style",
    color: "#0F2744",
  },
  {
    id: "kids",
    icon: MdChildCare,
    label: "Kids Frames",
    description: "Durable, comfortable frames designed for young eyes",
    color: "#1A3A2A",
  },
  {
    id: "sunglasses",
    icon: MdOutlineWbSunny,
    label: "Sunglasses",
    description: "Premium UV-protection sunglasses for every style",
    color: "#3D2B00",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Categories = () => {
  return (
    <section
      style={{ padding: "80px 0", background: "#F8FAFC" }}
      aria-labelledby="categories-heading"
    >
      <Container>
        <SectionTitle
          title="Browse by Category"
          subtitle="Find the perfect eyewear that matches your style and needs"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
          role="list"
          aria-label="Eyewear categories"
        >
          {CATEGORIES.map(({ id, icon: Icon, label, description, color }, index) => (
            <motion.div
              key={id}
              role="listitem"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={`${ROUTES.PRODUCTS}?category=${id}`}
                aria-label={`Browse ${label}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    border: "1px solid #E2E8F0",
                    transition: "all 0.25s ease",
                    boxShadow: "0 1px 3px rgba(15,23,42,0.06)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#D4AF37";
                    el.style.boxShadow = "0 8px 32px rgba(212,175,55,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#E2E8F0";
                    el.style.boxShadow = "0 1px 3px rgba(15,23,42,0.06)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={26} color="#D4AF37" />
                  </div>

                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "6px",
                    }}
                  >
                    {label}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#64748B",
                      lineHeight: 1.6,
                    }}
                  >
                    {description}
                  </p>

                  {/* Arrow */}
                  <div
                    style={{
                      marginTop: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#D4AF37",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Browse
                    <span aria-hidden="true" style={{ fontSize: "16px" }}>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;