import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import {
  DefaultValues,
  SubmitHandler,
  FormProvider,
  FieldValues,
  useForm,
} from "react-hook-form";
import { cn } from "../../../utills/tailwind/cn";

type FormProps<T extends FieldValues> = {
  schema: z.ZodType<T>;
  defaultValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
};

export function Form<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className = "",
}: FormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = (data: T) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={cn("space-y-4 p-4 border rounded-md", className)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
