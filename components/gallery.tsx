const images = [
  {
    src: '/images/gallery-1.png',
    alt: 'Encontro de carros tunados à noite na cidade',
    label: 'Car meet noturno',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'Balada à beira-mar com luzes de neon',
    label: 'Vida noturna',
    span: '',
  },
  {
    src: '/images/bahia-police-action.png',
    alt: 'Operação da Polícia Militar da Bahia à noite',
    label: 'Ação policial',
    span: '',
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="font-heading text-sm font-medium uppercase tracking-widest text-gold">
              Galeria
            </span>
            <h2 className="mt-3 font-heading text-balance text-4xl font-bold uppercase leading-tight tracking-tight lg:text-5xl">
              Momentos da cidade
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Um gostinho do que rola todos os dias no Bahia Roleplay. Entre e
            faça parte das próximas histórias.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {images.map((img) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
