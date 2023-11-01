import MockComponent from "@/Components/MockComponent/MockComponent";

type Props = {
  params: {
    userId: string;
  };
};

export default async function Profile({ params: { userId } }: Props ) {

  return (
    <div >
      <h1>This is page for user with id:{userId}</h1>
      <MockComponent/>
    </div>
  )
}
