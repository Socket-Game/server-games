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
const { connect } = require('./routes/index');


io.on('connection', (socket) => {
  console.log('a user connected');
  
  // untuk tampilan pertanyaan
  const messages = [{
    id:1,
    name:"server",
    text: "Pertanyaan yang ingin ditampilkan"
  }]
  
  //tambahan part  
  socket.on('newMessage', (message)=>{
    // jika ingin identify user
    connect() {
      console.log(this.$socket.id);
    }
    console.log('event dari client',message);
    socket.broadcast.emit('serverMessage', message)
    //harus dihandle di server
  })
  //
});
 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)

app.listen(port, () => {
  console.log('App listen in http://localhost:'+3000);
})