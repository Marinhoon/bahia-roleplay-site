const stats = [
  { value: '+100', label: 'Jogadores ativos' },
  { value: '2048', label: 'Slots no servidor' },
  { value: '+40', label: 'Empregos e facções' },
  { value: '99,9%', label: 'Uptime do servidor' },
]

export function Stats() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center px-4 py-8 text-center"
          >
            <span className="font-heading text-4xl font-bold text-primary lg:text-5xl">
              {stat.value}
            </span>
            <span className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
