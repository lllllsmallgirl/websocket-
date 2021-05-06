// 浏览器=>服务器
// var app = require('express')();
// var http = require('http').createServer(app);
// const io = require('socket.io')(http);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/test.html');
//   });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
//   });



// http.listen(3000, () => {
//     console.log('listening on *:3000');
//   });



// 浏览器=》服务器=》浏览器
var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/',require('express').static('1.28 socket'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html');
    // res.sendFile(__dirname + '/img/ii.PNG');
    // console.log("Request for " + req.url + " received.");
  });
var i = 0;
io.on('connection', (socket) => {
  // i+=1;
  // console.log('用户'+i+'进入')
  console.log('a user connected');
    socket.on('chat message', (msg) => {
      io.emit('chat message',msg)
    });

    socket.on('btn click',(tm)=>{
        console.log('time:',tm);
        
        io.emit('btn click',tm);
    });

    socket.on('btn effect',(ef)=>{
        console.log('effect:',ef);
        io.emit('btn effect',ef);
    })

  });




http.listen(3000, () => {
    console.log('listening on *:3000');
  });