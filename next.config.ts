/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        IMGUR_LINK: process.env.IMGUR_LINK,
        IMGUR_ID: process.env.IMGUR_ID,
        BACK_LINK: process.env.BACK_LINK
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
            },
        ]
    }
}

module.exports = nextConfig
