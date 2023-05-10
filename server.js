const express = require('express');
const mongoose = require('mongoose');
const Product  = require('./models/productModel')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('Mongo Db Connected!');

    app.listen(3000, () => {
      console.log(`Connection is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => {
  res.send('Hello node api');
});


app.post('/product', async(req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(201).json({product});


  }catch(error){
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});

app.get('/products', async(req, res) => {
  try{

    const products = await Product.find({});
    res.status(200).json({products});

  }catch(error){
    res.status(500).json({message: error.message});
  }

});

app.get('/products/:id', async(req, res) => { 
  try{

    const {id} = req.params;
    const product = await Product.findById(id);

    res.status(200).json({product});

  }catch(error){
    res.status(500).json({message: error.message});
  }

});

//update aproduct
app.put('/products/:id', async(req, res) => {
try {
  const {id} =req.params;
  const product = await Product.findByIdAndUpdate(id, req.body);

  if(!product){
    return res.status(404).json({message: `Product not found${id}`});
  }
  const updateProduct = await Product.findById(id);
  res.status(200).json({updateProduct});
} catch (error) {

  res.status(500).json({message: error.message});
  
}

});


//delete a product

app.delete('/products/:id', async(req, res) => {
try {
  const {id} = req.params;  
  const product = await Product.findByIdAndDelete(id);
  if(!product){
    return res.status(404).json({message: `Product not found${id}`});
  }
  res.status(200).json(product);
} catch (error) {
  res.status(500).json({message: error.message});
  
}

});

app.get('/blog', (req, res) => {
  res.send('Hello node blog');
});
