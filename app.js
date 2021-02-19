const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors:{
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
});
const routes = require('./routes/index');

app.use(cors())

io.on('connection', (socket) => {
  console.log('a user connected');
  //tambahan part  
  socket.on('newMessage', (message)=>{

    console.log('event dari client',message);
    socket.broadcast.emit('serverMessage', message)
  })

  socket.on('newQuestion', (answer)=>{
    // console.log(message, 'di server');
    console.log('event dari client',answer);
    socket.broadcast.emit('serverQuestion', answer)
  })
  
});


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)

http.listen(port, () => {
  console.log('App listen in http://localhost:'+3000);
})