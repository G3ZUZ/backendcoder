const fs = required("fs");
class ProductManager {
    constructor (){
        this.products = []
        this.index = 0
        this.path = "./productos.json"
        fs.writeFileSync(this.path, JSON.stringify(this.products, null, "\t") )
        }

    getProducts = () =>{
        const productsList = fs.readFileSync(this.path, "utf-8")
        return(productsList);
    }

    getProductByID = (id)=>{
    
    const Lista = JSON.parse(fs.readFileSync(this.path, "utf-8")) ;

        const found = lista.find(e=> e.id === id)
        found === undefined ? console.log("Not Found") : console.log(found);  

    }



    AddProduct = (title,description,price,thumbnail,code,stock) =>{
        this.index++
        const id = this.index

        const product ={ id,title,description,price,thumbnail,code,stock}

        if (this.product.some(i => i.code === code)){
            console.log("Codigo Repetido");
        } else if(!description || !title || !price || !thumbnail || !code || !stock ){
            console.log("Daltan Datos");
        }else{
            this.products.push(product)
            fs.writeFileSync(this.path, JSON.stringify(this.products, null , "\t") )

        }


    }

    updateProduct = (id, campo, cambio)=>{
        const objIndex = this.products.findIndex(obj.id === id)

        if(objIndex !== -1) {
            this.products[objIndex][campo] = cambio
            fs.writeFileSync(this.path, JSON.stringify(this.products, null n "\t"))
        }else{
            return console.log("Producto no Encontrado");
        }
    }

    deleteProduct = (id) =>{
        const borrar = this.products.findIndex(obj=>obj.id === id)

        if(borrar !== -1) {
            this.products.splice(borrar, 1);
            fs.writeFileSync(this.path, JSON.stringify(this.products, null , "\t"))
        }else{
            return console.log("Producto no Encontrado");
        }
    }


}

const manager = new ProductManager()
console.log(manager.getProducts());
manager.AddProduct("Mouse Gamer", "Mouse Gamer de 12000DPI", 4000, "sin imagen" , "asd123" , "15" );
console.log(manager.getProducts());
manager.addProduct("Teclado Gamer", "Teclado Mecanico", 20000, "Sin imagen", "asd123",10 );
manager.getProductByID(1); 
manager.getProductByID(2);
manager.updateProduct(1, "price","150");
manager.getProductByID(1); 
manager.deleteProduct(1);
manager.deleteProduct(2);