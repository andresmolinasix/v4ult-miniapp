import path from "path";
import type { NextConfig } from "next";

const asyncStorageStub = path.join(__dirname, "lib", "async-storage-stub.ts");

const nextConfig: NextConfig = {
  // Use the browser build of pino so Turbopack does not try to bundle
  // server-only dependencies like thread-stream and its tests.
  turbopack: {
    resolveAlias: {
      pino: "pino/browser",
      "@react-native-async-storage/async-storage": asyncStorageStub,
    },
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      pino: "pino/browser",
      "@react-native-async-storage/async-storage": asyncStorageStub,
    };
    return config;
  },
};

export default nextConfig;
