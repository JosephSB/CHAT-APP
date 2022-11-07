import express from "express";

const app = express()

app.set("PORT", 4000)

app.get("/", (req,res)=>{
    console.log("gaaaaddd")
    res.send("Hola bb ssdds")
})

export default app
