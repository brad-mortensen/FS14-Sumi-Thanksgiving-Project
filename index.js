
const server = require('./server');

const port = 8888;

server.listen(port, function() {
  console.log(`\n=oWoWo= Web API Listening on http://localhost:${port}=oWoWo=\n`);
});
