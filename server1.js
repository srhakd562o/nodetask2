const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url  === '/home')
        res.end("Welcome Home")
    else if(req.url === '/about')
        res.end("Welcome to about Us page")
    else if(req.url === '/node')
        res.end("Welcome to my Node js Project")
    else{
        res.writeHead(404)
        res.end('Page Not found')
    }

})
server.listen(4000)