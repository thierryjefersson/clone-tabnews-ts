import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { config } from "dotenv";

config();

export default defineConfig({
  plugins: [tsConfigPaths()],
});
