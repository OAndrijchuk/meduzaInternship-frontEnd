import { globalSplitApi } from '@/Api/globalApi';

export const invitesAPI = globalSplitApi.injectEndpoints({
    endpoints: (build) => ({
        addInvite: build.mutation({
            query: ({userId, companyId}) => ({
                url: `company-invites/${companyId}`,
                method: 'POST',
                body: {
                    userId
                },
            }),
            invalidatesTags:['addInvite'],
        }),
        removeInvite: build.mutation({
            query: ({companyId, inviteId}) => ({
                url: `company-invites/${companyId}/${inviteId}`,
                method: 'DELETE',
            }),
            invalidatesTags:['removeInvite'],
        }),
        updateInvite: build.mutation({
            query: ({values, companyId, inviteId}) => ({
                    url: `company-invites/${companyId}/${inviteId}`,
                    method: 'PATCH',
                    body: values,
                }),
            invalidatesTags:['updateInvite'],
        }),
    }),
    overrideExisting: false,
});

export const { useAddInviteMutation, useRemoveInviteMutation, useUpdateInviteMutation} = invitesAPI;