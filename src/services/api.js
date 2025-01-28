import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000"
})

const baseURL="https://conceitos-node-crud.vercel.app/"

export default api