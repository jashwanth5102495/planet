import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Tomato() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-12 sm:pt-14 pb-6 sm:pb-8">
      <BackgroundVideo />
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>

      <IntroOverlay />
      <ProductCard
        brandName=""
        companyName="Planet"
        logoSrc="/vib.mp4"
        productName="MAX"
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Humic and Fulvic acid 76% (Powder)"
        composition={[]}
        crops="Tomato"
        dosage="Two foliar applications at 750 g/ha"
      />
    </div>
  );
}
