// const http = require("http"); // commonJS
// import http from "http"; // ECMAScript

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('content-type','text/html');
//     res.end('<h1>harsh yadav</h1>');
// });

// server.listen(port,hostname,()=>{
//     console.log(`Server is running at http://${hostname}:${port}/`);
// });

// import {a,b} from "./mymodules.js"
// console.log(a,b);

// import harsh from "./mymodules.js"
// console.log(harsh);

const a = require("./mymodule2.js")
console.log(a ,__dirname,__filename);

// all require and thing module wagera wagera
(function(exports,require,module,__filename,__dirname){

    // Module code actually lives here 

})
