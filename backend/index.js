const ConnectToMongo = require("./db");
var cors = require('cors')
ConnectToMongo();

const express = require('express')
const app = express()
const port = 5000 //we r using port 5000 bcoz 3000 port is used by react

app.use(cors())

app.use(express.json())   //middleware use to use req.body


//Available routes
app.use('/api/auth',require("./routes/auth"))
app.use('/api/notes',require("./routes/notes"))

app.listen(port, () => {
  console.log(`Cloudbook backend app listening at http://localhost:${port}`)
})

// npm run nodemon