import { Play, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'
import { CopyAddress } from '@/components/copy-address'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-city.png"
          alt="Cidade litorânea do servidor Bahia Roleplay ao entardecer"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
            <span
              className="size-2 rounded-full bg-primary animate-pulse-dot"
              aria-hidden="true"
            />
            Servidor Online
          </div>

          <h1 className="font-heading text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Viva sua história na{' '}
            <span className="text-primary text-glow">Bahia</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {site.tagline} Cidade viva, economia real e uma comunidade que
            respira FiveM. Sua jornada no melhor RP do estado começa agora.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Botão sem asChild - versão corrigida */}
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

          <div className="mt-6">
            <CopyAddress />
          </div>
        </div>
      </div>
    </section>
  )
}