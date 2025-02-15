import { formCreateClientSchemaData } from "../../../../schemas/formCreateClientSchema";
import { processCurrency } from "../../../../utills/functions/formatToNumberInt";
import { useFormCreateClientService } from "./useFormCreateClientService";

export function useFormCreateClient() {
  const { createClientMutation } = useFormCreateClientService();

  async function handleSubmit(data: formCreateClientSchemaData) {
    const processedWage = processCurrency(data.wage);
    const processedEnterprise = processCurrency(data.enterprise);
    try {
      await createClientMutation({
        name: data.name,
        wage: processedWage,
        enterprise: processedEnterprise,
        isSelected: false,
      });
    } catch (error) {}
    //toast de erro
  }

  return { handleSubmit };
}
