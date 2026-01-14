import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function TomatoSPower() {
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
        productName="S POWER"
        category="Mixed Formulation"
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Mixture of Humic acid and Seaweed extract (Powder)"
        composition={[
          '(i)  Humic acid powder as potassium humate (Source: Leonardite) per cent. by weight, minimum 80',
          '(ii)  Kappaphycus alvarezii and Sargassum swartzii in ratio of 1:1; extract water soluble powder per cent. by weight, minimum 20',
          '(iii) Total (per cent.) 100'
        ]}
        crops="Tomato"
        dosage="Three foliar applications at 1.25 kg/ha"
      />
    </div>
  );
}
