const express= require('express')
const mongoose= require('mongoose')
const dotenv= require('dotenv')
// Authentication Route Import
const authRoute= require('./Routes/auth')
// Adding New Post Route Import
const postRoute= require('./Routes/post')

// Import Swagger UI Express
const swaggerDoc= require('./Doc/swagger')

  
const app= express();
app.use(express.json())

mongoose.set('strictQuery', true)

// Configuring dotenv

dotenv.config();

// Connect To Mongoose
 mongoose.connect(process.env.mongoUrl).then(()=>{
  console.log("Database Connected Successfully")
 }).catch((err) => {
  console.log(err)
 });

 swaggerDoc(app)
// Authentication Route Use 
app.use('/api/auth', authRoute)
// New Post Route Use 
app.use('/api/post', postRoute)
// Starting Server At Specified Port 
const Port= process.env.Port;

app.listen(Port, ()=>
  console.log(` Server Started At Port ${Port}`))