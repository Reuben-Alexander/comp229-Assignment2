import Product from '../models/product.js';

const getAllProducts = async (req, res) => {

    let name = req.query.name;
    try {
        let products;
        if (name) {
            if (name.startsWith('[') && name.endsWith(']')) {
                name = name.slice(1, -1);
              }
            const regex = new RegExp(name, 'i');
            products = await Product.find({ name: regex });
        } else {
            products = await Product.find();
        }
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addNewProduct = async (req, res) => {
    const { name, description, price, quantity, category } = req.body;
    const newProduct = new Product({ name, description, price, quantity, category });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const removeProductById = async (req, res) => {
    try {
        const removedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!removedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const removeAllProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.json({ message: 'All products removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {getAllProducts, getProductById, addNewProduct, updateProductById, removeProductById, removeAllProducts};

