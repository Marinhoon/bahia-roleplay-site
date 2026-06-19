import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Como faço para entrar no servidor?',
    a: 'Você precisa do FiveM instalado. Clique em "Entrar no servidor" ou conecte usando o endereço "connect play.bahiaroleplay.com.br" diretamente no FiveM.',
  },
  {
    q: 'Preciso pagar para jogar?',
    a: 'Não! O Bahia Roleplay é gratuito. Existem itens cosméticos e VIPs opcionais para apoiar o servidor, mas você pode jogar de graça.',
  },
  {
    q: 'Quais são os requisitos?',
    a: 'Ter o GTA V original, o FiveM instalado e estar no nosso Discord para acompanhar regras, allowlist e novidades da cidade.',
  },
  {
    q: 'O servidor tem regras de roleplay?',
    a: 'Sim. Levamos o RP a sério: regras claras contra metagaming, powergaming e RDM. Tudo está documentado no Discord oficial.',
  },
  {
    q: 'Como funciona a allowlist?',
    a: 'Entre no Discord, leia as regras e faça o registro. Nossa equipe analisa e libera o acesso para você começar a viver sua história.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-heading text-sm font-medium uppercase tracking-widest text-gold">
            Dúvidas
          </span>
          <h2 className="mt-3 font-heading text-balance text-4xl font-bold uppercase leading-tight tracking-tight lg:text-5xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-heading text-lg font-medium uppercase tracking-wide transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-pretty leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
