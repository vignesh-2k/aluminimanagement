
import API from "../../../api"
import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL;

// Helper function to get token from cookies
const getAuthToken = () => {
  return document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
};

// Common headers configuration
const getAuthHeaders = () => ({
  Authorization: `Bearer ${getAuthToken()}`
});


export const getpendinguser = async () => {
  try {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

    const response = await axios.get("http://localhost:4000/pendingusers", {
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

// Get approved users
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






// Approve a pending user
export const approvePendingUser = async (id) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/pendingusers/approve/${id}`,
      {}, // Empty body
      { headers: getAuthHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error("Error approving user", error);
    throw error;
  }
};

// Reject/delete a pending user
export const rejectPendingUser = async (id) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/pendingusers/${id}`,
      { headers: getAuthHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error("Error rejecting user", error);
    throw error;
  }
};





// Get all batches
export const getBatchList = async (req, res) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  try {
    const response = await API.get(`${BASE_URL}/registerdd/batch` , {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching batch list:", error);
    return [];
  }
};



// Get all departments
export const getDepartmentList = async (req, res) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  try {
    const response = await API.get(`${BASE_URL}/registerdd/dept` ,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching department list:", error);
    return [];
  }
};


// Get all passed out years
export const getPassedOutYearList = async (req, res) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  try {
    const response = await API.get(`${BASE_URL}/registerdd/passedoutyear`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching passed out year list:", error);
    return [];
  }
};
