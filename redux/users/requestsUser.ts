import { globalSplitApi } from '@/Api/globalApi';

export const requestsAPI = globalSplitApi.injectEndpoints({
    endpoints: (build) => ({
        addRequest: build.mutation({
            query: (body) => ({
                url: `user-request`,
                method: 'POST',
                body,
            }),
            invalidatesTags:['addInvite'],
        }),
        removeRequest: build.mutation({
            query: ({id}) => ({
                url: `user-request/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['removeInvite'],
        }),
        updateRequest: build.mutation({
            query: ({body, id}) => ({
                    url: `user-request/${id}`,
                    method: 'PATCH',
                    body,
                }),
            invalidatesTags:['updateInvite'],
        }),
    }),
    overrideExisting: false,
});

export const { useAddRequestMutation, useUpdateRequestMutation, useRemoveRequestMutation} = requestsAPI;