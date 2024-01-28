import { globalSplitApi } from '@/Api/globalApi';

export const companiesAPI = globalSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCompanies: build.query({
            query: () => ({
                url: 'company',
                method: 'GET',
            }),
            providesTags:['company', 'addInvite', 'removeInvite', 'updateInvite', 'removeMember'],
            
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
            providesTags:['companyInfo', 'removeInvite', 'addInvite', 'updateInvite', 'removeMember'],
            
        }),
        removeCompany: build.mutation({
            query: (id) => ({
                url: `company/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['company'],
        }),
        removeMember: build.mutation({
            query: ({body,id}) => ({
                url: `company/${id}/member`,
                method: 'DELETE',
                body,
            }),
            invalidatesTags:['removeMember'],
        }),
        updateCompanyInfo: build.mutation({
            query: ({values, companyId}) => ({
                    url: `company/${companyId}`,
                    method: 'PATCH',
                    body: values,
                }),
            invalidatesTags:['companyInfo'],
        }),
    }),
    overrideExisting: false,
});

export const {useGetAllCompaniesQuery, useAddCompanyMutation, useGetCompanyInfoQuery, useUpdateCompanyInfoMutation, useRemoveCompanyMutation, useRemoveMemberMutation} = companiesAPI;