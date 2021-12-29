module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return config;
  },
}
