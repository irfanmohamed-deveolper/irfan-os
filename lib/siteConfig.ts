export const siteConfig = {
  name: 'IRFAN OS',
  title: 'Mohamed Irfan | AI Creator & Developer',
  description: "Building intelligent digital experiences at the intersection of AI, software and creativity.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'Mohamed Irfan',
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || ''
  }
}
