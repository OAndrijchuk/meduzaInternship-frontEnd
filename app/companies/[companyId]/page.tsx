import MockComponent from "@/Components/MockComponent/MockComponent";

type Props = {
  params: {
    companyId: string;
  };
};

export default async function CompanyProfile({ params: { companyId } }: Props ) {

  return (
    <div >
      <h1>This is page Company with id: {companyId}</h1>
      <MockComponent/>
    </div>
  )
}
