import { UseFormRegister, FieldError } from "react-hook-form";
import { IBook } from "@/type";

interface InputFieldProps {
  id: keyof IBook
  label: string
  type: string
  register: UseFormRegister<IBook> 
  requiredMessage: string
  maxLengthMessage?: string
  minLengthMessage?: string
  maxLength?: number
  minLength?: number
  min?:number
  minMessage?:string
  error?: FieldError
}

const InputField = ({
  id,
  label,
  type,
  register,
  requiredMessage,
  maxLength,
  minLength,
  maxLengthMessage,
  minLengthMessage,
  min,
  minMessage,
  error,
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-neutral-300">{label}</label>
      <input
        type={type}
        id={id}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full text-neutral-800 focus:outline-none"
        {...register(id, {
          required: requiredMessage,
          maxLength: maxLength && {
            value: maxLength,
            message: maxLengthMessage || `최대 ${maxLength}글자 이하입니다.`,
          },
          minLength: minLength && {
            value: minLength,
            message: minLengthMessage || `최소 ${minLength}글자 이상 입니다.`,
          },
          min: min && {
            value: min,
            message: minMessage || `최소 값은 ${min}입니다.`,
          }
        })}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
    </div>
  );
};

export default InputField;
