"use client"
import MockComponent from "@/Components/MockComponent/MockComponent";
import { useAppSelector } from "@/hooks/redux";
import { getUserToken } from "@/redux/users/selectors";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Users() {
  const router = useRouter()
  const isAuth = useAppSelector(getUserToken)
  
  useEffect(() => {
    if (!isAuth) {
      router.push('/signIn');
    }
  });

  return (
    <div >
      <h1>This is page Users!!!</h1>
      <MockComponent/>
    </div>
  )
}
