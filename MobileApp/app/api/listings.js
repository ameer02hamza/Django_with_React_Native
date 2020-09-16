import client from "./client"
const endpoint = '/test/'

const getListings = () => client.get(endpoint)

export default {
    getListings,
}