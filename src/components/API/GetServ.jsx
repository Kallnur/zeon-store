import axios from "axios";

export default class GetServ {
    static async getData(url){
        const response = await axios.get(`http://localhost:3003/${url}`)
        return response;
    }
    static async getOffer(){
        return this.getData('offer')
    }
    static async getSlide(type){
        return this.getData(`slide${type}`)
    }
    static async getAdventage(){
        return this.getData(`adventage`)
    }
    static async getAbout(){
        return this.getData('about')
    }
    static async getLogo(type){
        return this.getData(`logo?type=${type}`)
    }
    static async getContact(title){
        return this.getData(`contact${title}`)
    }
    static async getPhoneNumber(){
        return this.getData(`phone-number`)
    }
    static async getProduct(limit, page){
        const response = await axios.get('http://localhost:3003/product', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
    static async GetCollection(limit, page){
        const response = await axios.get('http://localhost:3003/collection', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
}