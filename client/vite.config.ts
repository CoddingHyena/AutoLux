import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // Убедитесь, что импортировали модуль path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, 'src/utils/helpers'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/utils/hooks'),
      },
      {
        find: '@hocs',
        replacement: path.resolve(__dirname, 'src/utils/hocs'),
      },
    ],
  },
});