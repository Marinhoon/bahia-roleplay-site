import { Check } from 'lucide-react'

const points = [
  'Economia balanceada com dinheiro sujo e limpo',
  'Sistema de facções, polícia, SAMU e mecânica',
  'Veículos brasileiros e mapas exclusivos',
  'Eventos semanais e staff presente 24h',
]

export function AboutCity() {
  return (
    <section id="cidade" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/images/bahia-police-city.png"
              alt="Policiais da Polícia Militar da Bahia em patrulha na cidade"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-primary/40 bg-card px-5 py-4 sm:block">
            <p className="font-heading text-3xl font-bold text-primary">2026</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Cidade em constante evolução
            </p>
          </div>
        </div>

        <div>
          <span className="font-heading text-sm font-medium uppercase tracking-widest text-gold">
            A cidade
          </span>
          <h2 className="mt-3 font-heading text-balance text-4xl font-bold uppercase leading-tight tracking-tight lg:text-5xl">
            Uma Bahia que respira roleplay
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Aqui cada história importa. Construa sua reputação, monte seu
            negócio, suba na vida ou caia no crime. O Bahia Roleplay foi feito
            por quem ama RP, com mecânicas profundas, atendimento de qualidade e
            uma comunidade que faz a cidade ganhar vida todos os dias.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
