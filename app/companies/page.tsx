"use client"
import { useAppSelector } from "@/hooks/redux";
import { useGetAllCompaniesQuery } from "@/redux/companies/companiesAPI";
import { getUserToken } from "@/redux/users/selectors";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import { AddCompanyBtnStyled, MainStyled } from "./Companies.styled";
import CompaniesList from "@/Components/CompaniesList/CompaniesList";
import FAButton from "@/Components/FAButton/FAButton";
import { Add } from "@mui/icons-material";
import TheModal from "@/Components/Modal/TheModal";
import AddCompanyForm from "@/Components/AddCompanyForm/AddCompanyForm";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Companies({searchParams}:Props) {
  const router = useRouter()
  // const isAuth = useAppSelector(getUserToken)
  const { data } = useGetAllCompaniesQuery({})

  // useEffect(() => {
  //   if (!isAuth) {
  //     router.push('/signIn');
  //   }
  // },[isAuth]);


  const addCompany = () => {
    router.push("companies?modal=true")
  }

  const showModal = searchParams?.modal;

  return (
    <MainStyled >
      <h1>This is page Companies!!!</h1>
      <CompaniesList data={data} />
      <AddCompanyBtnStyled>
        <FAButton helpText="Add new company" icon={<Add />} onClick={addCompany} />
      </AddCompanyBtnStyled>
      {showModal &&
        <TheModal>
          <AddCompanyForm />
        </TheModal>}
    </MainStyled>
  )
}
