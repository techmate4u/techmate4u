import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techmate4u.com'
  
  const staticPages = [
    { url: `${baseUrl}`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about-us`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/work`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/testimonials`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/audit`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, changeFrequency: 'yearly', priority: 0.3 },
  ] as const;

  const serviceSlugs = [
    'web-development',
    'technical-seo',
    'automation-systems',
    'mobile-app-development',
    'digital-marketing',
    'social-media-management',
  ];

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(),
  }));

  const workSlugs = [
    'riwaaz-ethnic',
    'lab2door',
    'restaurant-management',
    'techflow-systems',
    'finserve-solutions',
  ];

  const workPages = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(),
  }));

  const blogSlugs = [
    'why-headless-commerce-is-the-future-for-ethnic-brands',
    'how-we-reduced-onboarding-latency-by-80-percent-with-ai-agents',
    'demystifying-technical-seo-why-lighthouse-score-isnt-everything',
  ];

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    lastModified: new Date(),
  }));

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: new Date(),
    })),
    ...servicePages,
    ...workPages,
    ...blogPages,
  ]
}
