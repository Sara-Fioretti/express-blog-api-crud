const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) //Body parser

app.post("/", (req,re)=>{
    console.log(req.body);
});

const postRouter = require ('./routers/posts');
app.use ("/posts", postRouter)

app.listen(port, ()=> {
    console.log(`App attiva su http://localhost:${port}`);
})