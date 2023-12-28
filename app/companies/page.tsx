"use client"
import { useGetAllCompaniesQuery } from "@/redux/companies/companiesAPI";
import { useRouter } from "next/navigation";
import { AddCompanyBtnStyled, MainStyled } from "./Companies.styled";
import CompaniesList from "@/Components/CompaniesList/CompaniesList";
import FAButton from "@/Components/ControlButtons/FAButton/FAButton";
import { Add } from "@mui/icons-material";
import TheModal from "@/Components/Modal/TheModal";
import AddCompanyForm from "@/Components/AddCompanyForm/AddCompanyForm";
import { useState } from "react";
import RequestCompanyForm from "@/Components/RequestCompanyForm/RequestCompanyForm";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Companies({searchParams}:Props) {
  const router = useRouter()
  const { data } = useGetAllCompaniesQuery({})
  const [companyAction, setCompanyAction] = useState<string>('')
  const [companyId, setCompanyId] = useState<null | number>(null)

// console.log('companies===>>>', data);


  const addCompany = () => {
    setCompanyAction('createCompany');
    router.push("companies?modal=true")
    
  }
  const createRequest = async ({id}:{id: number}) => {
    console.log(id);
    Promise.all([setCompanyId(id), setCompanyAction('createRequest')]);
    router.push("companies?modal=true")
  }

  const showModal = searchParams?.modal;

  return (
    <MainStyled >
      <h1>This is page Companies!!!</h1>
      <CompaniesList data={data} actionButtons={{ add: createRequest }}/>
      <AddCompanyBtnStyled>
        <FAButton helpText="Add new company" icon={<Add />} onClick={addCompany} />
      </AddCompanyBtnStyled>
      {showModal &&
        <TheModal>
          {companyAction === 'createCompany' && <AddCompanyForm />}
          {companyAction === 'createRequest' && companyId && <RequestCompanyForm companyId={companyId}/>}
        </TheModal>}
    </MainStyled>
  )
}
