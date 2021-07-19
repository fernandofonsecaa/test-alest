const express = require('express')
const cors = require ('cors')
const admin = require ('firebase-admin')
const serviceAccount = require ('./ServiceAccountKey.json')
const routes = require('./routes')
const { response } = require('express')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

app.post('/products', (req,res)=>{
    let name = req.body.name;
    let value = req.body.value;
    db.collection('products').add({
        name: name,
        value: value
    })
    res.send({status: 'success'})
})

 app.get('/products', async (req, res)=>{
     let prdct = []
   const products = await db.collection('products').get() 
   if (products.docs.length > 0){
       for (const product of products.docs){   
           prdct.push(product.data())
         
       }
   }
   res.json(prdct)
})

app.listen(3333)