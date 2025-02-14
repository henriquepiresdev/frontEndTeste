import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context";
import { UserFormData } from "../../../schemas/formHome.schema";

export function useFormInitial() {
  const { setUsername, username } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (data: UserFormData) => {
    setUsername(data.name);
    navigate("/clients");
  };
  return {
    handleSubmit,
  };
}
