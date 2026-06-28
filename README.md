# Rise 1 Web App

A simple Node.js + Express web application packaged with Docker.

## Run locally

```bash
npm install
npm start
```

## Build Docker image

```bash
docker build -t myapp .
```

## Run Docker container

```bash
docker run -p 3000:3000 myapp
```

Then open http://localhost:3000 in your browser.
