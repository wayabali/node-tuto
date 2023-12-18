const http = require('http');

const server = http.createServer((req : any , res : any ) => {
if(req.url === '/'){
  res.end('Welcome to our home page');
}
if(req.url === '/about'){
res.end('here is our history');
}
res.end(`
<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/"> back home </a>
`)
})
server.listen(50000);