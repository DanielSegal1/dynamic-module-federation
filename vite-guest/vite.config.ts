import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { federation } from '@module-federation/vite'

export default defineConfig({
	plugins: [
		react(),
		federation({
            name: 'vite_guest_app',
			filename: 'remoteEntry.js',
            exposes: {
                './Button': './src/button/index.jsx'
            },
            // shared: ['react', 'react-dom']
        })
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	  }
})
