import { globalSplitApi } from '@/Api/globalApi';

export const companiesAPI = globalSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCompanies: build.query({
            query: () => ({
                url: 'company',
                method: 'GET',
            }),
            providesTags:['company'],
            
        }),
        addCompany: build.mutation({
            query: (body) => ({
                url: 'company',
                method: 'POST',
                body,
            }),
            invalidatesTags:['company'],
        }),
        getCompanyInfo: build.query({
            query: (id) => ({
                url: `company/${id}`,
                method: 'GET',
            }),
            
        }),
        // removeCompany: build.mutation({
        //     query: () => ({
        //         url: `user`,
        //         method: 'DELETE',
        //     }),
            
        // }),
        // updateCompanyInfo: build.mutation({
        //     query: (body) => ({
        //         url: `user`,
        //         method: 'PUT',
        //         body:body,
        //     }),
        //     invalidatesTags:['user'],
        // }),
    }),
    overrideExisting: false,
});

export const {useGetAllCompaniesQuery, useAddCompanyMutation, useGetCompanyInfoQuery} = companiesAPI;