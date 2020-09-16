import { create } from "apisauce"

 const apiClient = create({
    baseURL:"http://192.168.1.158:8000/api/test/"
})
export default apiClient;