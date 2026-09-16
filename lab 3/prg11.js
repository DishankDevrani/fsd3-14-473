import http from 'http';

const server = http.createServer((req,res)=>{

    if(req.url === '/' && req.method === 'GET')
        res.end('home page');
    else if(req.url ==='/product' && req.method === 'GET'){
        const products=[
            {
                id: 1,
                name: "mobile",
                price: 200,
            },
            {
                id: 2,
                name: "duster",
                price: 10,
            },
        ];
        res.end(JSON.stringify(products));
    }
    else if(req.url === '/product' && req.method === 'POST'){
        req.on("end", ()=>{
            const product = JSON.parse(body);
            
            //add data to database
            res.writeHead(201,{
                "content-type": "application/json",
            });
            //send back the status
            res.end(
                JSON.stringify({
                    msg: "product added",
                    product,
                }),
            );
        });
    }
    else if(req.url === '/product' && req.method === 'PUT')
        res.end('update product');
    else if(req.url === '/product' && req.method === 'DELETE')
        res.end('delete product');
    else{
        res.statusCode = 404;
        res.end("not found");
    }

})

server.listen(4000,()=>console.log('prg11 is running')
)