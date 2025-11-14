import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EquipmentGrid from '@/components/EquipmentGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EquipmentGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
