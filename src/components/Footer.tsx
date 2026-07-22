import { socialLinks } from '@/data/social'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 text-center">
        <div>
          <p className="text-lg font-semibold text-white">
            Guilherme Santos da Silva
          </p>
          <p className="text-sm text-neutral-400">
            Desenvolvedor Back-End .NET
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-neutral-400 transition hover:text-primary-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-xs text-neutral-500">
          © {year} Guilherme Santos da Silva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
