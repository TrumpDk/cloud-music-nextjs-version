/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://github.com/vercel/next.js/issues/62472
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table"
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'p1.music.126.net',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'p1.music.126.net',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'p2.music.126.net',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'p2.music.126.net',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
