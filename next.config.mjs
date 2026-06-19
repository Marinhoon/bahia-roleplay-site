/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← Isso gera uma pasta 'out' com arquivos estáticos
  images: {
    unoptimized: true,  // Necessário para imagens no export estático
  },
  trailingSlash: true,  // Opcional - ajuda com rotas
}

module.exports = nextConfig