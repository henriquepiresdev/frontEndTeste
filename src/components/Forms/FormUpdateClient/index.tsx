import { useFormUpdateClient } from "./hooks/useFormUpdateClient";
import { User } from "../../../Api/@types/user";
import { ClientForm } from "../FormClient";
import {
  formUpdateClientSchemaData,
  formUpdateClientSchema,
} from "../../../schemas/formUpdateClient.schema";
import React from "react";

type FormHomeProps = {
  className?: string;
  data: User;
  handleToggleModal: () => void;
};

export function FormUpdateClient({
  className,
  data,
  handleToggleModal,
}: FormHomeProps) {
  const { handleSubmit } = useFormUpdateClient({ data, handleToggleModal });

  return (
    <ClientForm<formUpdateClientSchemaData>
      schema={formUpdateClientSchema}
      defaultValues={{
        name: "",
        wage: "",
        enterprise: "",
      }}
      onSubmit={handleSubmit}
      title="Atualizar cliente:"
      buttonText="Criar cliente"
      className={`border-none p-3 w-full max-w-[400px]${className}`}
    />
  );
}
