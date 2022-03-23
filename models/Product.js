const product =(sequelize,  DataTypes)=>{
    const Product = sequelize.define(
        'product',
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            productName:{
                type:DataTypes.STRING,
                unique:true
            },
        },
        {   
            timestamps:true,
            freezeTableName:true
        }
        );
        Product.sync();
        return Product;
    }


    module.exports= product;