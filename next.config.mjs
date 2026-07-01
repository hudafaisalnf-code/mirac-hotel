import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias["react/compiler-runtime"] = path.resolve(
      __dirname,
      "compiler-runtime-stub.cjs"
    );
    return config;
  },
};

export default nextConfig;
