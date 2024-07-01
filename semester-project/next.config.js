/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net', 'tommy.hr'],
  },
  env: {
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID:
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  },
  async rewrites() {
    return [
      {
        source: '/cms/nabava/:naziv*',
        destination: '/cms/nabava/[naziv]',
      },
    ];
  },
};

module.exports = nextConfig;
