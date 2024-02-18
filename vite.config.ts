import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env": {
      REACT_APP_API_URL: "https://dummyjson.com",
      REACT_APP_API_MOCKING: true,
      TSC_COMPILE_ON_ERROR: true,
      ESLINT_NO_DEV_ERRORS: true,
      CHOKIDAR_USEPOLLING: true,
    },
  },
});
