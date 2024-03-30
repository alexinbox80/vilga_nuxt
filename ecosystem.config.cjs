module.exports = {
    apps: [{
        name: "vilga",
        script: "/app/.output/server/index.mjs",
        port: 80,
        watch: true,
        env_production: {
            "NODE_ENV": "production",
        }
    }]
}
