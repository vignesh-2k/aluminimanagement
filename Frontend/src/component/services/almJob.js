import API from "../../api"


export const addJob = async (jobData) => {
    try {
        const response = await API.post(`${process.env.REACT_APP_BASE_URL}/jobs/createjobpost`, jobData)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getEmployeeStatus = async (req , res) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/jobs/employeestatus`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getAllJob = async ( req , res ) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/jobs`)
        return response.data ;
    } catch (error) {
        console.log(error)
    }
}

export const getJobPostById = async (jobPostId) => {
    try {
        const response = await API.get(`${process.env.REACT_APP_BASE_URL}/jobs/jobpost/${jobPostId}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteJobPost = async (jobPostId) => {
    try{
      const response = await API.delete(`${process.env.REACT_APP_BASE_URL}/jobs/${jobPostId}`)
      return response.data ;
    }catch(error) {
        console.log(error)
    }
}