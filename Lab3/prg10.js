import http from 'http';

const server = http.createServer((req,res)=> [
    res.end('hello buddy');
]);

server.listen(3000,()=> console.log("prg10 is running at port 3000"));