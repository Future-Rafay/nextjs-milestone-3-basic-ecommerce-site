import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testmonials';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Category';



const Home = () => {
  return (
    <div className="max-w-7xl mx-auto border-x-2 border-primary bg-primary-foreground">
      <Hero />

      <FeaturedProducts />
      <Categories />

      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
