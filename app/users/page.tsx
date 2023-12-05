"use client"
import MockComponent from "@/Components/MockComponent/MockComponent";
import { useAppSelector } from "@/hooks/redux";
import { getUserToken } from "@/redux/users/selectors";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MainStyled } from "./Users.styled";
import UsersList from "@/Components/UsersList/UsersList";
import { useGetAllUsersQuery } from "@/redux/users/userAPI";


export default function Users() {
  const router = useRouter()
  const isAuth = useAppSelector(getUserToken)
  const { data }=useGetAllUsersQuery({})

  

  useEffect(() => {
    if (!isAuth) {
      router.push('/signIn');
    }
  }, [isAuth]);
  

  return (
    <MainStyled >
      <h1>This is Users page!!!</h1>
      <UsersList data={ data} />
      {/* <MockComponent/> */}
    </MainStyled>
  )
}
