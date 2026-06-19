'use client'

import { useState } from 'react'
import { Copy, Check, Server } from 'lucide-react'
import { site } from '@/lib/site'

export function CopyAddress() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.serverAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard indisponível
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-3 rounded-lg border border-border bg-background/50 px-4 py-2.5 text-left backdrop-blur transition-colors hover:border-primary/50"
      aria-label="Copiar endereço do servidor"
    >
      <Server className="size-4 text-primary" aria-hidden="true" />
      <span className="font-mono text-sm text-foreground">
        {site.serverAddress}
      </span>
      <span className="ml-1 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-foreground">
        {copied ? (
          <>
            <Check className="size-3.5 text-primary" aria-hidden="true" />
            Copiado
          </>
        ) : (
          <>
            <Copy className="size-3.5" aria-hidden="true" />
            Copiar
          </>
        )}
      </span>
    </button>
  )
}
