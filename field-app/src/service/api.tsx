import axios from "axios"

//url inicial
export const api = axios.create({
  baseURL: "https://api.github.com"
})
