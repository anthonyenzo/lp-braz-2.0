import type { NextConfig } from "next";

const isHostingerBuild = process.env.HOSTINGER_BUILD === "1";

const nextConfig: NextConfig = {
  ...(isHostingerBuild
    ? {
        output: "export" as const,
        basePath: "/principal",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;

