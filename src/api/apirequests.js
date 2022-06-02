import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})
const url = 'http://localhost:5000/users/signup';
export const registerUsers = async (formData) =>{
    return await axios.post(url, { FormData }, {
        withCredentials: true,
    })
}

export const loginUsers = async (formData) =>{
    return await instance.post('http://localhost:5000/users/signup', FormData, {
        withCredentials: true,
    })

}
