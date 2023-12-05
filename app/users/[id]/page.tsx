'use client'
import { useGetUserInfoQuery } from "@/redux/users/userAPI";
import { Avatar, SvgIcon, Typography } from "@mui/material";
import { UserInfoContainer } from "./Profile.styled";
import { Clear, Done } from "@mui/icons-material";

type Props = {
  params: {
    id: string;
  };
};

 function Profile({ params: { id } }: Props) {
  
  const { data } = useGetUserInfoQuery(id);

  return (
    <div >
      <UserInfoContainer>
        <Avatar alt={data?.userName} src={data?.avatar} sx={{width:'150px',height:'150px', alignSelf:'center'} } />
      <Typography component='p'>{data?.userName}</Typography>
      <Typography component='p'>{data?.email}</Typography>
      <Typography component='p' sx={{display: 'flex', alignItems:'bottom', gap:'20px'}}>Verification account {data?.isVerify?<Done color='success'/>:<Clear color='error'/>}</Typography>
      </UserInfoContainer>
      {/* <MockComponent/> */}
    </div>
  )
 }

export default Profile;