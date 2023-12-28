import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { FormStyled } from './RequestCompanyForm.styled'
import { useGetCompanyInfoQuery } from '@/redux/companies/companiesAPI'
import { useAppSelector } from '@/hooks/redux'
import { getUser} from '@/redux/users/selectors'
import { useAddRequestMutation } from '@/redux/users/requestsUser'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
    companyId:number
}

const RequestCompanyForm = ({ companyId }: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    const { data: company, isSuccess } = useGetCompanyInfoQuery(companyId)
    const [createRequest, {}]  = useAddRequestMutation()
    const user = useAppSelector(getUser)

    const isInEmployee = company?.employee.some((maker:any)=>maker.userId.id===user.id)
    const isInInvitations = company?.invitations.some((invite:any)=>invite.user.id===user.id)
    const isInCandidates = company?.candidates.some((request:any)=>request.user.id===user.id)
    const isBlocked = isInEmployee || isInInvitations || isInCandidates

    const sendRequest = async () => {
        try {
            await createRequest({ companyId });
            router.push(pathname)
        } catch (error: any) {
             alert(`Помилка: ${error.massage}`);
        }
    }

    return (
        <>
            {isSuccess && isInEmployee && <h2>You are already work in this company!</h2>}
            {isSuccess && isInInvitations && <h2>You are already have invite with this company!</h2>}
            {isSuccess && isInCandidates && <h2>You are already send request in this company!</h2>}
            {isSuccess && !isBlocked &&
            <FormStyled>
                <h2>Request company</h2>
                <Stack spacing={1} sx={{ width: '100%' }}>
                    <TextField
                        type='text'
                        variant="standard"
                        label='Company'
                        defaultValue={company?.companyName}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        type='text'
                        variant="standard"
                        label='User'
                        defaultValue={user?.userName}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Stack>
                <Button variant="contained" type="button" sx={{ width: '100%' }} size='large' onClick={sendRequest}>Send request</Button>
            </FormStyled>
            }
    </>
    )
}

export default RequestCompanyForm