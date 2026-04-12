import { SOCIAL_LINKS } from '@/lib/constants'

// simpleicons.org CDN slugs for each social brand
const ICON_SLUGS: Record<string, string> = {
  Facebook: 'facebook',
  Instagram: 'instagram',
  Yelp: 'yelp',
  Google: 'google',
}

interface SocialLinksProps {
  variant?: 'footer' | 'contact'
  className?: string
}

export function SocialLinks({ variant = 'footer', className = '' }: SocialLinksProps) {
  const isFooter = variant === 'footer'
  const base = isFooter
    ? 'w-10 h-10 bg-white/10 hover:bg-primary'
    : 'w-11 h-11 bg-gray-100 hover:bg-primary'
  const iconColor = isFooter ? 'ffffff' : '1f2937'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((social) => {
        const slug = ICON_SLUGS[social.name]
        if (!slug) return null
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.name} - 904 Dumpster`}
            title={`Follow 904 Dumpster on ${social.name}`}
            className={`${base} rounded-full flex items-center justify-center transition-colors`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${slug}/${iconColor}`}
              alt={`${social.name} icon`}
              width={20}
              height={20}
              className="w-5 h-5"
              loading="lazy"
            />
          </a>
        )
      })}
    </div>
  )
}
