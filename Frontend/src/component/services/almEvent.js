import API from "../../api"

export const getAllEvent = async ( req , res ) => {
    try {
        const response = await API.get('http://localhost:4000/events')
        return response.data ;
    } catch (error) {
        console.log(error)
    }
}