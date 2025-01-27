import axios from "axios"

const api = axios.create({
    baseURL:'https://conceitos-node-crud.vercel.app/'
})

export default api