import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { federation } from '@module-federation/vite';

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'host',
            remotes: {
                vite_guest_app: {
                    name: 'vite_guest_app',
                    type: 'module',
                    entry: 'http://localhost:5174/remoteEntry.js',

                },
                // webpack_guest_app: {
                //     external: 'http://localhost:8080/dist/remoteEntry.js',
                //     externalType: 'url',
                //     format: 'var',
                //     from: 'webpack'
                // }
            }
        })
    ],
    build: {
        modulePreload: false,
        target: 'chrome89',
        minify: false,
        cssCodeSplit: false
    }
})
