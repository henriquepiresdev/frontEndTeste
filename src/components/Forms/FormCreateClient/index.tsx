import { useFormCreateClient } from "./hooks/useFormCreateClient";
import { ButtonCustom } from "../../Button";
import { Input } from "../Input";
import { Form } from "../Form";
import React from "react";
import {
  formCreateClientSchemaData,
  formCreateClientSchema,
} from "../../../schemas/formCreateClientSchema";
import { InputCurrency } from "../Input/InputCurrency";

type FormHomeProps = {
  className?: string;
};

export function FormCreateClient({ className }: FormHomeProps) {
  const { handleSubmit } = useFormCreateClient();

  return (
    <Form<formCreateClientSchemaData>
      schema={formCreateClientSchema}
      defaultValues={{ name: "", wage: "", enterprise: "" }}
      onSubmit={handleSubmit}
      className="border-none p-3 w-full max-w-[400px]"
    >
      <h2 className="font-bold text-2xl">Criar Cliente:</h2>
      <Input
        name="name"
        label="Nome"
        placeholder="Digite seu nome"
        className="flex justify-center items-center placeholder:text-lg h-16 bg-white- border-gray-400 text-lg "
      />
      <InputCurrency
        name="wage"
        label="Salário"
        placeholder="R$ 0,00"
        className="flex justify-center items-center placeholder:text-lg h-16  text-lg bg-white- border-gray-400"
      />
      <InputCurrency
        name="enterprise"
        label="Valor da empresa"
        placeholder="R$ 0,00"
        className="flex justify-center items-center placeholder:text-lg h-16  text-lg bg-white- border-gray-400 mb-2"
      />
      <ButtonCustom
        type="submit"
        className="bg-orange- p-4 text-white  rounded w-full"
      >
        Criar cliente
      </ButtonCustom>
    </Form>
  );
}
