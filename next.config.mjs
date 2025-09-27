const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/mmdb-home/' : '',
  basePath: isProd ? '/mmdb-home' : '',
  output: 'export'
};

export default nextConfig;