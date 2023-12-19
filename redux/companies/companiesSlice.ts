import { globalSplitApi } from '@/Api/globalApi';
import { ICompany } from '@/Types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit'

interface CompanyState {
    company: ICompany;
    isLoading: boolean;
    allCompanies: Array<ICompany>;
};

const initialState: CompanyState = {
    company: {
        id: 0,
        companyName: '',
        description: '',
        createdAt: '',
        updatedAt: '',
        owner: {},
        invitations: [],
        candidates: [],
        employee: [],
    },
    allCompanies:[],
    isLoading:false,
};

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setAllCompanies: (state, { payload }) => {
            state.allCompanies = payload;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        }
    },
    extraReducers: (builder) => {
        builder
    .addMatcher(
      globalSplitApi.endpoints.signIn.matchFulfilled,
        (state, { payload }) => {
            // state.user = payload.user
            // state.token = payload.token
      }
    )
    .addMatcher(
         isAnyOf(
            globalSplitApi.endpoints.refreshToken.matchRejected,
            globalSplitApi.endpoints.logOut.matchFulfilled,
            globalSplitApi.endpoints.removeAccount.matchFulfilled,),
        (state, { payload }) => {
            // state.user = initialState.user
            // state.token = ''
      }
    )
  }
});

export const companiesReducer = companiesSlice.reducer;
export const { setAllCompanies, setIsLoading } = companiesSlice.actions;

