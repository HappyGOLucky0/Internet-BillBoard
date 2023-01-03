const express = require('express');
const fs = require('fs');
const redis = require('redis');

const app = express();
const port = 3000;
const redisClient = redis.createClient();

app.use(express.json());

app.post('/track', (req, res) => {
  const data = req.body;

  if (data.count) {
    redisClient.incrby('count', data.count, (err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }
    });
  }

  fs.appendFile('data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

app.get('/count', (req, res) => {
  redisClient.get('count', (err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
