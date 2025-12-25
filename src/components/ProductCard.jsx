import { motion as Motion } from 'framer-motion';
import StarBorder from './StarBorder';
import './StarBorder.css';

export default function ProductCard({
  brandName,
  logoSrc,
  companyName,
  productName,
  gazette,
  title,
  composition,
  crops = '—',
  dosage = '—',
}) {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md w-full"
    >
      <div className="rounded-3xl">
        {/* Header brand title */}
        {brandName ? (
          <div className="px-6 sm:px-8 pt-4 sm:pt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black/90">
              {brandName}
            </h1>
          </div>
        ) : null}

        {/* Logo container */}
        <div className="px-6 sm:px-8 pb-4">
          <div className="mt-4 rounded-2xl bg-white/30 border border-white/40 p-3 flex flex-col items-center">
            {companyName && (
              <div className="w-full text-center text-base sm:text-lg font-semibold text-black/80 mb-2">
                {companyName}
              </div>
            )}
            {logoSrc?.endsWith('.mp4') ? (
              <video
                src={logoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-32 sm:h-40 md:h-44 object-contain rounded-xl"
              />
            ) : (
              <img
                src={logoSrc}
                alt="Logo"
                className="w-full h-32 sm:h-40 md:h-44 object-contain"
              />
            )}
          </div>
        </div>

        {/* Info sections with dynamic numbering and order */}
        <div className="px-6 sm:px-8 pb-8 space-y-4">
          {(() => {
            const sections = [];
            if (gazette) {
              sections.push({
                key: 'gazette',
                label: 'Gazette Notification',
                node: <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{gazette}</p>,
              });
            }
            if (title) {
              sections.push({
                key: 'title',
                label: 'Title of Bio Stimulant',
                node: <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{title}</p>,
              });
            }
            if (productName) {
              sections.push({
                key: 'product',
                label: 'Product',
                node: <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{productName}</p>,
              });
            }
            sections.push({
              key: 'composition',
              label: 'Composition',
              node:
                composition?.length > 0 ? (
                  <ul className="mt-2 space-y-2 list-disc pl-5 text-base sm:text-lg">
                    {composition.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">—</p>
                ),
            });
            sections.push({
              key: 'crops',
              label: 'Crops',
              node: <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{crops}</p>,
            });
            sections.push({
              key: 'dosage',
              label: 'Dosage',
              node: <p className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold">{dosage}</p>,
            });

            return sections.map((s, idx) => (
              <StarBorder key={s.key} className="w-full" color="cyan" speed="5s">
                <p className="text-sm tracking-wide text-white/80">
                  {idx + 1}. {s.label}
                </p>
                {s.node}
              </StarBorder>
            ));
          })()}
        </div>
      </div>
    </Motion.div>
  );
}
