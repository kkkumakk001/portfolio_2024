/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // 本番環境でもツールバーを完全に無効化する
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
