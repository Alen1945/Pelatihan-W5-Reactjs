import axios from 'axios'
import {Cookies} from 'react-cookie'

const apiURL='https://api-livecoding.herokuapp.com'
const cookies=new Cookies()

function getConfig(){
    const accessToken=cookies.get('accessToken')
    if(accessToken){
        return {
            headers:{
                authorization:`Bearer ${accessToken}`
            }
        }
    }else{
        return {}
    }
}
export const getData=async (path)=>{
    try {
        const response=await axios.get(apiURL+path,getConfig())
        return response
    } catch (error) {
        throw error
    }
}
export const postData=async(path,data)=>{
    try {
        const response=await axios.post(apiURL+path,data,getConfig())
        return response
    } catch (error) {
        throw error
    }
}