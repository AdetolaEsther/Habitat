import withPWA from "next-pwa";

const nextConfig: any = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,
})(nextConfig);
