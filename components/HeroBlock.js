export default function HeroBlock({ heading, subHeading, children }) {
  return (
    <div className="flex flex-col p-24 gap-2">
      <h2 className="text-3xl font-bold text-white">{heading}</h2>
      <p className="text-xl font-semibold text-amber-500">{subHeading}</p>
      <div className="flex gap-4 py-2">{children}</div>
    </div>
  );
}
