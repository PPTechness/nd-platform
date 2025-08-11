import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "img-src 'self' data:",
      "font-src 'self'",
      "media-src 'self'",
      // Using 'unsafe-inline' for styles due to Tailwind-injected styles; can harden later.
      "style-src 'self' 'unsafe-inline'",
      // We’ll add a real nonce when we introduce custom scripts.
      "script-src 'self'"
    ].join('; ');
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy-Report-Only', value: csp },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      }
    ];
  }
};

export default nextConfig;