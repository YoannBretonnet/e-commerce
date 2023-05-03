import axios from "axios";

const BASE_URL = "https://sangha-ecommerce-api.netlify.app/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjQzYWVhYTJmMmZlZjVkY2RhODdkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDg3OTQ2NiwiZXhwIjoxNjgxMTM4NjY2fQ.kK4xPVH1EZY1CbVa8frDxqu9hNDM4XmR7Py7KjQDdvY";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});