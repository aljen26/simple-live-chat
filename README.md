## Simple Live Chat

Created: April 23 2024
Finshed: April 24 2024

### Keypoints

- Used of Socket.io and Express JS for server-side
- Running server on Glitch.com
- Website is at https://projectgames.000.pe

### Learning goal

Using Express JS
```
const express = require('express')
const app = express()
const server = require('http').createServer(app)
```
and using Socket.io

```
const io = require('socket.io')(server, {
  // handling CORS is easy with Socket.io
  cors: {
    origin: "https://projectgames.000.pe",
    methods: ["GET", "POST"]
  }
})
```

### JS Learning

- Using socket.on()
- Using socket.emit()
- Using io.on()
- Using io.emit()

### CSS Learning

- Very basic
- Needs improvement on Responsive Design
- Needs improvement on 'span.name' which shows the username.

### Additional Notes

Need to study this snipet for further understanding

```
const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log("Server listening at port %d", port);
})
```
