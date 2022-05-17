import axios from 'axios';

const PRODUCT_API_BASE_URI = "http://localhost:9090/products";

class ProductService {

    getAllProducts(){
        return axios.get(`${PRODUCT_API_BASE_URI}/list`);
    }

    deleteProduct(id){
        return axios.delete(`${PRODUCT_API_BASE_URI}/delete/${id}`);
    }

    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URI + "/save/" , product);
    }

    getOneProduct(id){
        return axios.get(`${PRODUCT_API_BASE_URI}/edit/${id}`);
    }
}
export default new ProductService();