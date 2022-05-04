const http = require('http');
const axios = require('axios');

const port = 3500;

const instance = axios.create({
  baseURL: 'https://api.vk.com/',
  timeout: 2000,
});

http.createServer((req, res) => {
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (['GET', 'POST'].indexOf(req.method) > -1) {
    res.writeHead(200, headers);
    console.log(req);
    instance
    (
      // "method/friends.get?fields=nickname&access_token=1ca043f5f22511ff0f62989dd3c0ea9c3fbc7ebd5be752d084054f557d2dbf407476fdce67f7a1a49c6c7&v=5.131"
    req.url
    )
    .then(function (response) {
      // console.log(response.data);
      res.end(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}).listen(port);