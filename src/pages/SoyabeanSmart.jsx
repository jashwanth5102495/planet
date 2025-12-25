import BackgroundVideo from '../components/BackgroundVideo';
import ProductCard from '../components/ProductCard';
import IntroOverlay from '../components/IntroOverlay';

export default function SoyabeanSmart() {
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
        productName="SMART"
        gazette="S.O.3922(E), Dated 12-9-2024"
        title="Protein hydrolysate (Amino acids 20 %) (Plant source) (Liquid)"
        composition={[
          '(i)  Protein hydrolysate (Microbial fermentation) per cent. by weight, minimum',
          'a. sugarbeet molasses and 87.1',
          'b. corn/ wheat glucose syrups 12.4',
          '(ii)  Octhilinone as preservatives per cent. by weight, minimum 0.3',
          '(iii) Polysiloxanes as antifoam agent per cent. by weight, minimum 0.2',
          '(iv) Total (per cent.) 100'
        ]}
        crops="Soyabean"
        dosage="Two foliar applications at 2 l/ha"
      />
    </div>
  );
}
