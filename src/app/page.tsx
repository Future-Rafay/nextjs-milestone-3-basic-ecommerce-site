import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testmonials';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
