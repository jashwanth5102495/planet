import { Link } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';
import IntroOverlay from '../components/IntroOverlay';

export default function PagesIndex() {
  const pages = [
    { label: 'HUMI-POWER', path: '/HUMI-POWER' },
    { label: 'FORCE', path: '/FORCE' },
    { label: 'MAX', path: '/MAX' },
    { label: 'UPLUS', path: '/UPLUS' },
    { label: 'MAGIC', path: '/MAGIC' },
    { label: 'S POWER', path: '/S-POWER' },
    { label: 'VITA', path: '/VITA' },
    { label: 'HIFI', path: '/HIFI' },
    { label: 'SMART', path: '/SMART' },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 pt-12 pb-8">
      <BackgroundVideo />
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>
      <IntroOverlay />
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-black/40 border border-white/30 p-6">
        <h2 className="text-white text-2xl font-semibold mb-4">Pages</h2>
        <ul className="space-y-3">
          {pages.map(p => (
            <li key={p.path}>
              <Link
                to={p.path}
                className="block w-full rounded-xl px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-medium"
              >
                {p.label} ({p.path})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
