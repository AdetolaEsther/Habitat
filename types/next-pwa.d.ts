declare module "next-pwa" {
    import { NextConfig } from "next";
    type PWAConfig = {
        dest?: string;
        disable?: boolean;
        register?: boolean;
        skipWaiting?: boolean;
        buildExcludes?: string[];
        fallbacks?: Record<string, string>;
    };
    export default function withPWA(
        config?: PWAConfig
    ): (nextConfig: NextConfig) => NextConfig;
}
