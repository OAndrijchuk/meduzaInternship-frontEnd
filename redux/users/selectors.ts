import { RootState } from "../store";

export const getUserName = (state: RootState) => state.user.user.userName
export const getUserToken = (state: RootState) => state.user.token
    
