import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProfilePage() {

  const params = useParams()

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca do {params.name}</h1>
    </MainContainer>
  );
}

export default ProfilePage;
