const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://athulraj165:Athulraj117700@usersignup.jg5qcgl.mongodb.net/')
.then(()=>{
    console.log('mongodb connected')
}).catch((error)=>{
    console.log(error.message)
})