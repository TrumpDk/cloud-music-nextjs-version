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
  ]
};

export default nextConfig;
