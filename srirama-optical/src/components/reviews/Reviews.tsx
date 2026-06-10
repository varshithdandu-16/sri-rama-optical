import { motion } from "framer-motion";
import { MdStar, MdStarHalf } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

// ─── Interfaces ───────────────────────────────────────────────────────────────

interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Ravi Kumar",
    date: "2 weeks ago",
    rating: 5,
    text: "Excellent service! I've been getting my glasses here for the last 10 years. The staff is very professional and the computerized testing is very accurate.",
  },
  {
    id: "r2",
    name: "Sneha Reddy",
    date: "1 month ago",
    rating: 5,
    text: "Wide variety of premium frames. The staff helped me choose a frame that suits my face perfectly. Highly recommend Sri Rama Opticals.",
  },
  {
    id: "r3",
    name: "Karthik Sharma",
    date: "3 months ago",
    rating: 5,
    text: "Got my progressive lenses done here. The quality is top-notch and the price was reasonable. Delivery was on time as promised.",
  },
  {
    id: "r4",
    name: "Anjali Desai",
    date: "4 months ago",
    rating: 5,
    text: "Very patient staff, especially with kids. We got frames for my 8-year-old and the experience was smooth. Good collection of durable kids' frames.",
  },
  {
    id: "r5",
    name: "Mohan Rao",
    date: "6 months ago",
    rating: 5,
    text: "Best optical store in Bhuvanagiri. Trustworthy and reliable. The after-sales service for frame adjustments is also very good.",
  },
  {
    id: "r6",
    name: "Priya Singh",
    date: "8 months ago",
    rating: 5,
    text: "Purchased Ray-Ban sunglasses. Authentic products and great customer service. Will definitely visit again for my regular spectacles.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Reviews = () => {
  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <MdStar key={`star-${i}`} size={18} color="#D4AF37" aria-hidden="true" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <MdStarHalf key="star-half" size={18} color="#D4AF37" aria-hidden="true" />
      );
    }

    // Add empty stars if rating is less than 5 to keep alignment
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <MdStar
          key={`star-empty-${i}`}
          size={18}
          color="rgba(255,255,255,0.15)"
          aria-hidden="true"
        />
      );
    }

    return stars;
  };

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="reviews-heading"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          {/* Overall Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", marginBottom: "24px" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(212,175,55,0.3)",
                padding: "8px 20px",
                borderRadius: "100px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex" }}>
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} size={18} color="#D4AF37" aria-hidden="true" />
                ))}
              </div>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                4.9/5 Customer Satisfaction
              </span>
            </div>
          </motion.div>

          <SectionTitle
            title="Trusted by Our Customers"
            subtitle="See what our customers say about their experience with Sri Rama Opticals."
            light
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
          role="list"
          aria-label="Customer reviews"
        >
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              role="listitem"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "default",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(212,175,55,0.05)";
                el.style.borderColor = "rgba(212,175,55,0.3)";
                el.style.boxShadow = "0 12px 40px rgba(15,23,42,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Decorative quote icon */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  opacity: 0.1,
                  color: "#D4AF37",
                }}
                aria-hidden="true"
              >
                <FiMessageSquare size={48} />
              </div>

              {/* Rating */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  marginBottom: "20px",
                }}
                aria-label={`Rated ${review.rating} out of 5 stars`}
              >
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  flexGrow: 1,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginTop: "auto",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #D4AF37 0%, #b8952e 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0F172A",
                    fontWeight: 700,
                    fontSize: "16px",
                    boxShadow: "0 4px 12px rgba(212,175,55,0.3)",
                  }}
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "2px",
                    }}
                  >
                    {review.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 500,
                    }}
                  >
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;