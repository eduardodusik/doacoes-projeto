import axios from "axios";

const api = axios.create({
   baseURL: 'https://us-central1-doacoes-ulbra.cloudfunctions.net/api/v1/'
})

export { api }