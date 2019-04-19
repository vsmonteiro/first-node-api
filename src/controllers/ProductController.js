const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        //Busca todos os produtos com paginação
        const { page = 1} = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.json(products); 
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        //Grava um produto na base
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        //Atualiza um produto, último parâmetro do método é necessário para retornar o produto atualizado
        const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
        // Remove um produto
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}