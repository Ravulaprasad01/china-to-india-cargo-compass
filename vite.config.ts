import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // KEEP your existing TanStack Start configuration here.
    // Do not remove your existing server entry redirect.
  },

  vite: {
    server: {
      allowedHosts: [".vercel.run"],
    },
  },
});
