import { RootState } from "../store";

export const getUserName = (state: RootState) => state.user.user.userName
export const getUserEmail = (state: RootState) => state.user.user.email
export const getUserToken = (state: RootState) => state.user.token
export const getUser = (state: RootState) => state.user.user
    
