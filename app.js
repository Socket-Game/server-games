const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors:{
    origin: "https://socket-tebak-kota.web.app",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
});
const routes = require('./routes/index');

app.use(cors())

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('newMessage', (message)=>{
    console.log('event dari client',message);
    socket.broadcast.emit('serverMessage', message)
  })

  socket.on('newQuestion', (answer)=>{
    console.log('event id question');
    io.emit('serverQuestion', answer)
  })

  socket.on('addPoint', (answer)=>{
    console.log('event add point');
    io.emit('serverAddPoint', answer)
  })

  socket.on('resetPoint', ()=>{
    console.log('event reset point');
    io.emit('serverResetPoint')
  })
  
});


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)

http.listen(port, () => {
  console.log('App listen in http://localhost:'+3000);
})