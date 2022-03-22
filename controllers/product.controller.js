const db = require('../models');
const Product = db.product;

console.log(db.product);

exports.getAllProduct = async(req, res)=>{
    const products = await Product.findAll({
        attributes: ['productName', 'id']
    });
    if (!products) {   
        return res.status(400).send(`err: no product found`)
    }
    return res.send(products)
}

exports.getProduct = async(req, res)=>{
    const{id} = req.params;
    console.log(id);
    const product =await Product.findOne({
        where:{
            id
        }
    });
    if (!product) {   
        return res.status(400).send(`err: no product with id: ${id} found`)
    }
    return res.send(product)
}

exports.createProduct = async(req, res)=>{
    const{productName} = req.body;
    if (!productName){
        return res.status(400).send(`productname cannot be empty`)
    }
    const productExist = await Product.findOne({
        where:{
            productName
        } 
    });
    if (productExist) {
        return res.status(400).send(`productname ${productName} already exist select a different productname`)
    }

    try {
        let newProduct= await Product.create({
            productName
        });
        return res.send(newProduct)
        
    } catch (err) {
      return res.status(500).send({message:err.message})
    }
}

exports.updateProduct = async(req, res)=>{
    const{productName} = req.body;
    const{id} = req.params;

    const pname = {
        productName:productName
    }
    
    try {

        const product = await Product.update(pname,{
            where:{
                id
            }
        })
        res.send('updated successfully')

    }
        catch (err) {
            if (!product){
                return res.status(400).send(`no product exist with id ${id}`)
            }
      return res.status(500).send({message:err.message})
    }
}

exports.deleteProduct = async(req, res)=>{
    const{id} = req.params;
    try {
        
    Product.destroy({
        where: {
            id
        }
    })
        return res.send('deleted successfully')
    }
        catch (err) {
      return res.status(500).send({message:err.message})
    }
}
