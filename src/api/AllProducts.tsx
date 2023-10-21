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

export const getAllProductsLimit = async(limit: number)=>{
    try {

        const apiUrl = `https://fakestoreapi.com/products?limit=${limit}`;
        const response = await axios.get(apiUrl);
        return response.data;

    } catch (error) {
       console.log(error);
    }
};

export const getAllCategory= async()=>{
    try {

        const apiUrl = `https://fakestoreapi.com/products/categories`;
        const response = await axios.get(apiUrl);
        return response.data;

    } catch (error) {
       console.log(error);
    }
};
