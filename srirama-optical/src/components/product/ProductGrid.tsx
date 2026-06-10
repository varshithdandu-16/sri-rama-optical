import { motion } from "framer-motion";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: "p1",
    brand: "Ray-Ban",
    name: "Classic Aviator",
    category: "Full Frame",
    gradient: "linear-gradient(135deg, #1E293B 0%, #334155 100%)",
    accentColor: "#D4AF37",
  },
  {
    id: "p2",
    brand: "Titan",
    name: "Slim Rimless",
    category: "Frameless",
    gradient: "linear-gradient(135deg, #0F2744 0%, #1E3A5F 100%)",
    accentColor: "#60A5FA",
  },
  {
    id: "p3",
    brand: "Fastrack",
    name: "Sport Shield",
    category: "Sunglasses",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
    accentColor: "#F59E0B",
  },
  {
    id: "p4",
    brand: "Vogue",
    name: "Crystal Clear",
    category: "Transparent",
    gradient: "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)",
    accentColor: "#0369A1",
  },
  {
    id: "p5",
    brand: "Lenskart",
    name: "Kids Flex",
    category: "Kids Frames",
    gradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    accentColor: "#059669",
  },
  {
    id: "p6",
    brand: "Oakley",
    name: "Half-Rim Pro",
    category: "Half Frame",
    gradient: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
    accentColor: "#D97706",
  },
];

// ─── Sub-component: Product Card ──────────────────────────────────────────────

interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  gradient: string;
  accentColor: string;
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const isLight = ["p4", "p5", "p6"].includes(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #E2E8F0",
        boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 12px 40px rgba(15,23,42,0.12)";
        el.style.borderColor = "#D4AF37";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 1px 4px rgba(15,23,42,0.06)";
        el.style.borderColor = "#E2E8F0";
      }}
    >
      {/* Product image area */}
      <div
        style={{
          height: "180px",
          background: product.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        {/* Decorative eyeglass SVG */}
        <svg
          viewBox="0 0 200 80"
          width="140"
          height="56"
          fill="none"
          aria-hidden="true"
        >
          {/* Left lens */}
          <rect
            x="8"
            y="16"
            width="72"
            height="48"
            rx="14"
            stroke={isLight ? product.accentColor : "rgba(255,255,255,0.6)"}
            strokeWidth="5"
            fill={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.07)"}
          />
          {/* Right lens */}
          <rect
            x="120"
            y="16"
            width="72"
            height="48"
            rx="14"
            stroke={isLight ? product.accentColor : "rgba(255,255,255,0.6)"}
            strokeWidth="5"
            fill={isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.07)"}
          />
          {/* Bridge */}
          <path
            d="M80 40 Q100 30 120 40"
            stroke={isLight ? product.accentColor : "rgba(255,255,255,0.6)"}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Left temple */}
          <line
            x1="8"
            y1="36"
            x2="-8"
            y2="36"
            stroke={isLight ? product.accentColor : "rgba(255,255,255,0.4)"}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Right temple */}
          <line
            x1="192"
            y1="36"
            x2="208"
            y2="36"
            stroke={isLight ? product.accentColor : "rgba(255,255,255,0.4)"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            backgroundColor: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            color: "#FFFFFF",
            fontSize: "11px",
            fontWeight: 600,
            padding: "4px 10px",
            borderRadius: "100px",
            letterSpacing: "0.05em",
          }}
        >
          {product.category}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#D4AF37",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          {product.brand}
        </p>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#0F172A",
            marginBottom: "16px",
          }}
        >
          {product.name}
        </h3>

        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href="tel:09959590255"
            aria-label={`Enquire about ${product.name} by ${product.brand}`}
            style={{
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              backgroundColor: "#D4AF37",
              color: "#0F172A",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              padding: "9px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#b8952e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D4AF37";
            }}
          >
            <FiPhone size={13} aria-hidden="true" strokeWidth={2.5} />
            Enquire
          </a>

          <Link
            to={`${ROUTES.PRODUCTS}/${product.id}`}
            aria-label={`View details of ${product.name}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              backgroundColor: "transparent",
              color: "#0F172A",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              padding: "9px 12px",
              borderRadius: "8px",
              border: "1px solid #E2E8F0",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0F172A";
              e.currentTarget.style.backgroundColor = "#F8FAFC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Details
            <FiArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const ProductGrid = () => {
  return (
    <section
      style={{ padding: "80px 0", background: "#FFFFFF" }}
      aria-labelledby="products-heading"
    >
      <Container>
        <SectionTitle
          title="Featured Collection"
          subtitle="Explore our handpicked selection of premium eyewear for every style and occasion"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <Link
            to={ROUTES.PRODUCTS}
            aria-label="View all products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#0F172A",
              color: "#FFFFFF",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "13px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              transition: "all 0.22s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1E293B";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,0.20)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0F172A";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View All Products
            <FiArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProductGrid;