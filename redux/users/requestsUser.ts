import { globalSplitApi } from '@/Api/globalApi';

export const requestsAPI = globalSplitApi.injectEndpoints({
    endpoints: (build) => ({
        addRequest: build.mutation({
            query: (body) => ({
                url: `user-request`,
                method: 'POST',
                body,
            }),
            // invalidatesTags:['addInvite'],
        }),
        // removeInvite: build.mutation({
        //     query: ({companyId, inviteId}) => ({
        //         url: `company/${companyId}/invites/${inviteId}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags:['removeInvite'],
        // }),
        // updateInvite: build.mutation({
        //     query: ({values, companyId, inviteId}) => ({
        //             url: `company/${companyId}/invites/${inviteId}`,
        //             method: 'PATCH',
        //             body: values,
        //         }),
        //     invalidatesTags:['updateInvite'],
        // }),
    }),
    overrideExisting: false,
});

export const { useAddRequestMutation, useRemoveInviteMutation, useUpdateInviteMutation} = requestsAPI;