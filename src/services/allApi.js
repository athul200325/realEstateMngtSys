import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

export const createListAPI=async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/realestate/createlist`,reqBody,reqHeader)
}

export const getListsAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/realestate/homelists`,{})
}

export const getUserListsAPI=async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/realestate/userlists`,{},reqHeader)
}

export const getSearchListsAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/realestate/homelists`,{})
}

export const updateListsAPI=async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/realestate/lists/${id}/edit`,reqBody,reqHeader)
}

export const deleteListsAPi=async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/realestate/lists/${id}/delete`,{},reqHeader)
}

export const updateUserProflieAPI=async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/realestate/user/edit-user`,reqBody,reqHeader)
}

export const getSingleListAPI=async (id,reqBody,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/realestate/userlists/${id}`,reqBody,reqHeader)
}