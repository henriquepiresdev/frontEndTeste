import { formCreateClientSchemaData } from "../../../../schemas/formCreateClientSchema";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../../../utills/tailwind/cn";
import { useFormContext } from "react-hook-form";

type InputProps = {
  name: keyof formCreateClientSchemaData;
  label?: string;
  placeholder?: string;
  className?: string;
};

const formatCurrency = (value: string): string => {
  if (!value) return "";
  const numericValue = parseInt(value.padStart(3, "0"), 10) / 100;
  return numericValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const parseCurrency = (formattedValue: string): string => {
  const cleaned = formattedValue.replace(/\D/g, "");
  return cleaned === "" ? "" : cleaned.replace(/^0+/, "");
};

export function InputCurrency({
  name,
  label,
  placeholder = "R$ 00,00",
  className = "",
}: InputProps) {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<formCreateClientSchemaData>();
  const fieldValue = watch(name) as string;
  const [displayValue, setDisplayValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const formatted = fieldValue ? formatCurrency(fieldValue) : "";
    setDisplayValue(formatted);
  }, [fieldValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseCurrency(e.target.value);
    if (newValue.length > 14) return;

    setValue(name, newValue as never, { shouldValidate: true });

    requestAnimationFrame(() => {
      if (inputRef.current) {
        const pos = e.target.value.length;
        inputRef.current.setSelectionRange(pos, pos);
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      const newValue = parseCurrency(fieldValue?.slice(0, -1) || "");
      setValue(name, newValue as never, { shouldValidate: true });
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col">
      {label && <label className="font-semibold mb-1">{label}</label>}

      <input
        ref={inputRef}
        type="text"
        value={displayValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={cn(
          "border p-2 rounded transition-all duration-300 ease-in-out focus:ring-2 focus:ring-orange- outline-none",
          "focus:ring-2 outline-none text-right",
          "font-mono placeholder:text-gray-",
          className,
          { "border-red-500": errors[name] }
        )}
        inputMode="numeric"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1 animate-fadeIn">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
