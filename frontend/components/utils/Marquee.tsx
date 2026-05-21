export function Marquee({ items, alt }: { items: string[]; alt?: boolean }) {
  const row = (
    <span>
      {items.map((t, i) => (
        <span key={`${t}-${i}`} className="sep">
          {t}
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee">
      <div className={`marquee-track${alt ? " alt" : ""}`}>
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
