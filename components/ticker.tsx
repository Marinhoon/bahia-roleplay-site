const items = [
  'Bahia Roleplay Radio',
  'Melhor servidor RP da Bahia',
  'Experiência FiveM',
  'Cidade viva',
  'Economia real',
  'Comunidade ativa',
  'Empregos e facções',
]

export function Ticker() {
  return (
    <div className="border-y border-border bg-primary/5 py-3">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center whitespace-nowrap font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              {item}
              <span className="mx-5 text-primary" aria-hidden="true">
                ●
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
