import { FieldValues, DefaultValues } from "react-hook-form";
import { InputCurrency } from "../Input/InputCurrency";
import { ButtonCustom } from "../../Button";
import { Input } from "../Input";
import { Form } from "../Form";
import { ZodType } from "zod";
import React from "react";

interface ClientFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: DefaultValues<T>;
  onSubmit: (data: T) => void;
  title: string;
  buttonText: string;
  className?: string;
}

export function ClientForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  title,
  buttonText,
  className,
}: ClientFormProps<T>) {
  return (
    <Form<T>
      schema={schema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      className={`border-none p-3 w-full max-w-[400px] ${className}`}
    >
      <h2 className="font-bold text-2xl">{title}</h2>
      <Input
        name="name"
        label="Nome"
        placeholder="Digite seu nome"
        className="flex justify-center items-center placeholder:text-lg h-16 bg-white- border-gray-400 text-lg "
      />
      <InputCurrency
        name="wage"
        label="Salário"
        placeholder="R$ 00,00"
        className="flex justify-center items-center placeholder:text-lg h-16 text-lg bg-white- border-gray-400"
      />
      <InputCurrency
        name="enterprise"
        label="Valor da empresa"
        placeholder="R$ 00,00"
        className="flex justify-center items-center placeholder:text-lg h-16 text-lg bg-white- border-gray-400 mb-2"
      />
      <ButtonCustom
        type="submit"
        className="bg-orange- p-4 text-white rounded w-full"
      >
        {buttonText}
      </ButtonCustom>
    </Form>
  );
}
