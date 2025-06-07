import API from "../../api"

export const getTotalAlumniCount = async ( req , res ) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/users/alumnicount`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}