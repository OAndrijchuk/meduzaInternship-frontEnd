import { RootState } from "../store";

export const getUserName = (state: RootState) => state.user.user.userName
    
