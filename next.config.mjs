/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.clerk.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'copaamerica.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'youtube.com',
            port: '',
          }
        ],
      },
};

export default nextConfig;
