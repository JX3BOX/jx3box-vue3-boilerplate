import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import getStaticPath from './helper/static_path'

export default ({ command, mode }) => {

    return defineConfig({
    
        //Define static files path
        base: mode == "development" ? "/" : getStaticPath(loadEnv(mode, process.cwd()).VITE_STATIC_PATH),
    
        resolve: {
            // Use @ as ./src in template/css/js
            alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
        },
    
        css: {
            preprocessorOptions: {
                // scss: {
                //     additionalData: `$injectedColor: orange;`,
                // },
                less: {
                    // less mixin , please reload serve when these files change
                    globalVars: {
                        hack: `true; 
                        @import "./node_modules/csslab/base.less";
                        @import "./node_modules/@jx3box/jx3box-common/css/var.less";
                        @import "./src/assets/css/var.less";`,
                    },
                },
            },
        },
    
        plugins: [vue()],
    });
}
