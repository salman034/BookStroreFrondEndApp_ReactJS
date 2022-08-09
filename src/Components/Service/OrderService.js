import axios from "axios";

class OrderService{
    baseUrl= 'http://localhost:8080/bookstoreapp/order'

    placeOrder(id){
        return axios.get(`${this.baseUrl}/summery/${id}`)
    }

}

export default new OrderService();