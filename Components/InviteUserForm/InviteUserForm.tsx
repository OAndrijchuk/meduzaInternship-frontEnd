import React from 'react'
import { FormStyled } from './InviteUserForm.styled'
import { Autocomplete, Button, Stack, TextField } from '@mui/material'
import { useGetProfileQuery, useGetUserInfoQuery } from '@/redux/users/userAPI';
import { ICompany } from '@/Types';
import { useGetAllCompaniesQuery } from '@/redux/companies/companiesAPI';
import { useAddInviteMutation } from '@/redux/companies/invitesAPI';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
    userId: number;
}

const InviteUserForm = ({ userId }: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    const { data:userData, isSuccess:isUser } = useGetUserInfoQuery(userId);
    const { data: owner, isSuccess } = useGetProfileQuery();
    const { data, isSuccess: isDone } = useGetAllCompaniesQuery({})
    const [createInvite, { }] = useAddInviteMutation();
    const [value, setValue] = React.useState<ICompany | null>(null);
    if (!isSuccess || !isDone) return;
    const companies = data?.filter((company:ICompany) =>  company.owner.id === owner.id)

    const sendInvite = async () => {
        try {
            if (!value) {
            alert("Виберіть компанію. Поле Company не може бути порожнім");
            return;
            }
            const rezObj = {
                companyId:value.id,
                userId,
            }
            console.log(rezObj);
            await createInvite(rezObj)
            router.push(pathname)
        } catch (error: any) {
             alert(`Помилка: ${error.massage}`);
        }
    }

    return (
        isSuccess&&<FormStyled>
            <h2>Invite user</h2>
            <Stack spacing={1} sx={{ width: '100%' }}>
                <Autocomplete
                    options={companies}
                    getOptionLabel={(company: ICompany) => company.companyName}
                    getOptionDisabled={(option) =>
                        option.employee.some(({ userId: user }) => user.id === userId)
                        || option.invitations.some(({ user }) => user.id === userId)
                        || option.candidates.some(({ user }) => user.id === userId)
                    }
                    renderInput={(params) => (
                        <TextField {...params} label="Company" variant="standard"/>
                    )}
                    value={value}
                    onChange={(event: any, newValue: ICompany | null) => {
                        setValue(newValue);
                    }}
                />
                 {isUser&&<TextField
                    type='text'
                    variant="standard"
                    label='User'
                    defaultValue={userData?.userName}
                    InputProps={{
                        readOnly: true,
                    }}
                />}
            </Stack>
            <Button variant="contained" type="button" sx={{ width: '100%' }} size='large' onClick={sendInvite}>Send invite</Button>
        </FormStyled>
  )
}

export default InviteUserForm