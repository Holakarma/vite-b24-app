import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'post-to-get-middleware',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    // B24 get the page by POST
                    if (req.method === 'POST') {
                        req.method = 'GET';
                    }
                    next();
                });
            },
        },
    ],
    server: {
        https: {
            key: fs.readFileSync(
                path.resolve(path.dirname('.'), 'certs/cert.key'),
            ),
            cert: fs.readFileSync(
                path.resolve(path.dirname('.'), 'certs/cert.crt'),
            ),
        },
        port: 3000,
        host: '0.0.0.0',
        middlewareMode: false,
    },
});
