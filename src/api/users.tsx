import axios from 'axios';

// const axios = require('axios');

export const getUsers = async ()=>{
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users?`)
        console.log(res.data)
        return res.data;
    }
    catch (error) {
       console.error(error);
       return {error: true}
    }
}