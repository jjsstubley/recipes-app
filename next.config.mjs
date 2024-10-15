/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
                pathname: '/recipe-images/**'
            }
        ], // Add your image domain(s) here
    },

};

export default nextConfig;
