import API from "../../api"

export const getAllEvent = async ( req , res ) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/events`)
        return response.data ;
    } catch (error) {
        console.log(error)
    }
}

export const addEvent = async (eventData) => {
    try {
        const response = await API.post(`${process.env.REACT_APP_BASE_URL}/events/createevent`, eventData)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getEventType = async (req , res) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/events/eventtype`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}