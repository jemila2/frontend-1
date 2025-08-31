// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   base: '/client/',
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
//   server: {
//     host: '0.0.0.0',
//     port: 5173,
//   },
//       rollupOptions: {
//       input: '/src/index.html'  
//     },
//   build: {
//       rollupOptions: {
//       input: {
//         app: './src/index.html', 
//       },
//     },
//     outDir: 'dist',
//     sourcemap: false,
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [react(),  tailwindcss(),],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
        input: {
        main: './index.html'
      }

});