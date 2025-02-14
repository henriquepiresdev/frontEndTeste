import { useFormContext } from "react-hook-form";
import { UserFormData } from "../../schemas/formHome.schema";
import React from "react";
import { cn } from "../../utills/tailwind/cn"; // Importando a função de merge de classes

type InputProps = {
  name: keyof UserFormData;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
};

export function Input({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserFormData>();

  return (
    <div className="flex flex-col">
      {label && <label className="font-semibold">{label}</label>}
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={cn(
          "border p-2 rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-gray-400 outline-none",
          className,
          {
            "border-red-500": errors[name],
          }
        )}
      />
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
