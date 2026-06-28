const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rise 1 App</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 2rem; background: #f4f7fb; color: #1f2937; }
      .container { max-width: 720px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(15, 23, 42, .08); }
      h1 { color: #0f172a; }
      p { line-height: 1.75; }
      .footer { margin-top: 1.5rem; color: #475569; font-size: 0.95rem; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to Rise 1</h1>
      <p>This is a simple Node.js + Express web app running on port 3000.</p>
      <p>It is packaged with Docker in <strong>Dockerfile</strong> and can be run locally with <code>docker run -p 3000:3000 myapp</code>.</p>
      <div class="footer">Built for a minimal Docker deployment demo.</div>
    </div>
  </body>
</html>`);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
