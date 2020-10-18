import axios from 'axios'
const apiURL='https://api-livecoding.herokuapp.com'

export const postData=async(path,data)=>{
    try {
        const response=await axios.post(apiURL+path,data)
        return response
    } catch (error) {
        throw error
    }
}