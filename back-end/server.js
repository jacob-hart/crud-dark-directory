const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dark', {
  useNewUrlParser: true
});

app.post('/api/products', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    dark: req.body.dark,
    context: req.body.context,
  });
  try {
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/products', async (req, res) => {
  try {
    let products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    let product = await Product.findOne({
      _id: req.params.id
    });
    res.send(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     await Product.deleteOne({
//       _id: req.params.id
//     });
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.put('/api/products/:id', async (req, res) => {
//   try {
//     let product = await Product.findOne({
//       _id: req.params.id
//     });
//     product.name = req.body.name
//     product.dark = req.body.dark
//     product.context = req.body.context
//     await product.save();
//     res.send(product);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

const productSchema = new mongoose.Schema({
  name: String,
  dark: String,
  context: String,
});

// Create a model for items in the museum.
const Product = mongoose.model('Product', productSchema);

app.listen(3001, () => console.log('Server listening on port 3001!'));
