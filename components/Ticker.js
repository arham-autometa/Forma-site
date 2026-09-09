const items = ["Residential", "Workplace", "Interiors", "Landscape", "Renovation", "Master planning"];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-bark/15 bg-cream py-5" aria-hidden="true">
      <div className="animate-ticker flex w-max whitespace-nowrap font-serif text-3xl md:text-4xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className={i % 2 ? "text-stone" : "text-bark"}>{t}</span>
            <span className="mx-8 h-2 w-2 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
