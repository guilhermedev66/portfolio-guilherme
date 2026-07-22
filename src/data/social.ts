import type { IconType } from 'react-icons'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export interface SocialLink {
  label: string
  href: string
  icon: IconType
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/guilhermedev66', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guilherme-devvv/', icon: FiLinkedin },
  { label: 'E-mail', href: 'mailto:guilhermenovo663@gmail.com', icon: FiMail },
]
