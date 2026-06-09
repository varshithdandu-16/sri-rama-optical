import MainLayout from "../../layouts/MainLayout";

import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import ProductGrid from "../../components/product/ProductGrid";
import EyeTesting from "../../components/eyeTesting/EyeTesting";
import StudentOffers from "../../components/studentOffers/StudentOffers";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import Reviews from "../../components/reviews/Reviews";
import ContactPreview from "../../components/contactPreview/ContactPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid />
      <EyeTesting />
      <StudentOffers />
      <WhyChooseUs />
      <Reviews />
      <ContactPreview />
    </>
  );
};

export default Home;