/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}



const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new WorkboxWebpackPlugin.GenerateSW({
        swDest: 'service-worker.js',
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /\.(jpg|mp4)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'my-pwa-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },
        ],
        precacheManifestFilename: 'precache-manifest.[manifestHash].js',
        importWorkboxFrom: 'local',
        globDirectory: 'public',
        globPatterns: ['assets/**/*'],
      })
    );
    return config;
  },
};

module.exports = nextConfig