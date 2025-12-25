export default function BackgroundVideo() {
  return (
    <img
      src="/back.png"
      alt=""
      aria-hidden="true"
      className="fixed inset-0 w-full h-full object-cover"
      style={{ zIndex: -40 }}
    />
  );
}
