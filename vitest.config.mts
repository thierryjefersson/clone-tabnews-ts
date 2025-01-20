import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { config } from "dotenv";

config();

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    testTimeout: 60000,
    hookTimeout: 60000,
    fileParallelism: false,
    isolate: false,
  },
});
