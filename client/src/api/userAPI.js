import apiClient from "./instance";
// ham lay tat ca user 
export const getAllUser = async ()=>{
        const response = await apiClient.get("/users");
        return response;
    
}
// ham khoa user
export const lockUser = async (id) =>{
    const response = await apiClient.patch(`/users/${id}`,{status:false});
    return response;
}

// ham mo user
export const unlockUser = async (id) => {
    const response = await apiClient.patch(`/users/${id}`,{status:true});
    return response
}

// ham xoa user
export const deleteUser = async (id) =>{
    const response = await apiClient.delete(`/users/${id}`)
    return response
}

// ham tim kiem user theo ten hoac email
export const searchUsers = async (searchUsers) =>{
    const response = await apiClient.get(`/users?search=${searchUsers}`);
    return response;
}

// ham thm user
export const addUser = async (newUser) =>{
    const response = await apiClient.post("/users",newUser);
    return response;
}

// ham pagination 
export const getAllUsersWithPagination = async (page,pageSize) => {
    const response = await apiClient.get(`/users`, {
        params: {
          page,
          pageSize,
        },
      });
    return response;
}

