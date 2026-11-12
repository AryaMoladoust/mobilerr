export default {
  reactStrictMode: true,
  // صفحه اصلی فروشگاه در /shop قرار دارد (دورزدن باگ Next با page ریشه داخل route group)
  async rewrites() {
    return [{ source: '/', destination: '/shop' }];
  },
  async redirects() {
    return [{ source: '/shop', destination: '/', permanent: false }];
  }
};
