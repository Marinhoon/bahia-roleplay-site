import {
  Briefcase,
  Car,
  ShieldCheck,
  Building2,
  Users,
  Radio,
} from 'lucide-react'

const features = [
  {
    icon: Briefcase,
    title: 'Empregos legais',
    description:
      'Mecânico, taxista, entregador, médico e muito mais. Suba na vida pelo caminho honesto.',
  },
  {
    icon: ShieldCheck,
    title: 'Forças policiais',
    description:
      'PM, PRF e investigação com hierarquia, viaturas e ocorrências realistas.',
  },
  {
    icon: Car,
    title: 'Garagem completa',
    description:
      'Veículos nacionais, tuning, oficinas e corridas. Sua coleção do seu jeito.',
  },
  {
    icon: Building2,
    title: 'Negócios e imóveis',
    description:
      'Compre casas, abra empresas e domine a economia da cidade com sua organização.',
  },
  {
    icon: Users,
    title: 'Facções e crime',
    description:
      'Territórios, assaltos e disputas. Construa seu império no submundo da Bahia.',
  },
  {
    icon: Radio,
    title: 'Eventos ao vivo',
    description:
      'Festas, campeonatos e operações da staff toda semana para a comunidade.',
  },
]

export function Features() {
  return (
    <section id="recursos" className="border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-medium uppercase tracking-widest text-gold">
            Recursos
          </span>
          <h2 className="mt-3 font-heading text-balance text-4xl font-bold uppercase leading-tight tracking-tight lg:text-5xl">
            Tudo que um bom RP precisa
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Sistemas pensados para a melhor imersão. Escolha seu caminho e viva
            o roleplay como ele deve ser.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50"
            >
              <span className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
