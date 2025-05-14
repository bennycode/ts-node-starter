import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/html');

  for (let i = 1; i <= 10; i++) {
    res.write(`<p>${i}</p>`);
  }

  res.end();
});

app.listen(port, () => {
  console.log(`Serving code from ${import.meta.dirname}`);
  console.log(`Server running at http://localhost:${port}`);
});
