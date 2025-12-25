import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function GroundNut() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-12 sm:pt-14 pb-6 sm:pb-8">
      <BackgroundVideo />
      {/* Subtle overlays for readability */}
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>

      <IntroOverlay />
      <ProductCard
        brandName=""
        companyName="Planet"
        logoSrc="/vib.mp4"
        productName="FORCE"
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Humates and Fulvates - 22% (Liquid)"
        composition={[
          '(i) Total water soluble humates and fulvates pe rcent. weight by volume, minimum 22',
          '(ii) pH (1:5 aqueous solution) 9.0 (min)',
          '(iii) Specific gravity 1.05'
        ]}
        crops="Ground Nut"
        dosage="Two soil applications at 1.25 l/ha"
      />
    </div>
  );
}
