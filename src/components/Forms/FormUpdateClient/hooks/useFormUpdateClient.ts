import { formUpdateClientSchemaData } from "../../../../schemas/formUpdateClient.schema";
import { processCurrency } from "../../../../utills/functions/formatToNumberInt";
import { useFormUpdateClientService } from "./useFormUpdateClientService";
import { User } from "../../../../Api/@types/user";
type Props = {
  data: User;
  handleToggleModal: () => void;
};

export function useFormUpdateClient({ data, handleToggleModal }: Props) {
  const { updateClientMutation } = useFormUpdateClientService({
    data,
  });

  async function handleSubmit(data: Partial<formUpdateClientSchemaData>) {
    const processedWage = data.wage ? processCurrency(data.wage) : undefined;
    const processedEnterprise = data.enterprise
      ? processCurrency(data.enterprise)
      : undefined;

    try {
      await updateClientMutation({
        name: data.name,
        wage: processedWage,
        enterprise: processedEnterprise,
      });
      handleToggleModal();
    } catch (error) {}
    // toast de erro
  }

  return { handleSubmit };
}
