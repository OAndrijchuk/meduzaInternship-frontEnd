"use client"
import TheModal from "@/Components/Modal/TheModal";
import { MainStyled } from "./Users.styled";
import UsersList from "@/Components/UsersList/UsersList";
import { useGetAllUsersQuery } from "@/redux/users/userAPI";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import InviteUserForm from "@/Components/InviteUserForm/InviteUserForm";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Users({searchParams}:Props) {
  const router = useRouter()
  const pathname = usePathname()
  const { data } = useGetAllUsersQuery({})
  const [userId, setUserId] = useState(-1)
  
  const inviteUser = ({id}:{id:number}) => {
    setUserId(id)
    router.push(`${pathname}?modal=true`)
  }

  const showModal = searchParams?.modal;

  return <>
    <MainStyled >
      <h1>This is Users page!!!</h1>
      <UsersList data={data} actionButtons={{ add: inviteUser }} />
    </MainStyled>
    {showModal &&
      <TheModal>
        <InviteUserForm userId={ userId } />
      </TheModal>}
    </>
  
}
