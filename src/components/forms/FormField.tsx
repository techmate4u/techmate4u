import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import FormError from "./FormError";

interface BaseFieldProps {
  label: string;
  error?: string;
  isTextArea?: boolean;
  isSelect?: boolean;
  options?: { value: string; label: string }[];
}

type InputProps = BaseFieldProps & 
  InputHTMLAttributes<HTMLInputElement> & 
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  SelectHTMLAttributes<HTMLSelectElement>;

export default function FormField({
  label,
  error,
  isTextArea = false,
  isSelect = false,
  options = [],
  className = "",
  id,
  placeholder,
  ...props
}: InputProps) {
  const fieldClasses = `w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-200 outline-none font-medium text-[var(--text)] bg-[var(--cta-input)] ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
      : "border-[var(--line)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
  } ${className}`.trim();

  return (
    <div className="flex flex-col w-full text-left">
      <label htmlFor={id} className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--text-soft)]">
        {label}
      </label>
      {isTextArea ? (
        <textarea id={id} className={fieldClasses} rows={4} placeholder={placeholder} {...props} />
      ) : isSelect ? (
        <select id={id} className={fieldClasses} defaultValue="" {...props}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} className={fieldClasses} placeholder={placeholder} {...props} />
      )}
      <FormError message={error} />
    </div>
  );
}
