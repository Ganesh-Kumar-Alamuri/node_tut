const http = require('http')
const server = http.createServer((req, res)=>{

    if(req.url==='/'){
        return res.end('This is our Home page')
    }
    if(req.url==='/users'){
        return res.end('Here we will be having the list of users')
    }
    return res.end(`
    <h1> Enter a valid url</h1>
    <a href='/'> Home </a> 
    
    `)

})
server.listen(5000)