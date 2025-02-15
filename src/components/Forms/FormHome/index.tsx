import { formHomeSchema, UserFormData } from "../../../schemas/formHome.schema";
import { useFormInitial } from "./hooks/useFormInitial";
import { ButtonCustom } from "../../Button";
import { Input } from "../Input";
import { Form } from "../Form";
import React from "react";

type FormHomeProps = {
  className?: string;
};

export function FormHome({ className }: FormHomeProps) {
  const { handleSubmit } = useFormInitial();
  return (
    <Form<UserFormData>
      schema={formHomeSchema}
      defaultValues={{ name: "" }}
      onSubmit={handleSubmit}
      className={className}
    >
      <Input
        name="name"
        placeholder="Digite seu nome"
        className="flex justify-center items-center placeholder:text-2xl h-16 text-2xl bg-white- border-gray-400"
      />
      <ButtonCustom
        type="submit"
        className="bg-orange- text-white p-2 rounded mt-2 w-full"
      >
        Enviar
      </ButtonCustom>
    </Form>
  );
}
