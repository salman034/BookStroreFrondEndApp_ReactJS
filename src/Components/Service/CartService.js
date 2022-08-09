import axios from "axios";

class CartService{
    baseUrl ="http://localhost:8080/bookstoreapp/mycart";

    addBookTocart(id){
        return axios.post(`${this.baseUrl}/addbook/${id}`);
    }

    getCart(){
        return axios.get(`${this.baseUrl}/getcartlist`);
    }

    increaseBookQuantity(id){
        return axios.put(`${this.baseUrl}/increaseByOne/${id}`);
    }

    decreaseBookQuantity(id){
        return axios.put(`${this.baseUrl}/decreaseByOne/${id}`);
    }

    deleteBookFromCart(id){
        return axios.delete(`${this.baseUrl}/delete/${id}`);
    }

    getUserCart(id){
        return axios.get(`${this.baseUrl}/getCartById/${id}`);
    }

    emptyCart(){
        return axios.delete(`${this.baseUrl}/emptyCart`);
    }

    getCartPrice(){
        return axios.get(`${this.baseUrl}/getCartPrice`);
    }
}
export default new CartService();