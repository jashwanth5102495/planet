import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function Okra() {
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
        productName="UPLUS"
        category="Mixed Formulation"
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Mixture of Humic Acid, Amino Acid, Vitamins and Bio-chemicals (powder)"
        composition={[
          '(i)  Humic Acid per cent. by weight, minimum 30',
          '(ii)  Amino Acid (Glycine) per cent. by weight , minimum 7',
          '(iii)  Myoinositol per cent. by weight , minimum 2',
          '(iv)  Vitamin C per cent by weight , minimum 12.0',
          '(v)  Vitamin E per cent by weight , minimum 0.2',
          '(vi)  pH (1% aqueous solution) 5.0 – 6.5',
          '(vii)  Total organic carbon per cent by weight , minimum 25'
        ]}
        crops="Okra"
        dosage="Two soil applications at 250g/ha"
      />
    </div>
  );
}
