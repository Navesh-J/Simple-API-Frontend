import axios from "axios";

export const createUser = async(payload)=>{
    const createUserEndpoint = `${import.meta.env.VITE_API_URL}/v1/user/`;

    const {data:apiResponse} = await axios.post(createUserEndpoint,payload);
    return apiResponse
}

export const retrieveUser = async(userId)=>{
    const getUserEndpoint = `${import.meta.env.VITE_API_URL}/v1/user/${userId}`;
    const {data:apiResponse} = await axios.get(getUserEndpoint);
    return apiResponse;
}

export const retrieveAllUsers = async()=>{
    const getAllUsersEndpoint = `${import.meta.env.VITE_API_URL}/v1/user/all`;
    const {data:apiResponse} = await axios.get(getAllUsersEndpoint);
    return apiResponse;

}

export const editUser = async(userId,payload)=>{
    const editUserEndpoint = `${import.meta.env.VITE_API_URL}/v1/user/${userId}`;
    const {data:apiResponse} = await axios.put(editUserEndpoint,payload)
    return apiResponse;
}

export const deleteUser = async(userId)=>{
    const deleteUserEndpoint = `${import.meta.env.VITE_API_URL}/v1/user/${userId}`;
    const {data:apiResponse} = await axios.delete(deleteUserEndpoint)
    return apiResponse;
}