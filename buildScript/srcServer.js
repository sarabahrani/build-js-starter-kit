var bs=require('browser-sync');
bs.init({
    server: "src",
    files: ["src/style/*.css"],
    plugins: [
        {
            module: "bs-html-injector",
            options: {
                files: ["src/*.html"]
            }
        }
    ]
});
