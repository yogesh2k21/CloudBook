const ConnectToMongo = require("./db");
ConnectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())   //middleware use to use req.body


//Available routes
app.use('/api/auth',require("./routes/auth"))
app.use('/api/notes',require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// npm run nodemon