module.exports = {
  apps : [{
    name   : "Vilga",
    script : "./.output/server/index.mjs",
    port: 3000,
    watch: true,
    env_production : {
      "NODE_ENV": "production"
    }
  }]
}
