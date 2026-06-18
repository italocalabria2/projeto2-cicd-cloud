const test = require("node:test");
const assert = require("node:assert");
const app = require("../server");

test("GET /health deve retornar status ok", async (t) => {
  const server = app.listen(0);

  t.after(() => {
    server.close();
  });

  const port = server.address().port;
  const response = await fetch(`http://127.0.0.1:${port}/health`);
  const body = await response.json();

  assert.strictEqual(response.status, 200);
  assert.strictEqual(body.status, "ok");
});