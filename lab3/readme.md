# http module 
hyper text transfer protocol

html-hyper text markup language

css-cascade style sheet

npm-node package manager

Status Codes
200    Ok
201    Created
202    Accepted
204    No Content

400    Bad Request
401    Unauthorised
403    Forbidden
404    Not Found
500    Internal Server Error
503    Service unavailable

### Content type=>
It tells about the type of the file we are sharing,
such as text/plain,text/js,text/css,text/html and so on.


#### SYNTAX:res.writeHead(200,{"content-type":"text/json"}); 

## Server can send data
1. html content
2. html files
3. json data
4. plain text
5. css
6. jss
7. file

## Server can set header to send data
1. res.writeHeader()
2. res.setHeader()

## Server can set status code
1. res.statusCode()
2. res.writeHeader()

## request methods
1. get
2. post
3. put/patch
4. delete

## Routes
/-> home/index/localhost
/users 
/products/2639
/products?s=tv -> here ? ke baad jo s hota h uska mtlb h ki search kro or = k baad wo likha jata h jo search krna h