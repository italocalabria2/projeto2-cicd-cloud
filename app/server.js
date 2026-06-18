const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    projeto: "Projeto 2 - CI/CD com Deploy Automatizado",
    status: "online",
    provider: process.env.CLOUD_PROVIDER || "local",
    version: process.env.APP_VERSION || "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

if (require.main === module) {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Aplicacao rodando na porta ${port}`);
  });
}

module.exports = app;