const express= require('express')
const app=express()
const expressLayout=require('express-ejs-layouts')
if (process.env.NOde_ENV !=='production')
{
    require('dotenv').config();
}
const indexRouter=require('./routes/index')
app.set('view engine','ejs')
app.set('views',__dirname+ '/views')
app.set('layout','layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))


const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true
})
const db=mongoose.connection
db.on('error',error=> console.erronr(error))
db.once('open',()=> console.log('connected to mongoose'))
app.use(indexRouter)
app.listen(process.env.process|| 3000)
