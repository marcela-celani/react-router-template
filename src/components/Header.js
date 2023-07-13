import { useNavigate } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import { goToHome, goToProfile } from "../routes/coordinator";


function Header() {

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={()=>goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={()=>goToProfile(navigate, 'easley')}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
