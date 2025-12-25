import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Paddy() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-12 sm:pt-14 pb-6 sm:pb-8">
      <BackgroundVideo />
      {/* Dark overlay to improve text visibility */}
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      {/* Animated gradient overlay behind the blurred background */}
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>

      <IntroOverlay />
      <ProductCard
        brandName=""
        companyName="Planet"
        logoSrc="/vib.mp4"
        productName="HUMI-POWER"
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Potassium Humate 49% (Powder)"
        composition={[
          '(i) Humic Acid per cent. by weight minimum 21',
          '(ii) pH (1 % aqueous solution) 6.0-8.0'
        ]}
        crops="Paddy"
        dosage="One Soil application at 1 kg/ha"
      />
    </div>
  );
}
