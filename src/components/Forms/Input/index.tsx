import { formCreateClientSchemaData } from "../../../schemas/formCreateClientSchema";
import { cn } from "../../../utills/tailwind/cn";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";
import React from "react";

type InputProps = {
  name: keyof formCreateClientSchemaData;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  mask?: string;
};

export function Input({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
  mask,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<formCreateClientSchemaData>();

  return (
    <div className="flex flex-col">
      {label && <label className="font-semibold">{label}</label>}
      {mask ? (
        <InputMask
          mask={mask}
          {...register(name)}
          placeholder={placeholder}
          className={cn(
            "border p-2 rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-orange-  outline-none",
            className,
            {
              "border-red-500": errors[name],
            }
          )}
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={cn(
            "border p-2 rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-orange-  outline-none autofill:bg-none",
            className,
            {
              "border-red-500": errors[name],
            }
          )}
        />
      )}
      <p
        className={cn("text-red-500 text-sm mt-1 transition-all duration-300", {
          "opacity-100 translate-y-0": errors[name],
          "opacity-0 translate-y-2": !errors[name],
        })}
      >
        {errors[name]?.message}
      </p>
    </div>
  );
}
