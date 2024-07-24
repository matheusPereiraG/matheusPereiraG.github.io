/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? '/matheusPereiraG.github.io/' : '',
    basePath: isProd ? '/matheusPereiraG.github.io' : '',
};

export default nextConfig;
