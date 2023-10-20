import axios from "axios";

export const getAllProducts = async()=>{
    try {

        const apiUrl = "https://fakestoreapi.com/products";
        const response = await axios.get(apiUrl);
        return response.data;

    } catch (error) {
       console.log(error);
    }
};

export const getProduct = async(productid: string)=>{
    try {

        const apiUrl = `https://fakestoreapi.com/products/${productid}`;
        const response = await axios.get(apiUrl);
        return response.data;

    } catch (error) {
       console.log(error);
    }
};
