
import API from "../../api";
import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL;



export const getuser = async () => {
  try {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

    const response = await axios.get("http://localhost:4000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error);
    return null;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await API.get(`${process.env.REACT_APP_BASE_URL}/users/${userId}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}



export const addBatchList = async (batchNameId) => {
  try {
      const response = await API.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, batchNameId)
      return response.data
  } catch (error) {
      console.log(error);
  }
}

export const addDepartmentList = async (departmentId) => {
  try {
      const response = await API.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, departmentId)
      return response.data
  } catch (error) {
      console.log(error);
  }
}



export const addGenderList = async (genderId) => {
  try {
      const response = await API.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, genderId)
      return response.data
  } catch (error) {
      console.log(error);
  }
}


export const addPassedOutYearList = async (passedOutYearId) => {
  try {
      const response = await API.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, passedOutYearId)
      return response.data
  } catch (error) {
      console.log(error);
  }
}
export const addBloodGroupList = async (bloodGroupId) => {
  try {
      const response = await API.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, bloodGroupId)
      return response.data
  } catch (error) {
      console.log(error);
  }
}


// Get all user types
export const getUserTypes = async (req, res) => {

  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  try {
    const response = await API.get(`${BASE_URL}/registerdd/usertype` , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user types:", error);
    return [];
  }
};


// Get all batches
export const getBatchList = async (req, res) => {
  try {
    const response = await API.get(`${BASE_URL}/registerdd/batch`);
    return response.data;
  } catch (error) {
    console.error("Error fetching batch list:", error);
    return [];
  }
};



// Get all departments
export const getDepartmentList = async (req, res) => {
  try {
    const response = await API.get(`${BASE_URL}/registerdd/dept`);
    return response.data;
  } catch (error) {
    console.error("Error fetching department list:", error);
    return [];
  }
};



// Get all genders
export const getGenderList = async (req, res) => {
  try {
    const response = await API.get(`${BASE_URL}/registerdd/gender`);
    return response.data;
  } catch (error) {
    console.error("Error fetching gender list:", error);
    return [];
  }
};



// Get all passed out years
export const getPassedOutYearList = async (req, res) => {
  try {
    const response = await API.get(`${BASE_URL}/registerdd/passedoutyear`);
    return response.data;
  } catch (error) {
    console.error("Error fetching passed out year list:", error);
    return [];
  }
};

// Get all blood groups
export const getBloodGroupList = async (req, res) => {
  try {
    const response = await API.get(`${BASE_URL}/registerdd/bloodgroup`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blood group list:", error);
    return [];
  }
};




