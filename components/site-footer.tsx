import { MapPin } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-bold uppercase tracking-wide">
                Bahia<span className="text-primary"> RP</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
            <p className="mt-4 font-mono text-sm text-foreground">
              {site.serverAddress}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Conecte-se
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={site.connectUrl}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Entrar no servidor
                </a>
              </li>
              <li>
                <a
                  href={site.discordUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Discord oficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Não afiliado à Rockstar Games ou Take-Two Interactive.
          </p>
        </div>
      </div>
    </footer>
  )
}
