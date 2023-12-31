import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";


export default defineConfig({
    plugins: [react()],
    base:"/constructorpractice/",
    preview: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, ".") }],
    },
});
