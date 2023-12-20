/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        IMGUR_LINK: process.env.IMGUR_LINK,
        IMGUR_ID: process.env.IMGUR_ID
    }
}

module.exports = nextConfig
