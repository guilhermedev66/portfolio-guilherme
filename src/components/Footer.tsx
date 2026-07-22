import { socialLinks } from '@/data/social'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12 text-center">
        <div>
          <p className="text-lg font-semibold text-white">
            Guilherme Santos da Silva
          </p>
          <p className="text-sm text-neutral-400">
            Estudante de Engenharia de Software | Back-End .NET
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full p-2.5 text-neutral-400 transition duration-200 hover:scale-110 hover:bg-primary-500/10 hover:text-primary-300 focus-visible:scale-110 focus-visible:bg-primary-500/10 focus-visible:text-primary-300 focus-visible:outline-none"
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
