import { UserFormData } from "../../../../schemas/formHome.schema";
import { useUserContext } from "../../../../context";
import { useNavigate } from "react-router-dom";

export function useFormInitial() {
  const { setUsername } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (data: UserFormData) => {
    const firstName = data.name.split(" ")[0].slice(0, 16);
    if (firstName.length === 16) {
      const formatedName = `${firstName}...`;
      setUsername(formatedName);
      localStorage.setItem("username", formatedName);
    } else {
      setUsername(firstName);
      localStorage.setItem("username", firstName);
    }
    navigate("/clients");
  };

  return {
    handleSubmit,
  };
}
