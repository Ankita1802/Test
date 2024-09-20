import express from "express";
const app = express()
const port = 3001
app.use(express.json()) //to parse data
const datastore = [
    {id : 1, name : "Ankita", class : 5},
    {id : 2, name : "Himanjal", class : 7}
]
app.post("/api/post", (req,res) => 
{
const data = req.body //perform db ops
datastore.push(data)
res.status(200).json({
    "data":data,
    "datastore":datastore
  })
})
app.listen(port, () => {
    console.log(`listening to localhost ${port}` )
})