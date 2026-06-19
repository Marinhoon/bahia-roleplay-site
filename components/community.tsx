import { Play, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function Community() {
  return (
    <section id="comunidade" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img
            src="/images/hero-city.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="relative px-6 py-16 text-center sm:px-12 lg:py-24">
            <span className="font-heading text-sm font-medium uppercase tracking-widest text-gold">
              Comunidade
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-balance text-4xl font-bold uppercase leading-tight tracking-tight lg:text-6xl">
              Sua história começa agora
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Conecte-se ao servidor ou entre no nosso Discord para tirar
              dúvidas, conhecer as regras e fazer parte da maior comunidade de
              roleplay da Bahia.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.connectUrl} className="inline-block">
                <Button size="lg" className="h-12 px-6 text-base">
                  <Play className="size-5 mr-2" aria-hidden="true" />
                  Entrar no servidor
                </Button>
              </a>
              <a href={site.discordUrl} target="_blank" rel="noreferrer" className="inline-block">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-border bg-background/40 px-6 text-base backdrop-blur"
                >
                  <MessageCircle className="size-5 mr-2" aria-hidden="true" />
                  Entrar no Discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}