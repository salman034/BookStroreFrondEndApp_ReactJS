import axios from "axios";

class BookService{
    baseUrl ="http://localhost:8080/bookstoreapp"

    addPerson(data) {
        return axios.post(`${this.baseUrl}/create`, data);
      }

    getAll() {
        return axios.get(`${this.baseUrl}`);
      }

    name() {
      return axios.get(`${this.baseUrl}/name`)
    } 

    sortPriceHighToLow() {
        return axios.get(`${this.baseUrl}/sortByPriceHighToLow`);
      }
    sortPriceLowToHigh() {
        return axios.get(`${this.baseUrl}/sortByPriceLowToHigh`);
      }
}

export default new BookService();