import API from "../../api"


export const addIntern = async (internData) => {
    try {
        const response = await API.post(`${process.env.REACT_APP_BASE_URL}/internship/createintern`, internData)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getAllIntern = async ( req , res ) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/internship`)
        return response.data ;
    } catch (error) {
        console.log(error)
    }
}

export const getInternById = async (internId) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/internship/${internId}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteIntern = async (internId) => {
    try{
      const response = await API.delete(`${process.env.REACT_APP_BASE_URL}/internship/${internId}`)
      return response.data ;
    }catch(error) {
        console.log(error)
    }
}

export const updateIntern = async (internId , internData) => {
    try {
       const response = await API.put(`${process.env.REACT_APP_BASE_URL}/internship/${internId}` , internData)
       return response.data 
    } catch (error) {
        console.log(error)
    }
}