// const http= require('http');
// const fs = require('fs');
// const server= http.createServer();


// server.on('request', (req,res)=>{

// if(req.url =='/')
// {  
//     file =` <h1>  HOME IS BACK hii</h1> `;
//     res.end(file);
// }
// else if(req.url=="/aman")
// {
//     let file= fs.readFileSync('./aman.html');
//     res.writeHead(200,{"content-type":'Text/html'})
//     res.end(file) ;

// }
// }
// );

// server.listen(5000);
// ...............SECOND STEP .........

var express = require('express'),
        app = express(),
        pdf = require('express-pdf');
      path= require('path');
//previously app.use(pdf())
app.use(pdf); // or you can app.use(require('express-pdf'));
 app.use(express.static('public'));
app.use('/', function(req, res){
    res.pdfFromHTML({
        filename: 'generated.pdf',
        html: path.resolve(__dirname, 'demo.html'),
       
    });
});
 

app.listen(5000);