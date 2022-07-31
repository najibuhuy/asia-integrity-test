const { Op } = require("sequelize");
const slug = require('slug')
const { product } = require('../db/models');
import { ProductDto, ProductParamsDto, ProductCreateDto} from '../dto';


const createProduct = async (body: ProductDto) => {
    let bodies : ProductCreateDto = {
        stock: body.stock,
        price: body.price,
        name: body.name,
        priceDiscount: body.priceDiscount !== undefined ? body.priceDiscount : 0,
        imageDefault: body.imageDefault !== undefined ? body.imageDefault : null,
        isPromo: body.isPromo !== undefined ? body.isPromo : false,
        size: body.size !== undefined ? body.size : null,
        description:body.description !== undefined ? body.description : null,
    }
    let createProducts = await product.create(bodies);
    return createProducts;
}

const readProduct = async (params: ProductParamsDto) => {
    const findProd = await product.findOne({
        where :{
            id: params.id,
        }, attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    return findProd;
}


const updateProduct = async (body: ProductDto, params: ProductParamsDto) => {
    let idProd : any =params.id
    console.log(idProd, "idProd")
    let updateQtys = await product.update(body, {
        where: {
            id: idProd
        }
      });
    let readOneDetail:any;
    console.log(updateQtys)
    if(updateQtys) {
        readOneDetail = await product.findOne({ 
            where :{id: idProd}, 
            attributes: { exclude: ['createdAt', 'updatedAt'] }, 
        });
    }
    
    return readOneDetail;
}

const deleteProduct = async (params: ProductParamsDto) => {
    let deleteProduct = await product.destroy({ where: { id: params.id }})
    return deleteProduct;
}




export  { 
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct
    
}