import { Box, Button} from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import CustomInput from '../CustomInput/CustomInput';
import { useAddCompanyMutation } from '@/redux/companies/companiesAPI';
import { useRouter } from 'next/navigation';
import { FormStyled } from './AddCompanyForm.styled';


const AddCompanyForm = () => {
  const router = useRouter()
  const [addCompany, { isSuccess }] = useAddCompanyMutation()
  
    if (isSuccess) {
      router.back()
    }

const formik = useFormik({
    initialValues: { companyName: '', description: '' },
    validationSchema: Yup.object().shape({
      companyName: Yup.string().min(3, 'Company name should be of minimum 3 characters length').required('Company name is required'),
      description: Yup.string().min(6,'Description should be of minimum 6 characters length')
    }),
  onSubmit: async (values) => {
    await addCompany(values); 
    },
});

    return (
        <>
          <FormStyled
          component='form'
          onSubmit={formik.handleSubmit}
        >
              <h2>Add new company</h2>
              <CustomInput id="companyName" label="Company name" formik={formik} />
              <CustomInput id="description" label="Description" formik={formik} isMultiline={true} />
              <Button variant="contained" type="submit" sx={{ width: '100%' }} size='large'>Add new company</Button>       
          </FormStyled>
        </>
  )
}

export default AddCompanyForm

