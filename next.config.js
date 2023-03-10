const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? require("@next/bundle-analyzer")({})
    : (nextConfig) => nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, _ctx) => {
    // config.optimization.splitChunks.cacheGroups = {
    //   ...config.optimization.splitChunks.cacheGroups,
    //   myutils: {
    //     test: /[\\/]node_modules[\\/](ramda|super-cooles-util)[\\/]/,
    //     name: "my-utils",
    //     chunks: "all",
    //   },
    // };
    return config;
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
module.exports = withBundleAnalyzer(nextConfig);
