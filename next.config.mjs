/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net',
                port: ''
            },
        ],
    }
};

export default nextConfig;
