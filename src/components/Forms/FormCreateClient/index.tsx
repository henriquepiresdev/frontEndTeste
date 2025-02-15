import { useFormCreateClient } from "./hooks/useFormCreateClient";
import { ClientForm } from "../FormClient";
import React from "react";
import {
  formCreateClientSchemaData,
  formCreateClientSchema,
} from "../../../schemas/formCreateClientSchema";

type FormHomeProps = {
  className?: string;
};

export function FormCreateClient({ className }: FormHomeProps) {
  const { handleSubmit } = useFormCreateClient();

  return (
    <ClientForm<formCreateClientSchemaData>
      schema={formCreateClientSchema}
      defaultValues={{ name: "", wage: "", enterprise: "" }}
      onSubmit={handleSubmit}
      title="Criar Cliente:"
      buttonText="Criar cliente"
      className={`border-none p-3 w-full max-w-[400px] ${className}`}
    />
  );
}
