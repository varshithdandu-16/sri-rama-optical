import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{ textAlign: align, marginBottom: "48px" }}
    >
      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 700,
          color: light ? "#FFFFFF" : "#0F172A",
          letterSpacing: "-0.02em",
          marginBottom: "12px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      {/* Gold accent underline */}
      <div
        style={{
          display: align === "center" ? "flex" : "block",
          justifyContent: "center",
          marginBottom: subtitle ? "16px" : "0",
        }}
      >
        <span
          style={{
            display: "block",
            width: "48px",
            height: "3px",
            background: "linear-gradient(90deg, #D4AF37, #b8952e)",
            borderRadius: "2px",
            marginLeft: align === "left" ? "0" : "auto",
            marginRight: align === "left" ? "auto" : "auto",
          }}
          aria-hidden="true"
        />
      </div>

      {subtitle && (
        <p
          style={{
            fontSize: "16px",
            color: light ? "rgba(255,255,255,0.75)" : "#64748B",
            maxWidth: "560px",
            margin: align === "center" ? "0 auto" : "0",
            lineHeight: 1.7,
            marginTop: "12px",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
