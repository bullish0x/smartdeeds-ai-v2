export interface Publication {
  id: string
  title: string
  excerpt: string
  url: string
  logo: string
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'la-times',
    title: 'LA Times',
    excerpt: 'Concrete Malibu mansion once owned by Kanye West could be hot again.',
    url: 'https://www.latimes.com/california/story/2025-03-27/concrete-malibu-mansion-infamously-owned-by-kanye-west-might-be-hot-again',
    logo: '/images/publications/la-times.png',
  },
  {
    id: 'wall-street-journal',
    title: 'Wall Street Journal',
    excerpt: 'Inside a remixed Tadao Ando Malibu residence tied to Kanye West.',
    url: 'https://www.wsj.com/real-estate/luxury-homes/kanye-west-malibu-mansion-f9547266',
    logo: '/images/publications/wall-street-journal.png',
  },
  {
    id: 'architectural-digest',
    title: 'Architectural Digest',
    excerpt: 'Remixed Tadao Ando masterpiece returning to the market.',
    url: 'https://www.architecturaldigest.com/story/kanye-wests-remixed-tadao-ando-mansion-is-returning-to-the-market',
    logo: '/images/publications/architectural-digest.png',
  },
  {
    id: 'hollywood-reporter',
    title: 'The Hollywood Reporter',
    excerpt: 'Gutted Ando house in Malibu heads back to market.',
    url: 'https://www.hollywoodreporter.com/lifestyle/real-estate/kanye-ye-west-gutted-tadao-ando-house-malibu-for-sale-1235766163/',
    logo: '/images/publications/hollywood-reporter.webp',
  },
  {
    id: 'elle-decor',
    title: 'Elle Decor',
    excerpt: 'Tadao Ando\'s Malibu work: a celebrity home with edge.',
    url: 'https://www.elledecor.com/celebrity-style/celebrity-homes/a61751807/kanye-west-tadao-ando-mansion/',
    logo: '/images/publications/elle-decor.png',
  },
  {
    id: 'artnews',
    title: 'Art News',
    excerpt: 'Kanye West and an iconic Tadao Ando Malibu acquisition.',
    url: 'https://www.artnews.com/art-news/news/kanye-west-buys-tadao-ando-designed-malibu-house-1234604408/',
    logo: '/images/publications/artnews.png',
  },
]

