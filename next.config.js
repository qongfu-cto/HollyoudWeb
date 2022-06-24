require('dotenv').config();
/** @type {import('next').NextConfig} */

// images
const withImages = require('next-images');
module.exports = withImages();

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    SOCKET_URL: process.env.SOCKET_URL,
    API_KEY: process.env.API_KEY,
    API_KEY_IP: process.env.API_KEY_IP
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!

    ignoreBuildErrors: false
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false
  },
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'localhost:3001',
      'localhost:8000',
      'testqloud.com',
      'qloudcity.com',
      'qloudgo.com',
      'qloudcitydev.testqloud.com',
      'qloudcity.testqloud.com',
      'beta.qloudcity.com',
      'staging.qloudtechnologies.com',
      'dev.qloudtechnologies.com',
      'qloudtechnologies.com',
      'qloudtechnologies.com',
      'dev.testqloud.com',
      'staging.testqloud.com',
      'live.testqloud.com',
      'tenmou-dev.testqloud.com',
      'tenmou-live.testqloud.com',
      'dev.qommandcenter.com',
      'staging.qommandcenter.com',
      'live.qommandcenter.com',
      'tenmou-dev.qommandcenter.com',
      'tenmou-live.qommandcenter.com',
      'dev.qloudcity.com',
      'staging.qloudcity.com',
      'live.qloudcity.com',
      'tenmou-dev.qloudcity.com',
      'tenmou-live.qloudcity.com',
			'web.testqloud.com',
			'test.testqloud.com',
    ]
  }
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //     config.resolve.fallback = {
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },

  // async headers() {
  //     return [
  //       {
  //         // Apply these headers to all routes in your application.
  //         key: 'Permissions-Policy',
  //          value: ' geolocation=(*)'
  //       },
  //     ]
  //   },
};
