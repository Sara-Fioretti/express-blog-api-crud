const express = require('express')
const app = express()
const port = 3000

const postRouter = require ('./routers/posts');
app.use ("/posts", postRouter)

app.listen(port, ()=> {
    console.log(`App attiva su http://localhost:${port}`);
})