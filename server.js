const express=require('express')

const app=express()

const cors=require('cors')
const path=require('path')
const dotenv=require('dotenv')
dotenv.config()

app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('react/build')); // serve the static react app
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'react','build','index.html'))
    })
  };


  const port=process.env.PORT||3001

  app.listen(port,()=>{
      console.log(`A node js API is listening on port:${port}`)
  })