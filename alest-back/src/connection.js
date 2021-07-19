const admin = require('firebase-admin');
const serviceAccount = require ('./ServiceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const productsDb = db.collection('products')





 function create(request,response){
    const {name, value} = request.body

     productsDb.doc('products')
}